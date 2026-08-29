
(function(){
"use strict";

var BOARD = "https://claude.ai/code/artifact/8d0bff19-5549-4d2d-953c-b3c7a827420e";

var GRID = [
  {day:"Mon", deep:"MTH_102", dn:"New week's topic",   fast:"GST_112", fn:"Whole week + forum post"},
  {day:"Tue", deep:"PHY_102", dn:"New week's topic",   fast:"CSC_106", fn:"Whole week. You know this."},
  {day:"Wed", deep:"COS_102", dn:"Theory + algorithm", fast:"GST_122", fn:"Whole week + forum post"},
  {day:"Thu", deep:"MTH_102", dn:"Problems only",      fast:"PHY_108", fn:"Practical + report now"},
  {day:"Fri", deep:"PHY_102", dn:"Derivations",        fast:"REVIEW",  fn:"Summaries + pick Sunday topics"},
  {day:"Sat", deep:"COS_102", dn:"Write the code",     fast:"CATCHUP", fn:"Last week's questions"}
];
var NAMES = {
  MTH_102:"MTH 102", PHY_102:"PHY 102", COS_102:"COS 102", PHY_108:"PHY 108",
  GST_112:"GST 112", GST_122:"GST 122", CSC_106:"CSC 106", MIVA_COS_111:"MIVA-COS 111",
  REVIEW:"Review", CATCHUP:"Catch-up"
};
var GENERIC_WHY = [
  "Say it again without using the textbook words.",
  "Why does that step work — what makes it valid?",
  "What would break if you skipped it?",
  "What is the simplest case where this still applies?",
  "How would you check you got the right answer, without the answer?"
];
var RUNWAY = [
  "Take all 8 pre-semester tests — ungraded, and they show where you are weak before you spend an hour anywhere",
  "Clear MIVA-COS 111 entirely — 3 activities",
  "Speed-run CSC 106 Weeks 1–3 at 1.75×",
  "Skim the study guide PDF for PHY 102 and MTH 102"
];
var LETTERS = ["A","B","C","D","E","F"];

var S, ME=null, TAB="tonight", QUIZ=null, MANUAL=null,
    TOAST=null, VIEWWEEK=null, BRIEF=false;
var WEEKS = {};          /* week number -> pack, fetched on demand */
var LOADING = {};        /* week number -> true while in flight */
var INDEX = null;
var STORAGE = "loading"; /* loading | blob | none | error */
var SYNCING = false;
var LS = "miva_state_v3";
var GATE = "checking";   /* checking | locked | open | setup */
var PWBUSY = false, PWERR = null;
var EXAM = null;         /* course index */
var EXAMCACHE = {};      /* course -> paper json */
var GUIDECACHE = {};     /* course -> markdown */
var EXVIEW = null;       /* {course, mode:"guide"|"paper"} */
var EXQUIZ = null;       /* an in-progress mock */
var EXLS = "miva_exam_v1";

/* ---------- state ---------- */
function blankState(){
  return {semesterStart:"2026-09-07", maxPeople:2, people:[], scores:{}};
}
function mirror(){
  try{ localStorage.setItem(LS, JSON.stringify({people:S.people, scores:S.scores})); }catch(e){}
}
function readMirror(){
  try{
    var raw = localStorage.getItem(LS);
    if(!raw) return null;
    var d = JSON.parse(raw);
    if(d && d.people && d.scores) return d;
  }catch(e){}
  return null;
}
function myScores(){
  var out = {}, pre = ME + "|";
  Object.keys(S.scores).forEach(function(k){ if(k.indexOf(pre)===0) out[k] = S.scores[k]; });
  return out;
}
function push(msg){
  mirror();
  if(STORAGE !== "blob"){ toast(msg ? msg + " · this device only" : "Saved on this device"); return; }
  var p = findPerson(ME);
  if(!p){ toast(msg||"Saved"); return; }
  SYNCING = true; render();
  fetch("/api/state", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({id:p.id, name:p.name, joinedAt:p.joinedAt, scores:myScores()})
  }).then(function(r){ return r.json(); }).then(function(d){
    SYNCING = false;
    if(d && d.ok) toast(msg || "Saved for both of you");
    else toast((d && d.error) ? d.error : "Could not sync — kept on this device");
    render();
  }).catch(function(){
    SYNCING = false;
    toast("Offline — saved on this device");
    render();
  });
}
function save(msg){ render(); push(msg); }

function pull(){
  return fetch("/api/state", {cache:"no-store"}).then(function(r){
    if(r.status === 401){ GATE = "locked"; render(); return null; }
    return r.json();
  }).then(function(d){
    if(!d || !d.ok){ if(d) STORAGE = "error"; return; }
    STORAGE = d.storage;
    if(d.storage === "blob"){
      /* the server is the truth for everyone; keep any local-only rows the
         server has not seen yet so nothing typed offline is thrown away */
      var local = S.scores;
      S.people = d.people || [];
      S.scores = d.scores || {};
      Object.keys(local).forEach(function(k){
        if(!S.scores[k] && ME && k.indexOf(ME+"|")===0) S.scores[k] = local[k];
      });
      mirror();
    }
  }).catch(function(){ STORAGE = "error"; });
}

/* ---------- week packs ---------- */
function ensureWeek(n){
  if(!n || n<1 || n>12) return;
  if(WEEKS[n] || LOADING[n]) return;
  LOADING[n] = true;
  fetch("/api/week?n="+n)
    .then(function(r){
      if(r.status === 401){ GATE = "locked"; render(); throw 0; }
      if(!r.ok) throw 0;
      return r.json();
    })
    .then(function(j){
      LOADING[n] = false;
      if(j && j.week) WEEKS[n] = j;
      render();
    })
    .catch(function(){ LOADING[n] = false; render(); });
}
function toast(t){
  TOAST=t; render();
  setTimeout(function(){ TOAST=null; render(); }, 2600);
}

/* ---------- dates ---------- */
function today(){ return new Date(); }
function ymd(d){
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}
function weekInfo(){
  var start = new Date(S.semesterStart+"T00:00:00");
  var now = today(); now.setHours(0,0,0,0);
  var diff = Math.floor((now - start) / 86400000);
  if(diff < 0) return {n:0, label:"Runway", daysToStart: Math.ceil(-diff)};
  var n = Math.floor(diff/7)+1;
  if(n > 12) return {n:13, label:"Revision"};
  return {n:n, label:"Week "+n};
}
function dayIdx(){ var d = today().getDay(); return d===0 ? -1 : d-1; }
function loadedWeeks(){
  if(INDEX && INDEX.weeks) return INDEX.weeks.map(function(x){ return x.week; });
  return Object.keys(WEEKS).map(Number).sort(function(a,b){ return a-b; });
}
/* The week to show. Starts at the calendar week (or week 1 before term) and walks
   forward past any week you have already finished all six sessions of, so a week
   you completed early never greets you again. The picker still overrides it. */
function defaultWeek(){
  var cal = weekInfo().n;
  var start = (cal >= 1 && cal <= 12) ? cal : 1;
  if(!ME) return start;
  for(var w = start; w <= 12; w++){
    if(weekTally(ME, w).done < 6) return w;
  }
  return 12;
}
function wk(){
  if(VIEWWEEK) return VIEWWEEK;
  return defaultWeek();
}
function aheadOfCalendar(){
  var cal = weekInfo().n;
  return (cal >= 1 && cal <= 12) && wk() > cal;
}
function weekData(n){
  if(!n) return null;
  if(WEEKS[n]) return WEEKS[n];
  ensureWeek(n);
  return null;
}

/* ---------- people ---------- */
function slug(n){
  var s = String(n||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
  return s || "user";
}
function findPerson(id){ return S.people.filter(function(p){ return p.id===id; })[0] || null; }
function findByName(n){
  var t = String(n||"").trim().toLowerCase();
  return S.people.filter(function(p){ return p.name.toLowerCase()===t; })[0] || null;
}
function others(){ return S.people.filter(function(p){ return p.id!==ME; }); }
function meName(){ var p=findPerson(ME); return p?p.name:"?"; }
function signIn(id){ ME = id; try{ localStorage.setItem("miva_me", id); }catch(e){} }
function signOut(){
  ME = null;
  try{ localStorage.removeItem("miva_me"); }catch(e){}
  TAB="tonight"; render();
}
function claimSlot(name){
  var n = String(name||"").trim();
  if(n.length < 1){ toast("Type a name first"); return; }
  if(n.length > 24) n = n.slice(0,24);
  var ex = findByName(n);
  if(ex){ signIn(ex.id); render(); return; }
  if(S.people.length >= (S.maxPeople||2)){ toast("Both places are taken"); return; }
  var id = slug(n), i=2;
  while(findPerson(id)){ id = slug(n)+"-"+i; i++; }
  S.people.push({id:id, name:n, joinedAt:new Date().toISOString()});
  signIn(id);
  save("Welcome, "+n);
  ensureWeek(wk());
}

/* ---------- scores ---------- */
function key(person, w, day){ return person+"|w"+w+"|"+day; }
function getScore(person, w, day){ return S.scores[key(person,w,day)] || null; }
function scoreClass(s){
  if(!s) return "";
  var r = s.score / s.max;
  return r >= 0.83 ? "g" : (r >= 0.5 ? "o" : "b");
}
function streak(){
  if(!ME) return 0;
  var days = {}, pre = ME+"|";
  Object.keys(S.scores).forEach(function(k){
    if(k.indexOf(pre)!==0) return;
    var s = S.scores[k];
    if(s && s.at) days[String(s.at).slice(0,10)] = true;
  });
  var d = today(); d.setHours(0,0,0,0);
  if(!days[ymd(d)]) d.setDate(d.getDate()-1);
  var n = 0, guard = 0;
  while(guard++ < 400){
    if(d.getDay() === 0){ d.setDate(d.getDate()-1); continue; }
    if(days[ymd(d)]){ n++; d.setDate(d.getDate()-1); } else break;
  }
  return n;
}
function totalMarks(){
  if(!ME) return 0;
  var pre = ME+"|", t = 0;
  Object.keys(S.scores).forEach(function(k){
    if(k.indexOf(pre)===0) t += (S.scores[k].score||0);
  });
  return t;
}
function weekTally(person, w){
  var got=0, max=0, done=0;
  GRID.forEach(function(d){
    var s = getScore(person, w, d.day);
    if(s){ got += s.score; max += s.max; done++; }
  });
  return {got:got, max:max, done:done};
}
function lowestFor(person, w){
  var out = [];
  for(var i=0;i<GRID.length;i++){
    var s = getScore(person, w, GRID[i].day);
    if(s) out.push({day:GRID[i].day, course:GRID[i].deep, ratio:s.score/s.max, s:s});
  }
  out.sort(function(a,b){ return a.ratio - b.ratio; });
  return out;
}
function sundayTopics(){
  var w = wk();
  var lists = S.people.map(function(p){ return {person:p, all:lowestFor(p.id, w)}; });
  if(!lists.some(function(l){ return l.all.length; })) return null;
  lists.forEach(function(l){ l.pick = l.all[0] || null; });
  if(lists.length === 2 && lists[0].pick && lists[1].pick && lists[0].pick.course === lists[1].pick.course){
    var keepIdx = lists[0].pick.ratio <= lists[1].pick.ratio ? 0 : 1;
    var moveIdx = keepIdx === 0 ? 1 : 0;
    var blocked = lists[keepIdx].pick.course;
    var alt = null;
    for(var i=0;i<lists[moveIdx].all.length;i++){
      if(lists[moveIdx].all[i].course !== blocked){ alt = lists[moveIdx].all[i]; break; }
    }
    lists[moveIdx].pick = alt;
    lists[moveIdx].bumped = true;
  }
  return lists;
}
function topicName(pick, w){
  if(!pick) return null;
  var wd = weekData(w); if(!wd || !wd.checks) return NAMES[pick.course]+" — "+pick.day+" session";
  var c = wd.checks.filter(function(x){ return x.day===pick.day; })[0];
  return c && c.topic ? c.topic : NAMES[pick.course]+" — "+pick.day+" session";
}
function whyFor(pick, w){
  var wd = weekData(w);
  if(wd && wd.recapCandidates){
    var m = wd.recapCandidates.filter(function(r){ return r.course === pick.course; })[0];
    if(m && m.whyQuestions && m.whyQuestions.length) return m.whyQuestions;
  }
  return GENERIC_WHY;
}

/* ---------- helpers ---------- */
function el(tag, cls, html){
  var e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html !== undefined) e.innerHTML = html;
  return e;
}
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g,function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }
function btn(cls, label, fn){ var b = el("button", cls, label); b.onclick = fn; return b; }
function topicBlock(parent, text, cls){
  var t = String(text||"").trim();
  if(!t) return;
  var p = el("p", (cls||"")+" clamp"); p.innerHTML = esc(t);
  parent.appendChild(p);
  if(t.length < 260){ p.className = cls||""; return; }
  var b = el("button","moreb","Read the full brief");
  b.onclick = function(){
    var open = p.className.indexOf("clamp") === -1;
    p.className = open ? (cls||"")+" clamp" : (cls||"");
    b.textContent = open ? "Read the full brief" : "Show less";
  };
  parent.appendChild(b);
}
var FLAME = '<svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor" aria-hidden="true"><path d="M6.6 0S7.4 2.4 5.6 4.3C3.9 6.1 1 7.3 1 10.1A5.5 5.5 0 0 0 6.5 15 5.5 5.5 0 0 0 12 10.1c0-2.6-1.6-3.8-2.4-5.5-.3 1-.9 1.6-1.6 2 .6-2.4-.5-5-1.4-6.6Z"/></svg>';

/* ---------- confetti ---------- */
function celebrate(){
  if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var cv = document.createElement("canvas");
  cv.className = "confetti";
  cv.width = window.innerWidth; cv.height = window.innerHeight;
  document.body.appendChild(cv);
  var ctx = cv.getContext("2d");
  var cols = ["#5A46D6","#EE8C3C","#17A97F","#E8A317","#9484FF"];
  var ps = [];
  for(var i=0;i<70;i++){
    ps.push({x:cv.width/2 + (Math.random()-.5)*140, y:cv.height*0.32,
      vx:(Math.random()-.5)*9, vy:-6-Math.random()*8, r:3+Math.random()*4,
      c:cols[i%cols.length], a:1, rot:Math.random()*6.3, vr:(Math.random()-.5)*.3});
  }
  var t0 = performance.now();
  (function frame(t){
    var dt = Math.min(32, t-t0); t0 = t;
    ctx.clearRect(0,0,cv.width,cv.height);
    var alive = false;
    ps.forEach(function(p){
      p.vy += 0.030*dt; p.x += p.vx*dt/16; p.y += p.vy*dt/16;
      p.rot += p.vr; p.a -= 0.0075*dt/16*2;
      if(p.a <= 0) return;
      alive = true;
      ctx.save(); ctx.globalAlpha = Math.max(0,p.a);
      ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.fillStyle = p.c;
      ctx.fillRect(-p.r, -p.r*0.6, p.r*2, p.r*1.2);
      ctx.restore();
    });
    if(alive) requestAnimationFrame(frame); else cv.remove();
  })(t0);
}

/* ---------- markdown ---------- */
function mdToHtml(src){
  var lines = String(src||"").replace(/\r/g,"").split("\n");
  var out = [], i = 0;

  function span(t){
    t = esc(t);
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    t = t.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    t = t.replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<i>$2</i>');
    t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }
  function row(l){
    var cells = l.replace(/^\||\|$/g,"").split("|");
    return cells.map(function(c){ return c.trim(); });
  }

  while(i < lines.length){
    var l = lines[i];

    if(/^\s*$/.test(l)){ i++; continue; }

    if(/^```/.test(l)){
      var buf = []; i++;
      while(i < lines.length && !/^```/.test(lines[i])){ buf.push(lines[i]); i++; }
      i++;
      out.push('<pre><code>' + esc(buf.join("\n")) + '</code></pre>');
      continue;
    }
    var h = l.match(/^(#{1,6})\s+(.*)$/);
    if(h){
      var lv = Math.min(6, h[1].length + 1);
      out.push('<h' + lv + '>' + span(h[2]) + '</h' + lv + '>');
      i++; continue;
    }
    if(/^\s*([-*_])\1{2,}\s*$/.test(l)){ out.push('<hr>'); i++; continue; }

    if(/^\s*\|/.test(l) && i+1 < lines.length && /^\s*\|?[\s:-]+\|/.test(lines[i+1])){
      var head = row(l); i += 2;
      var body = [];
      while(i < lines.length && /^\s*\|/.test(lines[i])){ body.push(row(lines[i])); i++; }
      var t = '<div class="tw"><table><thead><tr>' +
        head.map(function(c){ return '<th>' + span(c) + '</th>'; }).join("") + '</tr></thead><tbody>';
      body.forEach(function(r){
        t += '<tr>' + r.map(function(c){ return '<td>' + span(c) + '</td>'; }).join("") + '</tr>';
      });
      out.push(t + '</tbody></table></div>');
      continue;
    }

    if(/^\s*>/.test(l)){
      var q = [];
      while(i < lines.length && /^\s*>/.test(lines[i])){ q.push(lines[i].replace(/^\s*>\s?/,"")); i++; }
      out.push('<blockquote>' + span(q.join(" ")) + '</blockquote>');
      continue;
    }

    var ul = /^\s*[-*+]\s+/, ol = /^\s*\d+[.)]\s+/;
    if(ul.test(l) || ol.test(l)){
      var ordered = ol.test(l), items = [];
      while(i < lines.length && (ul.test(lines[i]) || ol.test(lines[i]))){
        items.push(lines[i].replace(ordered ? ol : ul, ""));
        i++;
        while(i < lines.length && /^\s{2,}\S/.test(lines[i]) && !ul.test(lines[i]) && !ol.test(lines[i])){
          items[items.length-1] += " " + lines[i].trim(); i++;
        }
      }
      var tag = ordered ? "ol" : "ul";
      out.push('<' + tag + '>' + items.map(function(x){ return '<li>' + span(x) + '</li>'; }).join("") + '</' + tag + '>');
      continue;
    }

    var para = [];
    while(i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,6}\s|```|\s*\||\s*>|\s*[-*+]\s|\s*\d+[.)]\s)/.test(lines[i])){
      para.push(lines[i]); i++;
    }
    if(para.length) out.push('<p>' + span(para.join(" ")) + '</p>');
    else i++;
  }
  return out.join("\n");
}

/* ---------- lock screen ---------- */
function viewLock(root){
  var c = el("div","card deepc");
  c.appendChild(el("div","lbl","Private"));

  if(GATE === "setup"){
    c.appendChild(el("h2",null,"Not set up yet"));
    c.appendChild(el("p","muted","This site has no password configured, so it is closed to everyone — including you. Add <code>APP_PASSWORD_HASH</code> and <code>SESSION_SECRET</code> to the Vercel project's environment variables and redeploy."));
    c.appendChild(el("p","muted","It fails closed on purpose. A half-configured password would have left the whole thing open."));
    root.appendChild(c);
    return;
  }

  c.appendChild(el("h2",null,"Password"));
  c.appendChild(el("p","muted","Two of you have this. Nobody else needs to see your scores."));

  var inp = document.createElement("input");
  inp.type = "password";
  inp.className = "nameinp";
  inp.placeholder = "Password";
  inp.autocomplete = "current-password";
  inp.style.marginTop = "10px";
  function go(){
    var v = inp.value;
    if(!v){ PWERR = "Type the password first"; render(); return; }
    unlock(v);
  }
  inp.onkeydown = function(e){ if(e.key === "Enter") go(); };
  c.appendChild(inp);

  if(PWERR){
    var e1 = el("p","muted", esc(PWERR));
    e1.style.color = "var(--bad)"; e1.style.marginTop = "8px";
    c.appendChild(e1);
  }

  var r = el("div","row");
  var b = btn("act big", PWBUSY ? "Checking…" : "Unlock", go);
  if(PWBUSY) b.setAttribute("disabled","");
  r.appendChild(b);
  c.appendChild(r);
  root.appendChild(c);

  setTimeout(function(){ try{ inp.focus(); }catch(e){} }, 30);

  var n = el("div","card");
  n.appendChild(el("div","lbl","Why"));
  n.appendChild(el("p","muted","The site is on the open internet, so the password is what keeps it yours. It is checked on the server against a slow hash — the password itself is never in this page, and never stored anywhere it could be read back."));
  root.appendChild(n);
}
function unlock(pw){
  PWBUSY = true; PWERR = null; render();
  fetch("/api/login", {
    method:"POST", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({password: pw})
  }).then(function(r){ return r.json().then(function(d){ return {s:r.status, d:d}; }); })
    .then(function(x){
      PWBUSY = false;
      if(x.d && x.d.ok){
        PWERR = null; GATE = "open"; render();
        boot();
        return;
      }
      if(x.s === 429) PWERR = "Too many tries. Wait ten minutes.";
      else if(x.d && x.d.error === "setup"){ GATE = "setup"; }
      else PWERR = "That isn't the password.";
      render();
    })
    .catch(function(){ PWBUSY = false; PWERR = "Couldn't reach the server."; render(); });
}
function lockOut(){
  fetch("/api/login", {method:"DELETE"}).then(function(){
    GATE = "locked"; ME = null; QUIZ = null; EXQUIZ = null; EXVIEW = null;
    try{ localStorage.removeItem("miva_me"); }catch(e){}
    render();
  });
}

/* ---------- sign in ---------- */
function viewSignIn(root){
  var wrap = el("div","card deepc");
  wrap.appendChild(el("div","lbl","Sign in"));
  if(S.people.length === 0){
    wrap.appendChild(el("h2",null,"Who's setting this up?"));
    wrap.appendChild(el("p","muted","Type your name. It becomes your area — your scores, your streak, your Sunday topic. There's room for two of you."));
  } else if(S.people.length < (S.maxPeople||2)){
    wrap.appendChild(el("h2",null,"Which one are you?"));
    wrap.appendChild(el("p","muted", esc(S.people[0].name)+" is already here. Sign in as them, or take the second place."));
  } else {
    wrap.appendChild(el("h2",null,"Which one are you?"));
    wrap.appendChild(el("p","muted","Both places are taken. Pick your name and this device picks up everything you've logged."));
  }
  if(S.people.length){
    var r0 = el("div","row");
    S.people.forEach(function(p){
      r0.appendChild(btn("act big","I'm "+esc(p.name), function(){ signIn(p.id); render(); }));
    });
    wrap.appendChild(r0);
  }
  if(S.people.length < (S.maxPeople||2)){
    if(S.people.length){
      var d = el("p","muted"); d.style.marginTop="18px"; d.textContent = "Or take the second place:";
      wrap.appendChild(d);
    }
    var inp = document.createElement("input");
    inp.type="text"; inp.className="nameinp"; inp.placeholder="Your name";
    inp.style.marginTop="10px";
    inp.onkeydown=function(e){ if(e.key==="Enter") claimSlot(inp.value); };
    wrap.appendChild(inp);
    var r = el("div","row");
    r.appendChild(btn("act", S.people.length ? "Join" : "Continue", function(){ claimSlot(inp.value); }));
    wrap.appendChild(r);
  }
  root.appendChild(wrap);

  var info = el("div","card");
  info.appendChild(el("div","lbl","How this works"));
  info.appendChild(el("p","muted", STORAGE === "blob"
    ? "Your scores are stored with the site, not on this device. Sign in with the same name on your phone or another laptop and everything comes with it — and you each see the other's scores, which is what picks Sunday's topics."
    : "Scores are being kept on this device for now. Once the shared store is connected they follow you between devices and your partner can see them."));
  root.appendChild(info);
}

/* ---------- stats strip ---------- */
function statsStrip(root){
  var w = wk(), di = dayIdx();
  var st = streak(), tal = weekTally(ME, w);
  var g = el("div","stats");

  var s1 = el("div","stat flame");
  s1.innerHTML = '<div class="v">'+st+'</div><div class="k">day streak</div>';
  g.appendChild(s1);

  var s2 = el("div","stat week");
  s2.innerHTML = '<div class="v">'+tal.done+'<span style="font-size:15px;color:var(--ink3)">/6</span></div><div class="k">week '+w+'</div>';
  g.appendChild(s2);

  var s3 = el("div","stat marks");
  s3.innerHTML = '<div class="v">'+totalMarks()+'</div><div class="k">marks</div>';
  g.appendChild(s3);
  root.appendChild(g);

  var pc = el("div","card");
  pc.appendChild(el("div","lbl","This week"));
  var pips = el("div","pips");
  GRID.forEach(function(d,i){
    var s = getScore(ME, w, d.day);
    var cls = "pip " + (s ? scoreClass(s) : "") + (i===di ? " today" : "");
    pips.appendChild(el("div", cls, d.day.charAt(0)));
  });
  pc.appendChild(pips);

  if(S.people.length > 1){
    var duel = el("div","duel");
    S.people.forEach(function(p, i){
      var t = weekTally(p.id, w);
      var pctv = t.max ? Math.round(t.got/t.max*100) : 0;
      var row = el("div","duelrow");
      row.appendChild(el("div","nm", esc(p.id===ME ? "You" : p.name)));
      var tr = el("div","track");
      var fl = el("div","fill"+(i?" two":""));
      fl.style.width = pctv+"%";
      tr.appendChild(fl); row.appendChild(tr);
      row.appendChild(el("div","vv", t.max ? pctv+"%" : "–"));
      duel.appendChild(row);
    });
    pc.appendChild(duel);
  }
  root.appendChild(pc);
}

/* ---------- tonight ---------- */
function viewTonight(root){
  var wi = weekInfo(), di = dayIdx();

  if(wi.n === 0){
    var c0 = el("div","card deepc");
    c0.appendChild(el("div","lbl","Before week 1"));
    c0.appendChild(el("h2",null,"Runway"));
    c0.appendChild(el("p","muted","Week 1 opens Monday 7 September. Four things worth doing before it does — they buy you a week of slack."));
    var ul = el("ul"); ul.style.cssText="margin:8px 0 0;padding-left:20px;color:var(--ink2);font-size:14.5px";
    RUNWAY.forEach(function(t){ var li=el("li",null,esc(t)); li.style.marginBottom="6px"; ul.appendChild(li); });
    c0.appendChild(ul);
    root.appendChild(c0);
    if(!wk()) return;
    statsStrip(root);
    var pv = el("div","card");
    pv.appendChild(el("div","lbl","Looking ahead"));
    pv.appendChild(el("p","muted","Week "+wk()+" is loaded. Below is what a "+(di===-1?"Monday":GRID[di].day)+" in that week looks like — take the check now if you want to work ahead."));
    root.appendChild(pv);
    if(di === -1) di = 0;
  }
  else if(di === -1){
    statsStrip(root);
    var cs = el("div","card recapc");
    cs.appendChild(el("div","lbl","Sunday · 19:00"));
    cs.appendChild(el("h2",null,"Recap night"));
    cs.appendChild(el("p","muted","One hour. One topic each, taught with no notes. Open Sunday for tonight's two topics and the questions to ask."));
    var r = el("div","row");
    r.appendChild(btn("act big","Go to Sunday", function(){ TAB="sunday"; render(); }));
    cs.appendChild(r);
    root.appendChild(cs);
    return;
  }
  else {
    statsStrip(root);
  }

  var g = GRID[di], w = wk(), wd = weekData(w);
  var topic = null, chk = null;
  if(wd && wd.checks){ chk = wd.checks.filter(function(x){ return x.day===g.day; })[0] || null; if(chk) topic = chk.topic; }
  var fastTopic = null;
  if(wd && wd.days){ var dd = wd.days.filter(function(x){ return x.day===g.day; })[0]; if(dd && dd.fast) fastTopic = dd.fast.topic; }

  var c1 = el("div","card deepc");
  c1.appendChild(el("div","lbl","21:00 – 22:00 · deep hour · 1×"));
  c1.appendChild(el("h2",null,esc(NAMES[g.deep])));
  topicBlock(c1, topic || g.dn, "muted");
  c1.appendChild(el("p","muted","Pen in hand, phone in another room. Skim the PDF headings first — five minutes knowing where the lecture goes saves twenty inside it."));

  var sc = getScore(ME, w, g.day);
  var row1 = el("div","row");
  if(sc){
    row1.appendChild(el("span","sc "+scoreClass(sc), "Scored "+sc.score+"/"+sc.max));
    row1.appendChild(btn("act ghost","Retake", function(){ startQuiz(g.day); }));
  } else if(chk && chk.questions && chk.questions.length){
    row1.appendChild(btn("act big","Take tonight's check", function(){ startQuiz(g.day); }));
  } else {
    row1.appendChild(btn("act ghost","Log a score manually", function(){ manualScore(g.day); }));
    row1.appendChild(el("span","muted","No check generated for this session yet"));
  }
  c1.appendChild(row1);
  root.appendChild(c1);

  var c2 = el("div","card fastc");
  c2.appendChild(el("div","lbl","22:00 – 23:00 · fast hour · 1.5–1.75×"));
  c2.appendChild(el("h2",null,esc(NAMES[g.fast])));
  topicBlock(c2, fastTopic || g.fn, "muted");
  if(g.fast==="REVIEW") c2.appendChild(el("p","muted","Read back this week's summaries, then look at your six scores. The lowest one is your Sunday topic."));
  else if(g.fast==="CATCHUP") c2.appendChild(el("p","muted","Last week's question set, sat cold. Or whatever you missed this week."));
  else c2.appendChild(el("p","muted","Watch at speed, read the PDF, take the quiz, post in the forum, close the laptop."));
  root.appendChild(c2);

  var c3 = el("div","card");
  c3.appendChild(el("div","lbl","If a gap opens this afternoon"));
  c3.appendChild(el("p","muted","Watch tonight's intro videos at 1.75×. Ten to fifteen minutes, and it turns the deep hour into revision rather than first contact. Don't start new material in a burst."));
  root.appendChild(c3);
}

/* ---------- week ---------- */
function viewWeek(root){
  var w = wk(), wd = weekData(w), di = dayIdx();
  if(w===0){ root.appendChild(el("div","empty","<b>No week loaded yet</b>Weeks 1 to 12 are built in — the semester starts on 7 September.")); return; }

  var head = el("div","card");
  head.appendChild(el("div","lbl","The shape of every week"));
  head.appendChild(el("p","muted","Deep hour first at normal speed, fast hour second at 1.5–1.75×. Six days. Sunday is the recap only."));
  root.appendChild(head);

  var g = el("div","wg");
  GRID.forEach(function(d, i){
    var r = el("div","wr");
    r.appendChild(el("div","dn",d.day));
    var chk=null, ft=null;
    if(wd && wd.checks) chk = wd.checks.filter(function(x){ return x.day===d.day; })[0]||null;
    if(wd && wd.days){ var dd=wd.days.filter(function(x){return x.day===d.day;})[0]; if(dd&&dd.fast) ft=dd.fast.topic; }
    var dc = el("div","cell d"+(i===di?" today":""));
    dc.innerHTML = '<div class="cn">'+esc(NAMES[d.deep])+'</div><div class="ct">'+esc(chk&&chk.topic?chk.topic:d.dn)+'</div>';
    var mine = getScore(ME,w,d.day);
    var sr = el("div"); sr.style.cssText="margin-top:8px;display:flex;gap:5px;flex-wrap:wrap";
    var anyS = false;
    if(mine){ sr.appendChild(el("span","sc "+scoreClass(mine), "you "+mine.score+"/"+mine.max)); anyS=true; }
    others().forEach(function(p){
      var o = getScore(p.id,w,d.day);
      if(o){ sr.appendChild(el("span","sc "+scoreClass(o), esc(p.name.toLowerCase())+" "+o.score+"/"+o.max)); anyS=true; }
    });
    if(anyS) dc.appendChild(sr);
    dc.style.cursor="pointer";
    dc.onclick=function(){ if(chk&&chk.questions&&chk.questions.length) startQuiz(d.day); else manualScore(d.day); };
    r.appendChild(dc);
    var fc = el("div","cell f"+(i===di?" today":""));
    fc.innerHTML = '<div class="cn">'+esc(NAMES[d.fast])+'</div><div class="ct">'+esc(ft||d.fn)+'</div>';
    r.appendChild(fc);
    g.appendChild(r);
  });
  root.appendChild(g);

  if(!wd){
    var n = el("div","card");
    n.appendChild(el("p","muted", LOADING[w] ? "Loading week "+w+"…" : "Week "+w+" didn't load. Pull down to retry, or check the Data tab."));
    root.appendChild(n);
  }
}

/* ---------- sunday ---------- */
function viewSunday(root){
  var w = wk();
  if(w===0){ root.appendChild(el("div","empty","<b>No week loaded yet</b>The first recap is Sunday 13 September.")); return; }
  var t = sundayTopics();

  var intro = el("div","card recapc");
  intro.appendChild(el("div","lbl","Sunday 19:00 – 20:00"));
  intro.appendChild(el("h2",null,"One hour. One topic each."));
  intro.appendChild(el("p","muted","Teach the thing you scored <b>lowest</b> on, not the thing you know best. You find the hole the moment you try to say it out loud, and there is someone there to notice you glossed over it."));
  root.appendChild(intro);

  if(!t || !t.some(function(l){ return l.pick; })){
    root.appendChild(el("div","empty","<b>No scores logged this week</b>Take one check and the topics pick themselves."));
    return;
  }

  t.forEach(function(l){
    var pick = l.pick;
    var c = el("div","card");
    c.appendChild(el("div","lbl", esc(l.person.name)+" teaches"));
    if(!pick){
      c.appendChild(el("p","muted", l.bumped
        ? "Every score this week was in the same course the other one took. Pick anything from a second course."
        : "No score logged yet this week."));
      root.appendChild(c); return;
    }
    if(l.bumped) c.appendChild(el("p","muted","Lowest score was in the same course as the other one, so this is the next lowest elsewhere."));
    c.appendChild(el("h3",null, esc(topicName(pick, w))));
    c.appendChild(el("span","sc "+scoreClass(pick.s), NAMES[pick.course]+" · "+pick.s.score+"/"+pick.s.max));
    if(pick.s.wrong && pick.s.wrong.length){
      c.appendChild(el("p","muted","<br>Missed: "+pick.s.wrong.map(esc).join(" · ")));
    }
    var h = el("p"); h.style.cssText="margin-top:14px;font-weight:800;font-size:14px";
    h.textContent="Questions for the listener — keep going until they run out of answer";
    c.appendChild(h);
    var ol = el("ol"); ol.style.cssText="margin:4px 0 0;padding-left:20px;color:var(--ink2);font-size:14.5px";
    whyFor(pick, w).forEach(function(q){ var li=el("li",null,esc(q)); li.style.marginBottom="5px"; ol.appendChild(li); });
    c.appendChild(ol);
    root.appendChild(c);
  });

  var a = S.people[0] ? esc(S.people[0].name) : "You";
  var b = S.people[1] ? esc(S.people[1].name) : "Them";
  var clock = el("div","card");
  clock.appendChild(el("div","lbl","The hour"));
  var tw = el("div","tw"); tw.style.marginTop="8px";
  tw.innerHTML = '<table><tbody>'
    + '<tr><td class="k" style="width:58px">19:00</td><td>'+a+' teaches. Ten minutes, no notes.</td></tr>'
    + '<tr><td class="k">19:10</td><td>'+b+' asks why until it breaks. That point is the gap — write it down.</td></tr>'
    + '<tr><td class="k">19:15</td><td>'+b+' teaches. Same rules.</td></tr>'
    + '<tr><td class="k">19:25</td><td>'+a+' asks why.</td></tr>'
    + '<tr><td class="k">19:30</td><td>Close both gaps together.</td></tr>'
    + '<tr><td class="k">19:50</td><td>Slack, because it runs over.</td></tr></tbody></table>';
  clock.appendChild(tw);
  root.appendChild(clock);
}

/* ---------- progress ---------- */
function viewProgress(root){
  var ppl = S.people;
  var rows = [];
  for(var w=1; w<=12; w++){
    var any=false, r={w:w, cells:[]};
    GRID.forEach(function(d){
      var got = ppl.map(function(p){ return {p:p, s:getScore(p.id,w,d.day)}; });
      if(got.some(function(x){ return x.s; })) any=true;
      r.cells.push(got);
    });
    if(any) rows.push(r);
  }
  if(!rows.length){ root.appendChild(el("div","empty","<b>Nothing logged yet</b>Scores appear here as you take the nightly checks.")); return; }

  var t = el("div","tw");
  var html = '<table><thead><tr><th>Week</th>';
  GRID.forEach(function(d){ html += '<th>'+d.day+'<br><span style="font-weight:400;text-transform:none;letter-spacing:0">'+NAMES[d.deep]+'</span></th>'; });
  html += '<th>Avg</th></tr></thead><tbody>';
  rows.forEach(function(r){
    html += '<tr><td class="k">W'+r.w+'</td>';
    var tot=0,cnt=0;
    r.cells.forEach(function(got){
      var bits=[];
      got.forEach(function(x){
        if(x.s){
          bits.push('<span class="sc '+scoreClass(x.s)+'">'+esc(x.p.name.charAt(0).toUpperCase())+' '+x.s.score+'</span>');
          tot+=x.s.score/x.s.max; cnt++;
        }
      });
      html += '<td>'+(bits.length?bits.join(" "):'<span class="muted">–</span>')+'</td>';
    });
    html += '<td class="k">'+(cnt?Math.round(tot/cnt*100)+"%":"–")+'</td></tr>';
  });
  html += '</tbody></table>';
  t.innerHTML = html;
  root.appendChild(t);

  var n = el("div","card");
  n.appendChild(el("div","lbl","Reading this"));
  var legend = ppl.map(function(p){ return esc(p.name.charAt(0).toUpperCase())+" is "+esc(p.name); }).join(", ");
  n.appendChild(el("p","muted", legend+", out of 12. A column that stays red across weeks is a course to raise with a tutor, not something another Sunday will fix on its own."));
  root.appendChild(n);
}

/* ---------- data / sync ---------- */
function viewData(root){
  var c = el("div","card"+(STORAGE==="blob"?"":" fastc"));
  c.appendChild(el("div","lbl","Sync"));
  if(STORAGE === "blob"){
    c.appendChild(el("h2",null,"Shared"));
    c.appendChild(el("p","muted","Scores are saved with the site. Both of you see the same thing on any device, and Sunday's topics are picked from both sets of scores."));
  } else if(STORAGE === "none"){
    c.appendChild(el("h2",null,"This device only"));
    c.appendChild(el("p","muted","No shared store is connected yet, so scores stay in this browser. Everything else works. Connect a Blob store to the Vercel project and this switches over on its own — nothing here needs changing."));
  } else if(STORAGE === "loading"){
    c.appendChild(el("h2",null,"Checking…"));
  } else {
    c.appendChild(el("h2",null,"Sync is down"));
    c.appendChild(el("p","muted","Couldn't reach the server, so scores are being kept in this browser. They'll go up on the next save that gets through."));
  }
  var r = el("div","row");
  r.appendChild(btn("act ghost","Refresh from server", function(){
    pull().then(function(){ toast(STORAGE==="blob" ? "Up to date" : "Still local only"); render(); });
  }));
  c.appendChild(r);
  root.appendChild(c);

  var loaded = loadedWeeks();
  var c2 = el("div","card");
  c2.appendChild(el("div","lbl","Question packs"));
  var p = el("p");
  p.innerHTML = loaded.length ? loaded.map(function(n){
    var wd = WEEKS[n];
    var meta = wd ? (wd.checks ? wd.checks.length + " checks" : "loaded") : "on the server";
    return '<span class="sc" style="margin:0 5px 5px 0">W'+n+' · '+meta+'</span>';
  }).join("") : '<span class="muted">Loading…</span>';
  c2.appendChild(p);
  c2.appendChild(el("p","muted","<br>Packs are read live from the <code>seprintour/miva-study</code> repo, one week at a time. Regenerate a week and push it, and this picks it up within five minutes — the site never needs redeploying for new questions."));
  root.appendChild(c2);

  var c3 = el("div","card");
  c3.appendChild(el("div","lbl","People"));
  if(!S.people.length) c3.appendChild(el("p","muted","Nobody signed in yet."));
  else {
    var ul = el("p");
    ul.innerHTML = S.people.map(function(x){
      return '<span class="sc" style="margin:0 5px 5px 0">'+esc(x.name)+(x.id===ME?" · you":"")+'</span>';
    }).join("");
    c3.appendChild(ul);
  }
  c3.appendChild(el("p","muted","<br>Two places, claimed by name. Signing out here doesn't delete anything."));
  var r3 = el("div","row");
  r3.appendChild(btn("act ghost","Sign out", signOut));
  r3.appendChild(btn("act ghost","Lock this device", lockOut));
  c3.appendChild(r3);
  root.appendChild(c3);

  var c4 = el("div","card");
  c4.appendChild(el("div","lbl","Reference"));
  c4.appendChild(el("p","muted",'The full plan — speed policy, what to do when a week goes wrong, the calendar — lives on the <a href="'+BOARD+'" target="_blank" rel="noopener">study board</a>.'));
  root.appendChild(c4);
}

/* ---------- exam prep ---------- */
function examSave(){
  if(!EXQUIZ) return;
  try{ localStorage.setItem(EXLS+":"+EXQUIZ.course, JSON.stringify({
    answers:EXQUIZ.answers, idx:EXQUIZ.idx, submitted:EXQUIZ.submitted, at:Date.now()
  })); }catch(e){}
}
function examRestore(course){
  try{
    var raw = localStorage.getItem(EXLS+":"+course);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return null;
}
function examProgress(course){
  var r = examRestore(course);
  if(!r) return null;
  return {done: Object.keys(r.answers||{}).length, submitted: !!r.submitted};
}
function loadExamIndex(){
  if(EXAM) return;
  fetch("/api/exam").then(function(r){ return r.ok ? r.json() : null; }).then(function(j){
    EXAM = j && j.courses ? j.courses : [];
    render();
  }).catch(function(){ EXAM = []; render(); });
}
function openExam(course, mode){
  EXVIEW = {course:course, mode:mode};
  TAB = "exam"; render(); window.scrollTo(0,0);
  if(mode === "guide" && !GUIDECACHE[course]){
    fetch("/api/exam?course="+course+"&doc=guide")
      .then(function(r){ return r.ok ? r.text() : null; })
      .then(function(t){ GUIDECACHE[course] = t || "__fail__"; render(); })
      .catch(function(){ GUIDECACHE[course] = "__fail__"; render(); });
  }
  if(mode === "paper" && !EXAMCACHE[course]){
    fetch("/api/exam?course="+course)
      .then(function(r){ return r.ok ? r.json() : null; })
      .then(function(j){ EXAMCACHE[course] = j || "__fail__"; startExam(course); })
      .catch(function(){ EXAMCACHE[course] = "__fail__"; render(); });
  } else if(mode === "paper"){ startExam(course); }
}
function startExam(course){
  var pack = EXAMCACHE[course];
  if(!pack || pack === "__fail__"){ render(); return; }
  var prev = examRestore(course);
  EXQUIZ = {
    course: course, title: pack.title, questions: pack.questions,
    answers: (prev && prev.answers) || {},
    idx: (prev && typeof prev.idx === "number") ? prev.idx : 0,
    submitted: !!(prev && prev.submitted),
    showAll: false
  };
  render(); window.scrollTo(0,0);
}
function examGrade(){
  var q = EXQUIZ, score = 0, missed = [];
  q.questions.forEach(function(qq, i){
    if(q.answers[i] === qq.answerIndex) score++;
    else missed.push(i);
  });
  return {score:score, max:q.questions.length, missed:missed};
}

function viewExam(root){
  if(!EXAM){ loadExamIndex(); root.appendChild(el("div","empty","<b>Loading</b>Fetching the exam material.")); return; }

  if(!EXVIEW){
    var head = el("div","card recapc");
    head.appendChild(el("div","lbl","End of semester"));
    head.appendChild(el("h2",null,"Exam prep"));
    head.appendChild(el("p","muted","A teaching guide for each course, and a hundred-question paper you sit like the real thing. The paper saves as you go, so you can do it across several sittings."));
    root.appendChild(head);

    if(!EXAM.length){
      root.appendChild(el("div","empty","<b>Not published yet</b>Push the <code>exam-prep/</code> folder to the study repo and this fills in on its own."));
      return;
    }
    EXAM.forEach(function(c){
      var card = el("div","card");
      card.appendChild(el("div","lbl", esc(c.course.replace("_"," "))));
      card.appendChild(el("h3",null, esc(c.title.replace(/ — End of Semester.*$/,""))));
      var p = examProgress(c.course);
      var meta = el("p","muted", c.questions + " questions" + (c.guideWords ? " · guide is about " + Math.round(c.guideWords/450) + " pages" : ""));
      card.appendChild(meta);
      if(p){
        card.appendChild(el("span","sc "+(p.submitted?"g":"o"), p.submitted ? "Sat it" : p.done + "/" + c.questions + " answered"));
      }
      var r = el("div","row");
      r.appendChild(btn("act ghost","Study guide", function(){ openExam(c.course,"guide"); }));
      r.appendChild(btn("act", p && !p.submitted ? "Resume paper" : "Sit the paper", function(){ openExam(c.course,"paper"); }));
      card.appendChild(r);
      root.appendChild(card);
    });
    return;
  }

  var back = el("div","row"); back.style.marginTop = "0";
  back.appendChild(btn("act ghost","← All courses", function(){ EXVIEW = null; EXQUIZ = null; render(); window.scrollTo(0,0); }));
  root.appendChild(back);

  if(EXVIEW.mode === "guide"){
    var md = GUIDECACHE[EXVIEW.course];
    if(!md){ root.appendChild(el("div","empty","<b>Loading the guide</b>It's a long one.")); return; }
    if(md === "__fail__"){ root.appendChild(el("div","empty","<b>Not published yet</b>This guide isn't in the study repo.")); return; }
    var g = el("div","card prose");
    g.innerHTML = mdToHtml(md);
    root.appendChild(g);
    return;
  }

  var pack = EXAMCACHE[EXVIEW.course];
  if(pack === "__fail__"){ root.appendChild(el("div","empty","<b>Not published yet</b>This paper isn't in the study repo.")); return; }
  if(!EXQUIZ || EXQUIZ.course !== EXVIEW.course){ root.appendChild(el("div","empty","<b>Loading the paper</b>A hundred questions.")); return; }
  if(EXQUIZ.submitted){ viewExamResult(root); return; }

  var q = EXQUIZ, n = q.questions.length, left = [];
  q.questions.forEach(function(qq,i){ if(typeof q.answers[i] !== "number") left.push(i); });

  var bar = el("div","deckbar");
  var track = el("div","track"); track.style.cssText="height:9px;border-radius:999px;background:var(--surface2);overflow:hidden";
  var fill = el("div"); fill.style.cssText="height:100%;background:var(--deep);border-radius:999px;transition:width .3s;width:"+Math.round((n-left.length)/n*100)+"%";
  track.appendChild(fill); bar.appendChild(track);
  var meta = el("div","deckmeta");
  meta.appendChild(el("span",null, EXVIEW.course.replace("_"," ") + " · " + (n - left.length) + "/" + n + " answered"));
  meta.appendChild(el("span",null, "Q " + (q.idx+1)));
  bar.appendChild(meta);
  root.appendChild(bar);

  var qq = q.questions[q.idx];
  var card = el("div","qcard");
  card.appendChild(el("div","qeyebrow","Question "+(q.idx+1)+" of "+n));
  card.appendChild(el("div","qt", esc(qq.q)));
  var opts = el("div","opts");
  qq.options.forEach(function(opt, oi){
    var on = q.answers[q.idx] === oi;
    var b = el("button","opt"+(on?" on":""));
    b.innerHTML = '<span class="k">'+LETTERS[oi]+'</span><span>'+esc(opt)+'</span>';
    b.onclick = function(){
      q.answers[q.idx] = oi; examSave();
      if(q.idx < n-1){ q.idx++; }
      render(); window.scrollTo(0,0);
    };
    opts.appendChild(b);
  });
  card.appendChild(opts);

  var foot = el("div","deckfoot");
  if(q.idx > 0) foot.appendChild(btn("act ghost","Back", function(){ q.idx--; examSave(); render(); window.scrollTo(0,0); }));
  foot.appendChild(el("div","spacer"));
  if(q.idx < n-1) foot.appendChild(btn("act","Next", function(){ q.idx++; examSave(); render(); window.scrollTo(0,0); }));
  if(!left.length) foot.appendChild(btn("act big","Submit", function(){
    q.submitted = true; examSave(); render(); window.scrollTo(0,0);
  }));
  card.appendChild(foot);
  root.appendChild(card);

  var r2 = el("div","row");
  if(left.length){
    r2.appendChild(btn("act ghost","Next blank ("+left.length+")", function(){
      q.idx = left[0]; render(); window.scrollTo(0,0);
    }));
    r2.appendChild(btn("act ghost","Mark it now", function(){
      if(!window.confirm(left.length + " questions are blank. They will be marked wrong. Submit anyway?")) return;
      q.submitted = true; examSave(); render(); window.scrollTo(0,0);
    }));
  }
  r2.appendChild(btn("act ghost","Save and stop", function(){
    examSave(); EXVIEW = null; EXQUIZ = null; toast("Saved — pick up where you left off"); render();
  }));
  root.appendChild(r2);
}

function viewExamResult(root){
  var q = EXQUIZ, g = examGrade();
  var pct = Math.round(g.score/g.max*100);
  var cls = pct >= 70 ? "g" : (pct >= 50 ? "o" : "b");

  var rev = el("div","reveal");
  rev.appendChild(el("div","stamp "+cls, pct >= 70 ? "Pass, comfortably" : (pct >= 50 ? "Scraping it" : "Not ready")));
  rev.appendChild(el("div","score", String(g.score)));
  rev.appendChild(el("div","of","out of "+g.max+"  ·  "+pct+"%"));
  rev.appendChild(el("div","msg", g.missed.length
    ? "The " + g.missed.length + " you missed are below with the reasoning. Work through those, then sit it again cold in a week."
    : "Every one. Sit it again in a fortnight to prove it stuck."));
  root.appendChild(rev);

  var r = el("div","row");
  r.appendChild(btn("act", q.showAll ? "Show only misses" : "Show all "+g.max, function(){
    q.showAll = !q.showAll; render(); window.scrollTo(0,0);
  }));
  r.appendChild(btn("act ghost","Sit it again", function(){
    try{ localStorage.removeItem(EXLS+":"+q.course); }catch(e){}
    EXQUIZ = {course:q.course, title:q.title, questions:q.questions, answers:{}, idx:0, submitted:false, showAll:false};
    render(); window.scrollTo(0,0);
  }));
  root.appendChild(r);

  q.questions.forEach(function(qq, i){
    var missed = q.answers[i] !== qq.answerIndex;
    if(!missed && !q.showAll) return;
    var box = el("div","rev "+(missed?"miss":"hit"));
    box.appendChild(el("span","tag "+(missed?"miss":"hit"), missed ? "Missed" : "Got it"));
    box.appendChild(el("div","rq", (i+1)+". "+esc(qq.q)));
    var opts = el("div","opts");
    qq.options.forEach(function(opt, oi){
      var c = "opt";
      if(oi === qq.answerIndex) c += " right";
      else if(q.answers[i] === oi) c += " wrong";
      var b = el("button", c); b.disabled = true;
      b.innerHTML = '<span class="k">'+LETTERS[oi]+'</span><span>'+esc(opt)+'</span>';
      opts.appendChild(b);
    });
    box.appendChild(opts);
    if(qq.why){
      var e2 = el("div","expl"); e2.style.marginTop = "9px";
      e2.innerHTML = esc(qq.why);
      box.appendChild(e2);
    }
    root.appendChild(box);
  });
}

/* ---------- quiz ---------- */
function startQuiz(day){
  var w = wk(), wd = weekData(w);
  var chk = wd && wd.checks ? (wd.checks.filter(function(x){return x.day===day;})[0]||null) : null;
  if(!chk || !chk.questions || !chk.questions.length){ manualScore(day); return; }
  QUIZ = {day:day, chk:chk, answers:{}, marks:{}, submitted:false, idx:0, celebrated:false};
  BRIEF = false;
  TAB = "quiz"; render();
  window.scrollTo(0,0);
}
function manualScore(day){
  var ex = getScore(ME, wk(), day);
  MANUAL = {day:day, score: ex?ex.score:null, wrong: ex&&ex.wrong?ex.wrong.join(", "):""};
  TAB = "manual"; render();
}
function answered(q, i){
  var qq = q.chk.questions[i];
  if(qq.type==="mcq" && qq.options) return typeof q.answers[i] === "number";
  return !!String(q.answers[i]||"").trim();
}
function unanswered(q){
  var out = [];
  q.chk.questions.forEach(function(qq,i){ if(!answered(q,i)) out.push(i); });
  return out;
}
function grade(q){
  var score=0, max=q.chk.questions.length, wrong=[], unmarked=false;
  q.chk.questions.forEach(function(qq,i){
    if(qq.type==="mcq" && qq.options){
      if(q.answers[i]===qq.answerIndex) score++;
      else wrong.push(qq.concept||("Q"+(i+1)));
    } else {
      if(q.marks[i]===true) score++;
      else if(q.marks[i]===false) wrong.push(qq.concept||("Q"+(i+1)));
      else unmarked=true;
    }
  });
  return {score:score, max:max, wrong:wrong, unmarked:unmarked};
}
function stampFor(r){
  var p = r.score / r.max;
  if(p === 1) return {t:"Flawless", c:"g"};
  if(p >= 0.83) return {t:"Sharp", c:"g"};
  if(p >= 0.66) return {t:"Solid", c:"o"};
  if(p >= 0.5)  return {t:"Shaky", c:"o"};
  return {t:"Sunday's topic", c:"b"};
}

function viewQuiz(root){
  var q = QUIZ;
  if(!q){ TAB="tonight"; render(); return; }
  if(q.submitted){ viewResult(root, q); return; }

  var n = q.chk.questions.length;
  var course = NAMES[GRID.filter(function(g){return g.day===q.day;})[0].deep];

  var bar = el("div","deckbar");
  var rail = el("div","rail");
  for(var i=0;i<n;i++){
    (function(j){
      var cls = answered(q,j) ? "done" : "";
      if(j===q.idx) cls += " at";
      var b = el("button", cls, "");
      b.title = "Question "+(j+1);
      b.onclick = function(){ q.idx = j; render(); };
      rail.appendChild(b);
    })(i);
  }
  bar.appendChild(rail);
  var meta = el("div","deckmeta");
  meta.appendChild(el("span",null, q.day + " · " + course + " · " + (n - unanswered(q).length) + "/" + n));
  var bb = el("button","moreb", BRIEF ? "Hide" : "Brief");
  bb.onclick = function(){ BRIEF = !BRIEF; render(); };
  meta.appendChild(bb);
  bar.appendChild(meta);
  root.appendChild(bar);

  if(BRIEF && q.chk.topic){
    var bc = el("div","card");
    bc.appendChild(el("div","lbl","Tonight's brief"));
    bc.appendChild(el("p","muted", esc(q.chk.topic)));
    root.appendChild(bc);
  }

  var qq = q.chk.questions[q.idx];
  var card = el("div","qcard");
  card.appendChild(el("div","qeyebrow","Question "+(q.idx+1)+" of "+n));
  card.appendChild(el("div","qt", esc(qq.q)));

  if(qq.type === "mcq" && qq.options){
    var opts = el("div","opts");
    qq.options.forEach(function(opt, oi){
      var on = q.answers[q.idx] === oi;
      var b = el("button","opt"+(on?" on":""));
      b.innerHTML = '<span class="k">'+LETTERS[oi]+'</span><span>'+esc(opt)+'</span>';
      b.onclick = function(){
        q.answers[q.idx] = oi;
        if(q.idx < n-1){ q.idx++; render(); window.scrollTo({top:0,behavior:"smooth"}); }
        else render();
      };
      opts.appendChild(b);
    });
    card.appendChild(opts);
  } else {
    var ta = el("textarea");
    ta.placeholder = "Explain it in your own words…";
    ta.value = q.answers[q.idx] || "";
    ta.oninput = function(){
      q.answers[q.idx] = ta.value;
      var rb = rail.children[q.idx];
      if(rb) rb.className = (ta.value.trim() ? "done" : "") + " at";
    };
    card.appendChild(ta);
    card.appendChild(el("p","muted","<br>You mark this one yourself after you submit — the model answer is waiting."));
  }

  var foot = el("div","deckfoot");
  if(q.idx > 0) foot.appendChild(btn("act ghost","Back", function(){ q.idx--; render(); window.scrollTo(0,0); }));
  foot.appendChild(el("div","spacer"));

  var left = unanswered(q);
  if(!left.length){
    foot.appendChild(btn("act big","Submit all "+n, function(){
      q.submitted = true; q.idx = 0; render(); window.scrollTo(0,0);
    }));
  } else if(q.idx < n-1){
    foot.appendChild(btn("act","Next", function(){ q.idx++; render(); window.scrollTo(0,0); }));
  } else {
    foot.appendChild(btn("act", left.length+" still blank", function(){
      q.idx = left[0]; toast("Question "+(left[0]+1)+" is blank"); render(); window.scrollTo(0,0);
    }));
  }
  card.appendChild(foot);
  root.appendChild(card);

  var out = el("div","row");
  out.appendChild(btn("act ghost","Leave without saving", function(){ QUIZ=null; TAB="tonight"; render(); }));
  root.appendChild(out);
}

function viewResult(root, q){
  var r = grade(q);
  var st = stampFor(r);

  var rev = el("div","reveal");
  rev.appendChild(el("div","stamp "+st.c, esc(st.t)));
  var sc = el("div","score"); sc.id="bigscore"; sc.textContent = "0";
  rev.appendChild(sc);
  rev.appendChild(el("div","of","out of "+r.max));
  rev.appendChild(el("div","msg", r.wrong.length
    ? "The " + r.wrong.length + " you missed are below, each with what the wrong option was confusing it with. That second part is usually where the real gap is."
    : "Nothing missed. Read the explanations anyway — a right answer for the wrong reason still scores 12."));
  root.appendChild(rev);

  setTimeout(function(){
    var node = document.getElementById("bigscore");
    if(!node) return;
    var target = r.score, cur = 0;
    var step = function(){
      cur += Math.max(1, Math.ceil(target/14));
      if(cur >= target){ node.textContent = target; return; }
      node.textContent = cur;
      requestAnimationFrame(step);
    };
    if(target === 0){ node.textContent = "0"; return; }
    requestAnimationFrame(step);
  }, 220);

  if(!q.celebrated && !r.unmarked && r.score/r.max >= 0.9){
    q.celebrated = true;
    setTimeout(celebrate, 420);
  }

  if(r.unmarked){
    var mk = el("div","card fastc");
    mk.appendChild(el("div","lbl","Mark these first"));
    mk.appendChild(el("p","muted","Your written answers can't be graded automatically. Read the model answer under each one below and mark yourself honestly — the score only means something if you do."));
    root.appendChild(mk);
  }

  if(r.wrong.length){
    var wc = el("div","card");
    wc.appendChild(el("div","lbl","What to revisit"));
    wc.appendChild(el("p","muted","Each of these is the concept behind a question you missed, not just the question itself."));
    var ul = el("ul"); ul.style.cssText="margin:8px 0 0;padding-left:20px;color:var(--ink2);font-size:14.5px";
    r.wrong.forEach(function(c){ var li=el("li",null,esc(c)); li.style.marginBottom="5px"; ul.appendChild(li); });
    wc.appendChild(ul);
    root.appendChild(wc);
  }

  q.chk.questions.forEach(function(qq, i){
    var isMcq = qq.type==="mcq" && qq.options;
    var missed = isMcq ? (q.answers[i] !== qq.answerIndex) : (q.marks[i] === false);
    var pending = !isMcq && q.marks[i] === undefined;
    var box = el("div","rev "+(pending ? "" : (missed ? "miss" : "hit")));
    if(!pending) box.appendChild(el("span","tag "+(missed?"miss":"hit"), missed ? "Missed" : "Got it"));
    box.appendChild(el("div","rq", (i+1)+". "+esc(qq.q)));

    if(isMcq){
      var opts = el("div","opts");
      qq.options.forEach(function(opt, oi){
        var cls = "opt";
        if(oi === qq.answerIndex) cls += " right";
        else if(q.answers[i] === oi) cls += " wrong";
        var b = el("button", cls);
        b.disabled = true;
        b.innerHTML = '<span class="k">'+LETTERS[oi]+'</span><span>'+esc(opt)+'</span>';
        opts.appendChild(b);
      });
      box.appendChild(opts);
    } else {
      box.appendChild(el("div","yours","<b>You wrote:</b> "+esc(q.answers[i]||"(nothing)")));
    }

    if(qq.why || qq.concept){
      var e2 = el("div","expl");
      e2.innerHTML = (qq.concept ? "<b>"+esc(qq.concept)+"</b><br>" : "") + esc(qq.why||"");
      e2.style.marginTop = "9px";
      box.appendChild(e2);
    }

    if(!isMcq){
      var sm = el("div","selfmark");
      var y = btn(q.marks[i]===true ? "act" : "act ghost","I got this", function(){ q.marks[i]=true; render(); });
      var nn = btn(q.marks[i]===false ? "act" : "act ghost","I missed it", function(){ q.marks[i]=false; render(); });
      sm.appendChild(y); sm.appendChild(nn);
      box.appendChild(sm);
    }
    root.appendChild(box);
  });

  var foot = el("div","row");
  var sv = btn("act big","Save "+r.score+"/"+r.max, function(){
    var g2 = grade(q);
    if(g2.unmarked){ toast("Mark your written answers first"); return; }
    S.scores[key(ME, wk(), q.day)] = {score:g2.score, max:g2.max, wrong:g2.wrong, at:new Date().toISOString()};
    QUIZ=null; TAB="tonight"; save("Logged "+g2.score+"/"+g2.max);
  });
  if(r.unmarked) sv.setAttribute("disabled","");
  foot.appendChild(sv);
  foot.appendChild(btn("act ghost","Retake", function(){
    QUIZ = {day:q.day, chk:q.chk, answers:{}, marks:{}, submitted:false, idx:0, celebrated:false};
    render(); window.scrollTo(0,0);
  }));
  root.appendChild(foot);
}

function viewManual(root){
  var m = MANUAL;
  if(!m){ TAB="tonight"; render(); return; }
  var g = GRID.filter(function(x){return x.day===m.day;})[0];
  var c = el("div","card deepc");
  c.appendChild(el("div","lbl", m.day+" · "+NAMES[g.deep]+" · log a score"));
  c.appendChild(el("h2",null,"How did it go?"));
  c.appendChild(el("p","muted","Fallback for a session with no generated check. Normally you'd answer the questions here and be graded."));

  var maxS = 12;
  var wdm = weekData(wk());
  if(wdm && wdm.checks){
    var ck = wdm.checks.filter(function(x){ return x.day===m.day; })[0];
    if(ck && ck.maxScore) maxS = ck.maxScore;
  }
  m.max = maxS;
  var pick = el("div","row");
  for(var i=0;i<=maxS;i++){
    (function(n){
      var b = btn(m.score===n ? "act" : "act ghost", String(n), function(){ m.score=n; render(); });
      b.style.minWidth="42px";
      pick.appendChild(b);
    })(i);
  }
  c.appendChild(pick);
  c.appendChild(el("p","muted","<br>Out of "+maxS+"."));

  var lab = el("p"); lab.style.cssText="margin-top:12px;font-weight:800;font-size:14px";
  lab.textContent = "What did you miss? Comma separated — this is what surfaces on Sunday.";
  c.appendChild(lab);
  var ta = el("textarea"); ta.value = m.wrong;
  ta.placeholder="e.g. why the integrating factor works, sign convention on the second term";
  ta.oninput=function(){ m.wrong = ta.value; };
  c.appendChild(ta);

  var r = el("div","row");
  r.appendChild(btn("act","Save", function(){
    if(m.score===null){ toast("Pick a score from 0 to "+(m.max||12)); return; }
    S.scores[key(ME, wk(), m.day)] = {
      score:m.score, max:(m.max||12),
      wrong: m.wrong.split(",").map(function(x){return x.trim();}).filter(Boolean),
      at:new Date().toISOString()
    };
    MANUAL=null; TAB="tonight"; save("Logged "+m.score+"/"+(m.max||12));
  }));
  r.appendChild(btn("act ghost","Cancel", function(){ MANUAL=null; TAB="tonight"; render(); }));
  c.appendChild(r);
  root.appendChild(c);
}

/* ---------- shell ---------- */
function render(){
  var root = document.getElementById("root");
  root.innerHTML = "";

  var wi = weekInfo();
  var bar = el("div","bar");
  var bin = el("div","barin");
  var brand = el("div","brand");
  brand.appendChild(el("h1",null,"Study Tracker"));

  if(GATE === "open" && ME && findPerson(ME)){
    var sel = document.createElement("select");
    sel.className = "wksel";
    var cur = wk(), L = loadedWeeks();
    for(var i=1;i<=12;i++){
      var o=document.createElement("option"); o.value=i;
      o.textContent = "Week "+i + (L.indexOf(i)>=0 ? "" : " –") + (weekInfo().n===i ? "  ·  now" : "");
      if(i===cur) o.selected=true;
      sel.appendChild(o);
    }
    sel.onchange=function(){
      VIEWWEEK=parseInt(sel.value,10); QUIZ=null; MANUAL=null; ensureWeek(VIEWWEEK); render();
    };
    brand.appendChild(sel);
    brand.appendChild(el("div","spacer"));
    var st = streak();
    if(st > 0) brand.appendChild(el("span","chip flame", FLAME+"<span>"+st+"</span>"));
    if(aheadOfCalendar()) brand.appendChild(el("span","chip","ahead"));
    if(SYNCING) brand.appendChild(el("span","chip","saving…"));
    else if(STORAGE === "none" || STORAGE === "error") brand.appendChild(el("span","chip","local"));
    var nb = btn("chip me", esc(meName()), signOut);
    nb.title = "Sign out";
    brand.appendChild(nb);
  } else {
    brand.appendChild(el("div","spacer"));
    brand.appendChild(el("span","chip", wi.label + (wi.n>0&&wi.n<13 ? " of 12" : "")));
  }
  bin.appendChild(brand);

  if(GATE === "open" && ME && findPerson(ME)){
    var tabs = el("div","tabs");
    [["tonight","Tonight"],["week","Week"],["sunday","Sunday"],["exam","Exam"],["progress","Stats"],["data","Data"]].forEach(function(t){
      tabs.appendChild(btn(TAB===t[0]?"on":"", t[1], function(){
        QUIZ=null; MANUAL=null; if(t[0]!=="exam"){ EXVIEW=null; EXQUIZ=null; } TAB=t[0]; render(); window.scrollTo(0,0);
      }));
    });
    bin.appendChild(tabs);
  } else {
    bin.appendChild(el("div","tabs"));
  }
  bar.appendChild(bin);
  root.appendChild(bar);

  var wrap = el("div","wrap");
  if(GATE !== "open"){
    if(GATE === "checking") wrap.appendChild(el("div","empty","<b>One moment</b>Checking the lock."));
    else viewLock(wrap);
    root.appendChild(wrap);
    if(TOAST) root.appendChild(el("div","toast", esc(TOAST)));
    return;
  }
  if(!ME || !findPerson(ME)){
    viewSignIn(wrap);
    root.appendChild(wrap);
    if(TOAST) root.appendChild(el("div","toast", esc(TOAST)));
    return;
  }
  if(TAB==="tonight") viewTonight(wrap);
  else if(TAB==="week") viewWeek(wrap);
  else if(TAB==="sunday") viewSunday(wrap);
  else if(TAB==="progress") viewProgress(wrap);
  else if(TAB==="exam") viewExam(wrap);
  else if(TAB==="data") viewData(wrap);
  else if(TAB==="quiz") viewQuiz(wrap);
  else if(TAB==="manual") viewManual(wrap);
  root.appendChild(wrap);

  if(TOAST) root.appendChild(el("div","toast", esc(TOAST)));
}

/* ---------- boot ---------- */
function boot(){
  INDEX = {semesterStart:"2026-09-07", weeks:[1,2,3,4,5,6,7,8,9,10,11,12].map(function(n){ return {week:n}; })};
  ensureWeek(wk());
  loadExamIndex();
  pull().then(function(){
    try{
      var m2 = localStorage.getItem("miva_me");
      if(m2 && findPerson(m2)) ME = m2;
      else if(ME && !findPerson(ME)) ME = null;
    }catch(e){}
    render();
    ensureWeek(wk());
  });
}

S = blankState();
var cached = readMirror();
if(cached){ S.people = cached.people || []; S.scores = cached.scores || {}; }
try{
  var m = localStorage.getItem("miva_me");
  if(m && findPerson(m)) ME = m;
}catch(e){}
render();

fetch("/api/login", {cache:"no-store"})
  .then(function(r){ return r.json(); })
  .then(function(d){
    if(!d || !d.ok) GATE = "locked";
    else if(!d.configured) GATE = "setup";
    else GATE = d.unlocked ? "open" : "locked";
    render();
    if(GATE === "open") boot();
  })
  .catch(function(){ GATE = "locked"; render(); });

/* someone else may have logged a score while this tab sat open */
document.addEventListener("visibilitychange", function(){
  if(document.visibilityState === "visible" && STORAGE === "blob" && !QUIZ){
    pull().then(render);
  }
});
})();
