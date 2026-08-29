
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

/* The standing plan. Lifted from the study board so the app is the single place
   the timetable lives, rather than a link out to something else. */
var SPEED = [
  ["1×", "MTH 102 and PHY 102 derivations. COS 102 algorithm walkthroughs. Any code being written on screen.",
         "If you would need to pause and write it down, it runs at normal speed. Speeding these up feels productive and teaches you nothing."],
  ["1.25×", "Conceptual explanation in MTH, PHY and COS — the parts between the derivations.",
            "Fast enough to keep you alert, slow enough to follow an argument."],
  ["1.75×", "Every introductory video in every course. All of GST 112, GST 122 and CSC 106.",
            "Orientation and recall material. You are not deriving anything."]
];
var MISSED = [
  "<b>Protect the deep hour, sacrifice the fast hour.</b> Sixty minutes only? Do the first half. The fast courses compress; maths and physics do not.",
  "<b>Missed a whole day?</b> Saturday's second hour absorbs it. That is what it is there for.",
  "<b>Missed several?</b> Deep hours only for the rest of the week. Let the GST courses ride — you can clear two of those weeks in one sitting later. You cannot do that with physics.",
  "<b>Lost the whole week?</b> Rejoin the current week. Never study two weeks at once; that is what actually ends these plans. The missed week gets picked up in revision.",
  "<b>Keep the Sunday recap regardless.</b> It is the last thing to drop, not the first. It costs no preparation, and after a broken week it is the only hour that tells you what you actually retained."
];
var DEEPHOUR = [
  ["0–5", "Skim the PDF headings so you know where the video is going. Five minutes here saves twenty inside the lecture."],
  ["5–35", "The video lecture on the LMS, normal speed, pausing to write. Copy the derivations by hand — don't transcribe the talking."],
  ["35–50", "The PDF properly. Mark anything the video skipped; that gap is usually where the exam question lives."],
  ["50–65", "The check. Twelve questions on exactly what you just covered, notes closed."],
  ["—", "Log the score. That is your confidence rating — you don't guess at it."]
];
var CALENDAR = [
  ["Now", "28 Aug – 6 Sep", "All 8 pre-semester tests. Clear MIVA-COS 111. Speed-run CSC 106 Weeks 1–3."],
  ["1 – 4", "7 Sep – 4 Oct", "Normal weeks."],
  ["5", "5 – 11 Oct", "Mid-Semester Assessment — graded, two attempts, averaged."],
  ["6 – 7", "12 – 25 Oct", "Mid-course evaluation forms in Week 7."],
  ["8", "26 Oct – 1 Nov", "Lab Assessment — graded PDF submission. Start it early."],
  ["9", "2 – 8 Nov", "End of Semester Assessment — graded."],
  ["10 – 12", "9 – 29 Nov", "Post-semester tests in Week 12. Compare against your pre-semester scores."],
  ["Revision", "30 Nov – 6 Dec", "Full mocks, two courses a day, timed."],
  ["Exams", "7 – 13 Dec", "Weakest 20% only."]
];
var OPEN = {};
var BUDDY = null;      /* null | {view:"home"|"concept"|"ask", concept, why, asking, answer, err} */
var SUMCACHE = {};

/* Where to send him when a concept needs a better teacher than a slide deck.
   Search URLs, never invented video ids. */
var CHANNELS = {
  MTH_102: [["Professor Leonard","Professor Leonard"],["Organic Chemistry Tutor","The Organic Chemistry Tutor"],["3Blue1Brown","3Blue1Brown"]],
  PHY_102: [["Michel van Biezen","Michel van Biezen"],["MIT 8.02","MIT OpenCourseWare 8.02"],["Organic Chemistry Tutor","The Organic Chemistry Tutor"]],
  PHY_108: [["Organic Chemistry Tutor","The Organic Chemistry Tutor physics lab"],["Michel van Biezen","Michel van Biezen"]],
  COS_102: [["Abdul Bari","Abdul Bari"],["freeCodeCamp","freeCodeCamp"]],
  CSC_106: [["freeCodeCamp","freeCodeCamp"],["Traversy Media","Traversy Media"]],
  GST_112: [["Search","Nigerian peoples and culture"]],
  GST_122: [["Search","communication in English"]]
};

var S, ME=null, TAB="home", QUIZ=null, MANUAL=null,
    TOAST=null, VIEWWEEK=null, BRIEF=false;
var WEEKS = {};          /* week number -> pack, fetched on demand */
var LOADING = {};        /* week number -> true while in flight */
var INDEX = null;
var STORAGE = "loading"; /* loading | blob | none | error */
var SYNCING = false;
var LS = "miva_state_v3";
var GATE = "checking";   /* checking | locked | open | setup */
var PWBUSY = false, PWERR = null;
var CONFIRMSWITCH = false;
var EXAM = null;         /* course index */
var EXAMCACHE = {};      /* course -> paper json */
var GUIDECACHE = {};     /* course -> markdown */
var EXVIEW = null;       /* {course, mode:"guide"|"paper"} */
var EXQUIZ = null;       /* an in-progress mock */
var EXLS = "miva_exam_v1";
var QLS = "miva_quiz_v1";

/* A fixed question bank sat twice teaches you the bank, not the subject. Every
   sitting gets a fresh order of questions AND of options, so recognising "it was
   the third one" stops working. The order is saved with the attempt so a resume
   shows the same paper. */
function shuffled(n){
  var a = [], i, j, t;
  for(i=0;i<n;i++) a.push(i);
  for(i=n-1;i>0;i--){ j = Math.floor(Math.random()*(i+1)); t=a[i]; a[i]=a[j]; a[j]=t; }
  return a;
}

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
    if(deepDone(ME, w) < 6) return w;
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
/* After signing in, always start on Home. Reload keeps your tab; a new sign-in
   should not drop the other person into whatever page you were last reading. */
function goHome(){ TAB = "home"; QUIZ = null; MANUAL = null; BUDDY = null; try{ syncUrl(); }catch(e){} }

function signIn(id){ ME = id; try{ localStorage.setItem("miva_me", id); }catch(e){} goHome(); }
function signOut(){
  ME = null;
  try{ localStorage.removeItem("miva_me"); }catch(e){}
  goHome(); render();
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
/* Deep-hour keys keep their original shape so nothing already logged moves.
   The fast hour gets a "|f" suffix. */
function key(person, w, day, slot){ return person+"|w"+w+"|"+day+(slot==="fast"?"|f":""); }
function getScore(person, w, day, slot){ return S.scores[key(person,w,day,slot)] || null; }
function checkFor(wd, day, slot){
  if(!wd || !wd.checks) return null;
  return wd.checks.filter(function(c){
    return c.day === day && (c.slot || "deep") === (slot || "deep");
  })[0] || null;
}
/* Every scoreable session in a week, deep first then fast where one exists. */
function slotsFor(w){
  var wd = weekData(w), out = [];
  GRID.forEach(function(d){
    out.push({day:d.day, slot:"deep", course:d.deep});
    if(checkFor(wd, d.day, "fast")) out.push({day:d.day, slot:"fast", course:d.fast});
  });
  return out;
}
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
  var got=0, max=0, done=0, slots = slotsFor(w);
  slots.forEach(function(x){
    var s = getScore(person, w, x.day, x.slot);
    if(s){ got += s.score; max += s.max; done++; }
  });
  return {got:got, max:max, done:done, of:slots.length};
}
/* The deep hours are the spine: the week advances on those six, not on the
   fast-hour extras, so a skipped 3-minute quiz never traps you on a week. */
function deepDone(person, w){
  var n = 0;
  GRID.forEach(function(d){ if(getScore(person, w, d.day)) n++; });
  return n;
}
function lowestFor(person, w){
  var out = [];
  slotsFor(w).forEach(function(x){
    var s = getScore(person, w, x.day, x.slot);
    if(s) out.push({day:x.day, slot:x.slot, course:x.course, ratio:s.score/s.max, s:s});
  });
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
  var c = checkFor(weekData(w), pick.day, pick.slot);
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

var COG = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" aria-hidden="true"><path d="M 8.00 2.85 L 8.69 2.90 L 9.66 1.10 L 11.71 1.95 L 11.12 3.91 L 11.64 4.36 L 12.09 4.88 L 14.05 4.29 L 14.90 6.34 L 13.10 7.31 L 13.15 8.00 L 13.10 8.69 L 14.90 9.66 L 14.05 11.71 L 12.09 11.12 L 11.64 11.64 L 11.12 12.09 L 11.71 14.05 L 9.66 14.90 L 8.69 13.10 L 8.00 13.15 L 7.31 13.10 L 6.34 14.90 L 4.29 14.05 L 4.88 12.09 L 4.36 11.64 L 3.91 11.12 L 1.95 11.71 L 1.10 9.66 L 2.90 8.69 L 2.85 8.00 L 2.90 7.31 L 1.10 6.34 L 1.95 4.29 L 3.91 4.88 L 4.36 4.36 L 4.88 3.91 L 4.29 1.95 L 6.34 1.10 L 7.31 2.90 Z"/><circle cx="8" cy="8" r="2.55"/></svg>';

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
  s2.innerHTML = '<div class="v">'+tal.done+'<span style="font-size:15px;color:var(--ink3)">/'+(tal.of||6)+'</span></div><div class="k">week '+w+'</div>';
  g.appendChild(s2);

  var s3 = el("div","stat marks");
  s3.innerHTML = '<div class="v">'+totalMarks()+'</div><div class="k">marks</div>';
  g.appendChild(s3);
  root.appendChild(g);

  var pc = el("div","card");
  pc.appendChild(el("div","lbl","This week"));
  var hasFast = slotsFor(w).some(function(x){ return x.slot === "fast"; });
  ["deep","fast"].forEach(function(slot){
    if(slot === "fast" && !hasFast) return;
    var line = el("div","piprow");
    line.appendChild(el("span","piplbl", slot));
    var pips = el("div","pips");
    GRID.forEach(function(d,i){
      var sc = getScore(ME, w, d.day, slot);
      var has = slot === "deep" || checkFor(weekData(w), d.day, "fast");
      var cls = "pip " + (sc ? scoreClass(sc) : (has ? "" : "none")) + (i===di ? " today" : "");
      pips.appendChild(el("div", cls, d.day.charAt(0)));
    });
    line.appendChild(pips);
    pc.appendChild(line);
  });

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

/* ---------- study buddy ---------- */
/* What a course is ABOUT, in the words someone would type into YouTube. Anchors a
   distilled phrase so "the constant of integration" lands in calculus and "stress"
   lands in materials rather than in psychology. */
var SUBJECT = {
  MTH_102: "calculus", PHY_102: "physics electricity", PHY_108: "physics lab experiment",
  COS_102: "programming", CSC_106: "web development",
  GST_112: "Nigerian peoples and culture", GST_122: "communication skills English"
};

/* Turn a concept label into something searchable.
   The concept field is written to be read on a results screen, so it is often a whole
   clause: "Why the constant of integration is forced, not decorative". Typing that into
   YouTube returns nothing. Strip the framing, cut at the first clause break, keep it to
   a handful of words, and anchor it with the subject. */
var STOP = ("a an the of to in on at for and or is are was were be been being it its that this these those "
  + "with as by from into than then so not but which what why how when where who does do did has have had "
  + "can could will would should must one actually simply just only always never really quite very there "
  + "we you he she they i us our your their between within about over under through each any all some more most"
  ).split(" ");

function searchTerms(course, concept){
  var s = String(concept || "").trim();
  s = s.split(/[,;:(]|\s[-–—]\s/)[0];                         /* first clause only */
  s = s.replace(/\b(slide|deck|lecture|week|question|option|example|session|material|topic)s?\s*\d*\b/gi, " ");
  /* keep the characters that carry meaning in maths and physics: decimals, percents,
     exponents, roots. Stripping those turned "63.2%" into "63 2". */
  s = s.replace(/[^A-Za-z0-9.%+/^√∫π°′⁻¹²³ '’-]/g, " ");
  s = s.replace(/\s+/g, " ").trim();

  /* Drop the filler, then take the words. Truncating first is what produced
     "n -1 is the one exponent the" — six words of which two meant anything. */
  var kept = s.split(" ").filter(function(w){
    var b = w.toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9%]+$/g, "");
    return b.length > 0 && STOP.indexOf(b) < 0;
  }).slice(0, 6);

  var subj = SUBJECT[course] || "";
  if(kept.length < 2) return subj || String(concept || "").trim();
  /* anchor a short phrase with the subject; a long one is specific enough alone */
  return kept.length <= 3 && subj ? (kept.join(" ") + " " + subj) : kept.join(" ");
}

function ytLink(query){
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(String(query||"").trim());
}

/* The video row.
   Where the buddy has answered, its own searches are used — a model that has just read
   the week's material picks a far better query than any rule could. Otherwise the
   concept is distilled locally. The trusted channels come last and only as a way to
   re-run the same search inside one teacher's work, never as the search itself. */
/* The distinct ideas a check tests, best first. */
function conceptsOf(chk){
  var out = [], seen = {};
  ((chk && chk.questions) || []).forEach(function(q){
    var c = String(q.concept || "").trim();
    if(c && !seen[c.toLowerCase()]){ seen[c.toLowerCase()] = 1; out.push(c); }
  });
  return out.slice(0, 3);
}

function videoRow(parent, course, concept){
  var picked;
  if(BUDDY && BUDDY.searches && BUDDY.searches.length){
    picked = BUDDY.searches.slice(0, 3);
  } else {
    var cands = Array.isArray(concept) ? concept : [concept];
    var seen = {};
    picked = cands.map(function(c){ return searchTerms(course, c); })
                  .filter(function(q){
                    if(!q || seen[q]) return false;
                    seen[q] = 1; return true;
                  }).slice(0, 3);
  }
  if(!picked.length) return;

  parent.appendChild(el("div","lbl","Watch someone explain it"));
  var vr = el("div","vids");
  picked.forEach(function(q, i){
    var a = el("a","vid"+(i===0?" first":""));
    a.innerHTML = '<span class="vq">'+esc(q)+'</span><span class="vgo">search ↗</span>';
    a.href = ytLink(q); a.target = "_blank"; a.rel = "noopener";
    vr.appendChild(a);
  });
  parent.appendChild(vr);

  var chans = CHANNELS[course] || [];
  if(chans.length){
    var cr = el("div","row");
    cr.appendChild(el("span","muted","or inside one channel:"));
    chans.forEach(function(ch){
      var a = el("a","chip", esc(ch[0]));
      a.href = ytLink(picked[0] + " " + ch[1]);
      a.target = "_blank"; a.rel = "noopener";
      a.style.textDecoration = "none";
      cr.appendChild(a);
    });
    parent.appendChild(cr);
  }
}
/* Tonight's session, whichever half he last touched. */
function buddyContext(){
  var w = wk(), di = dayIdx(), wd = weekData(w);
  if(di < 0) di = 0;
  var g = GRID[di];
  var deep = getScore(ME, w, g.day), fast = getScore(ME, w, g.day, "fast");
  var slot = (!deep && fast) ? "fast" : "deep";
  var course = slot === "fast" ? g.fast : g.deep;
  var chk = checkFor(wd, g.day, slot);
  var sc = slot === "fast" ? fast : deep;
  return {w:w, day:g.day, slot:slot, course:course, chk:chk, score:sc,
          missed:(sc && sc.wrong) ? sc.wrong : []};
}
/* The pack already explains every question. Find the ones behind a concept. */
function whyFor_concept(chk, concept){
  if(!chk) return [];
  return chk.questions.filter(function(q){ return (q.concept||"") === concept; });
}
function openBuddy(view, concept){
  var c = buddyContext();
  var qs = concept ? whyFor_concept(c.chk, concept) : [];
  BUDDY = {view: view || "home", concept: concept || null, qs: qs, asking:false, answer:null, searches:null, err:null, text:""};
  render();
}
function loadSummary(w, course){
  if(SUMCACHE[w+":"+course] !== undefined) return;
  SUMCACHE[w+":"+course] = null;
  fetch("/api/week?n="+w+"&doc=summary&course="+course)
    .then(function(r){ return r.ok ? r.text() : null; })
    .then(function(t){ SUMCACHE[w+":"+course] = t || "__none__"; render(); })
    .catch(function(){ SUMCACHE[w+":"+course] = "__none__"; render(); });
}
function askBuddy(){
  var c = buddyContext();
  BUDDY.asking = true; BUDDY.err = null; BUDDY.answer = null; render();
  fetch("/api/ask", {
    method:"POST", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      question: BUDDY.text, course: c.course, week: c.w,
      topic: c.chk ? c.chk.topic : "",
      who: meName(),
      /* Only send what he got wrong when he opened this FROM a missed concept.
         Sending it on a free question made the model answer the miss instead of
         the question, and open by grading working it cannot see. */
      missed: BUDDY.concept ? c.missed : [],
      asked: BUDDY.concept && BUDDY.qs && BUDDY.qs[0] ? BUDDY.qs[0].q : "",
      chose: "", right: (BUDDY.concept && BUDDY.qs && BUDDY.qs[0] && BUDDY.qs[0].options)
             ? BUDDY.qs[0].options[BUDDY.qs[0].answerIndex] : ""
    })
  }).then(function(r){ return r.json().then(function(d){ return {s:r.status, d:d}; }); })
    .then(function(x){
      BUDDY.asking = false;
      if(x.d && x.d.ok){
        BUDDY.answer = x.d.answer;
        /* the model just read the week's material, so its searches beat any rule */
        BUDDY.searches = (x.d.searches && x.d.searches.length) ? x.d.searches : null;
      }
      else BUDDY.err = (x.d && (x.d.reason || x.d.error)) || "Couldn't get an answer.";
      render();
    })
    .catch(function(){ BUDDY.asking = false; BUDDY.err = "Couldn't reach the server."; render(); });
}
function buddyButton(root){
  var ctx = buddyContext();
  var b = el("button","buddybtn"+((ctx.missed && ctx.missed.length) ? " nudge" : ""));
  b.setAttribute("aria-label","Open the study buddy");
  /* A question mark that writes itself, the way you'd draw one: the hook sweeps
     over and down, the stem follows, then the dot lands. pathLength="100" lets the
     dash animation be written in plain percentages regardless of the real geometry. */
  b.innerHTML = '<svg class="qmark" viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">'
    + '<path class="q-stroke" pathLength="100" '
    + 'd="M20.5 24.5A11.5 11.5 0 1 1 32 36v5.5" '
    + 'fill="none" stroke="currentColor" stroke-width="6.2" '
    + 'stroke-linecap="round" stroke-linejoin="round"/>'
    + '<circle class="q-dot" cx="32" cy="50.5" r="3.6" fill="currentColor"/>'
    + '</svg>';
  if(ctx.missed && ctx.missed.length) b.appendChild(el("span","dot", String(ctx.missed.length)));
  b.onclick = function(){ openBuddy("home"); };
  root.appendChild(b);
}

function buddyPanel(root){
  var c = buddyContext();
  var back = el("div","scrim");
  back.onclick = function(){ BUDDY = null; render(); };
  root.appendChild(back);

  var p = el("div","sheet");
  var head = el("div","sheeth");
  head.innerHTML = '<div><div class="lbl" style="margin:0">'+esc(c.day)+' · '+esc(NAMES[c.course]||c.course)+' · week '+c.w+'</div>'
                 + '<h2 style="margin:2px 0 0;font-size:18px">Study buddy</h2></div>';
  var x = btn("chip","Close", function(){ BUDDY = null; render(); });
  head.appendChild(x);
  p.appendChild(head);

  var body = el("div","sheetb");

  if(BUDDY.view === "concept" && BUDDY.concept){
    body.appendChild(el("div","lbl","You missed this"));
    body.appendChild(el("h3",null, esc(BUDDY.concept)));
    if(!BUDDY.qs.length) body.appendChild(el("p","muted","No explanation stored for that one."));
    BUDDY.qs.forEach(function(q){
      var card = el("div","bcard");
      card.appendChild(el("div","bq", esc(q.q)));
      if(q.type === "mcq" && q.options){
        card.appendChild(el("div","ba","<b>Answer:</b> "+esc(q.options[q.answerIndex])));
      }
      card.appendChild(el("div","bw", esc(q.why||"")));
      body.appendChild(card);
    });
    videoRow(body, c.course, BUDDY.concept);
    var br = el("div","row");
    br.appendChild(btn("act ghost","← Back", function(){ openBuddy("home"); }));
    br.appendChild(btn("act","Ask about this", function(){ BUDDY.view = "ask"; render(); }));
    body.appendChild(br);
  }
  else if(BUDDY.view === "ask"){
    body.appendChild(el("div","lbl","Ask"));
    body.appendChild(el("p","muted","Your question goes out with tonight's topic, your lecturer's own summary, and what you got wrong — so the answer is about this course, not the subject in general."));
    var ta = el("textarea");
    ta.placeholder = BUDDY.concept ? "Why is " + BUDDY.concept + " actually true?" : "Ask anything about tonight's session…";
    ta.value = BUDDY.text || "";
    ta.oninput = function(){ BUDDY.text = ta.value; };
    body.appendChild(ta);
    var ar = el("div","row");
    var go = btn("act", BUDDY.asking ? "Thinking…" : "Ask", function(){
      if(!(BUDDY.text||"").trim()){ toast("Type a question first"); return; }
      askBuddy();
    });
    if(BUDDY.asking) go.setAttribute("disabled","");
    ar.appendChild(go);
    body.appendChild(ar);

    if(BUDDY.err){
      var e1 = el("div","bcard");
      e1.style.borderLeft = "3px solid var(--fast)";
      e1.appendChild(el("div","bw", esc(BUDDY.err)));
      e1.appendChild(el("p","muted","<br>The concepts and video searches below still work — they need no key at all."));
      body.appendChild(e1);
    }
    if(BUDDY.answer){
      var an = el("div","bcard prose");
      an.innerHTML = mdToHtml(BUDDY.answer);
      body.appendChild(an);
      videoRow(body, c.course, BUDDY.concept);
    }
    body.appendChild(btn("act ghost","← Back", function(){ openBuddy("home"); }));
  }
  else {
    if(c.missed.length){
      body.appendChild(el("div","lbl","What you missed tonight"));
      c.missed.forEach(function(m){
        var row = el("button","mrow");
        row.innerHTML = '<span>'+esc(m)+'</span><span class="chev">→</span>';
        row.onclick = function(){ openBuddy("concept", m); };
        body.appendChild(row);
      });
      body.appendChild(el("p","muted","<br>Tap one and I'll show you exactly what the wrong option was confusing it with, plus where to watch it explained."));
    } else if(c.score){
      body.appendChild(el("div","lbl","Tonight"));
      body.appendChild(el("p","muted","You scored "+c.score.score+"/"+c.score.max+" and missed nothing. Nothing to unpick."));
    } else {
      body.appendChild(el("div","lbl","Tonight"));
      body.appendChild(el("p","muted","Take tonight's check and whatever you miss shows up here, with the reasoning and a place to watch it explained."));
    }

    var r1 = el("div","row");
    r1.appendChild(btn("act","Ask a question", function(){ BUDDY.view = "ask"; render(); }));
    if(c.chk){
      r1.appendChild(btn("act ghost","Tonight's brief", function(){ BUDDY.view = "brief"; render(); }));
    }
    body.appendChild(r1);

    /* The topic field is prose ABOUT the session ("This session is Week 1 applied…"),
       so it distils into nonsense. Each question's concept names an actual idea. */
    videoRow(body, c.course, c.chk ? conceptsOf(c.chk) : "");

    body.appendChild(el("div","lbl","This week's summary"));
    var key = c.w+":"+c.course;
    if(SUMCACHE[key] === undefined){
      var lb = btn("act ghost","Load the summary", function(){ loadSummary(c.w, c.course); });
      body.appendChild(lb);
    } else if(SUMCACHE[key] === null){
      body.appendChild(el("p","muted","Loading…"));
    } else if(SUMCACHE[key] === "__none__"){
      body.appendChild(el("p","muted","No summary in the repo for this one yet."));
    } else {
      var sm = el("div","bcard prose");
      sm.innerHTML = mdToHtml(SUMCACHE[key]);
      body.appendChild(sm);
    }
  }

  if(BUDDY.view === "brief"){
    body.innerHTML = "";
    body.appendChild(el("div","lbl","Tonight's brief"));
    body.appendChild(el("p","muted", esc((c.chk && c.chk.topic) || "No brief for this session.")));
    body.appendChild(btn("act ghost","← Back", function(){ openBuddy("home"); }));
  }

  p.appendChild(body);
  root.appendChild(p);
}

/* ---------- home ---------- */
function fold(root, title, sub, build){
  var c = el("div","card fold");
  var h = el("button","foldh");
  h.innerHTML = '<span class="ft">'+esc(title)+(sub?' <i>'+esc(sub)+'</i>':'')+'</span><span class="chev">'+(OPEN[title]?"−":"+")+'</span>';
  h.onclick = function(){ OPEN[title] = !OPEN[title]; render(); };
  c.appendChild(h);
  if(OPEN[title]){
    var b = el("div","foldb");
    build(b);
    c.appendChild(b);
  }
  root.appendChild(c);
}
function tbl(parent, head, rows){
  var w = el("div","tw");
  var h = head ? '<thead><tr>'+head.map(function(x){ return '<th>'+esc(x)+'</th>'; }).join("")+'</tr></thead>' : '';
  var b = rows.map(function(r){
    return '<tr>'+r.map(function(c,i){ return '<td'+(i===0?' class="k"':'')+'>'+c+'</td>'; }).join("")+'</tr>';
  }).join("");
  w.innerHTML = '<table>'+h+'<tbody>'+b+'</tbody></table>';
  parent.appendChild(w);
}
function bullets(parent, items){
  var ul = el("ul");
  ul.style.cssText = "margin:0;padding-left:19px;color:var(--ink2);font-size:14.5px";
  items.forEach(function(x){ var li = el("li",null,x); li.style.marginBottom = "7px"; ul.appendChild(li); });
  parent.appendChild(ul);
}
function weekGrid(root){
  var w = wk(), wd = weekData(w), di = dayIdx();
  var g = el("div","wg");
  GRID.forEach(function(d, i){
    var r = el("div","wr");
    r.appendChild(el("div","dn",d.day));

    var chk = null, ft = null;
    if(wd && wd.checks) chk = wd.checks.filter(function(x){ return x.day===d.day; })[0] || null;
    if(wd && wd.days){ var dd = wd.days.filter(function(x){ return x.day===d.day; })[0]; if(dd && dd.fast) ft = dd.fast.topic; }
    var hasCheck = !!(chk && chk.questions && chk.questions.length);
    var mine = getScore(ME, w, d.day);

    /* deep hour - opens that night's check */
    var dc = el("div","cell d"+(i===di?" today":""));
    dc.innerHTML = '<div class="ce">deep · 1×</div>'
      + '<div class="cn">'+esc(NAMES[d.deep])+'</div>'
      + '<div class="ct">'+esc(chk&&chk.topic?chk.topic:d.dn)+'</div>';
    var foot = el("div","cf");
    if(mine) foot.appendChild(el("span","sc "+scoreClass(mine), "you "+mine.score+"/"+mine.max));
    others().forEach(function(p){
      var o = getScore(p.id,w,d.day);
      if(o) foot.appendChild(el("span","sc "+scoreClass(o), esc(p.name.toLowerCase())+" "+o.score+"/"+o.max));
    });
    var dprog = hasCheck ? quizProgress(w, d.day, "deep") : 0;
    foot.appendChild(el("span","go", mine ? "retake →"
      : (dprog ? "resume · "+dprog+"/"+chk.questions.length+" →"
      : (hasCheck ? chk.questions.length+" questions →" : "log a score →"))));
    dc.appendChild(foot);
    dc.onclick = function(){ if(hasCheck) startQuiz(d.day); else manualScore(d.day); };
    r.appendChild(dc);

    /* fast hour - its own short check when the pack has one */
    var fchk = checkFor(wd, d.day, "fast");
    var fmine = getScore(ME, w, d.day, "fast");
    var fc = el("div","cell f"+(i===di?" today":""));
    var label = (d.fast === "REVIEW" || d.fast === "CATCHUP") ? "no video · 1×" : "fast · 1.5–1.75×";
    fc.innerHTML = '<div class="ce">'+label+'</div>'
      + '<div class="cn">'+esc(NAMES[d.fast])+'</div>'
      + '<div class="ct">'+esc((fchk&&fchk.topic)||ft||d.fn)+'</div>';
    if(fchk && fchk.questions && fchk.questions.length){
      var ff = el("div","cf");
      if(fmine) ff.appendChild(el("span","sc "+scoreClass(fmine), "you "+fmine.score+"/"+fmine.max));
      others().forEach(function(p){
        var o = getScore(p.id, w, d.day, "fast");
        if(o) ff.appendChild(el("span","sc "+scoreClass(o), esc(p.name.toLowerCase())+" "+o.score+"/"+o.max));
      });
      var fprog = quizProgress(w, d.day, "fast");
      ff.appendChild(el("span","go fast", fmine ? "retake →"
        : (fprog ? "resume · "+fprog+"/"+fchk.questions.length+" →" : fchk.questions.length+" questions →")));
      fc.appendChild(ff);
      fc.onclick = function(){ startQuiz(d.day, "fast"); };
    } else {
      var full = String((fchk&&fchk.topic)||ft||d.fn||"");
      if(full.length > 90){
        var hint = el("div","cf");
        hint.appendChild(el("span","go dim","read the brief"));
        fc.appendChild(hint);
        fc.onclick = function(){
          var body = fc.querySelector(".ct");
          var open = body.classList.toggle("open");
          hint.querySelector(".go").textContent = open ? "show less" : "read the brief";
        };
      } else {
        fc.classList.add("static");
      }
    }
    r.appendChild(fc);
    g.appendChild(r);
  });
  root.appendChild(g);

  var legend = el("p","muted");
  legend.style.cssText = "margin:2px 2px 0;font-size:13px";
  legend.innerHTML = "Left is the <b>deep hour</b>, an hour at 1× with a twelve-question check. Right is the <b>fast hour</b> at 1.5–1.75× with a short one. Tap either to sit it.";
  root.appendChild(legend);

  if(!wd){
    var n = el("div","card");
    n.appendChild(el("p","muted", LOADING[w] ? "Loading week "+w+"…" : "Week "+w+" didn't load. Check the Data tab."));
    root.appendChild(n);
  }
}

function greeting(){
  var h = new Date().getHours();
  if(h < 5)  return "Still up";
  if(h < 12) return "Morning";
  if(h < 17) return "Afternoon";
  if(h < 22) return "Evening";
  return "Late one";
}

function viewHome(root){
  var di = dayIdx(), w = wk(), wd = weekData(w);

  /* the way in */
  var hail = el("div","hail");
  hail.innerHTML = '<span class="hi">'+esc(greeting())+', <b>'+esc(meName())+'</b></span>'
                 + '<span class="muted">week '+w+'</span>';
  root.appendChild(hail);

  var hero = el("div","card deepc");
  if(di === -1){
    hero.appendChild(el("div","lbl","Sunday · 19:00"));
    hero.appendChild(el("h2",null,"Recap night"));
    hero.appendChild(el("p","muted","One hour. One topic each, taught with no notes."));
    var rs = el("div","row");
    rs.appendChild(btn("act big","Open Sunday", function(){ TAB="sunday"; render(); window.scrollTo(0,0); }));
    hero.appendChild(rs);
  } else {
    var g = GRID[di];
    var chk = checkFor(wd, g.day, "deep");
    var sc = getScore(ME, w, g.day);
    hero.appendChild(el("div","lbl","Tonight · "+g.day+" · week "+w));
    hero.appendChild(el("h2",null, esc(NAMES[g.deep]) + "  then  " + esc(NAMES[g.fast])));
    hero.appendChild(el("p","muted", chk && chk.topic ? esc(chk.topic).slice(0,150)+"…" : esc(g.dn)));
    var r = el("div","row");
    if(sc){
      r.appendChild(el("span","sc "+scoreClass(sc), "Scored "+sc.score+"/"+sc.max));
      r.appendChild(btn("act","Open the session", function(){ TAB="tonight"; render(); window.scrollTo(0,0); }));
    } else {
      r.appendChild(btn("act big","Start tonight's session", function(){ TAB="tonight"; render(); window.scrollTo(0,0); }));
    }
    hero.appendChild(r);
  }
  root.appendChild(hero);

  statsStrip(root);

  var wh = el("div","card");
  wh.appendChild(el("div","lbl","The week · deep hour then fast hour"));
  wh.appendChild(el("p","muted","Six identical days. No day is heavier than another, and no course is ever more than three days from your attention. Tap any deep-hour cell to take that check."));
  root.appendChild(wh);
  weekGrid(root);

  var ph = el("div","card");
  ph.appendChild(el("div","lbl","The plan"));
  ph.appendChild(el("p","muted","The standing rules. Open one when you need it."));
  root.appendChild(ph);

  fold(root, "Every evening is two halves", "21:00–23:00", function(b){
    b.appendChild(el("p","muted","One hour of hard, one hour of fast, in that order. You never face two demanding courses back to back, and every day ends on something light — so you finish feeling ahead rather than beaten."));
    tbl(b, null, [
      ["21:00 – 22:00", "<b>The deep hour · 1×</b><br>Maths, physics or algorithms. Pen in hand, phone in another room. One topic, properly understood."],
      ["22:00 – 23:00", "<b>The fast hour · 1.5–1.75×</b><br>Watch at speed, read the PDF, take the quiz, post in the forum, close the laptop."]
    ]);
    b.appendChild(el("p","muted","Times are the default, not the rule. Shift the pair earlier or later to suit the day — what matters is that they stay adjacent and stay in that order."));
  });

  fold(root, "What runs at what speed", null, function(b){
    tbl(b, ["Speed","What","Why"], SPEED.map(function(r){ return [r[0], esc(r[1]), esc(r[2])]; }));
    b.appendChild(el("p","muted","The test when you're unsure: if you could follow it while walking, it runs at 1.75×. If you'd need to stop and write, it runs at 1×."));
  });

  fold(root, "A deep hour, start to finish", "65 minutes", function(b){
    tbl(b, ["Min","What"], DEEPHOUR.map(function(r){ return [r[0], esc(r[1])]; }));
    b.appendChild(el("p","muted","Never rewatch a lecture. Re-read the PDF instead — roughly four times faster, and it holds better."));
  });

  fold(root, "When you miss a day", null, function(b){ bullets(b, MISSED); });

  fold(root, "Afternoon bursts", "10–15 min", function(b){
    b.appendChild(el("p","muted","Not scheduled, and never a separate subject. When a gap opens between calls, spend it on one thing."));
    bullets(b, [
      "<b>Watch tonight's intro videos.</b> At 1.75× they take ten to fifteen minutes and turn the deep hour into revision rather than first contact.",
      "<b>Already did that?</b> Clear a forum post, or take a practice quiz cold. Both are five-minute jobs that are annoying to carry into the evening.",
      "<b>Don't start new material.</b> Twenty interrupted minutes on a derivation is worse than none — you'll redo it tonight anyway."
    ]);
  });

  fold(root, "The Sunday recap", "1 hr, both of you", function(b){
    b.appendChild(el("p","muted","Teach the topic you understood <b>least</b>, not the one you understood best. Explaining something you only half-know is where it gets built — you find the hole the moment you say it out loud, and someone is there to notice you glossed over it."));
    bullets(b, [
      "One hour in total, not one hour each. Two topics — one yours, one theirs.",
      "Never both take the same course. If your lowest scores land together, whoever scored lower keeps it and the other takes their next-lowest elsewhere. The app does this for you.",
      "Resist a second topic each. Wanting to come back next Sunday is what keeps this running in November.",
      "A bad week makes this more valuable, not less. Teach one thing you half-covered.",
      "Whatever you couldn't explain goes to the top of next week's list."
    ]);
    var r = el("div","row");
    r.appendChild(btn("act ghost","Open Sunday", function(){ TAB="sunday"; render(); window.scrollTo(0,0); }));
    b.appendChild(r);
  });

  fold(root, "The calendar", "28 Aug – 13 Dec", function(b){
    tbl(b, ["Week","Dates","What's different"], CALENDAR.map(function(r){ return [r[0], esc(r[1]), esc(r[2])]; }));
    b.appendChild(el("p","muted","Assumes Week 1 opens Monday 7 September. The LMS still shows the January cohort's windows — confirm yours when they publish."));
  });
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
  /* Ask for the deep check by slot. Filtering on the day alone used to work only
     because deep checks happened to be written first; now that every weekday also
     carries a fast check, that would hand the deep hour a five-question quiz. */
  var chk = checkFor(wd, g.day, "deep");
  var topic = chk ? chk.topic : null;
  var fastTopic = null;
  if(wd && wd.days){ var dd = wd.days.filter(function(x){ return x.day===g.day; })[0]; if(dd && dd.fast) fastTopic = dd.fast.topic; }

  var c1 = el("div","card deepc");
  c1.appendChild(el("div","lbl","21:00 – 22:00 · deep hour · 1×"));
  c1.appendChild(el("h2",null,esc(NAMES[g.deep])));
  topicBlock(c1, topic || g.dn, "muted");
  c1.appendChild(el("p","muted","Watch the lecture on the LMS with this open beside it. Pen in hand, phone in another room. The PDF is the reference, not the lesson — skim its headings first so you know where the video is going, then read it properly afterwards for anything the video skipped."));

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
  if(g.fast==="REVIEW") c2.appendChild(el("p","muted","Read back this week's summaries, then look at your scores. The lowest one is your Sunday topic."));
  else if(g.fast==="CATCHUP") c2.appendChild(el("p","muted","Last week's question set, sat cold. Or whatever you missed this week."));
  else c2.appendChild(el("p","muted","Watch at speed, read the PDF, take the quiz, post in the forum, close the laptop."));

  var fchk = checkFor(wd, g.day, "fast");
  var fsc = getScore(ME, w, g.day, "fast");
  var row2 = el("div","row");
  if(fsc){
    row2.appendChild(el("span","sc "+scoreClass(fsc), "Scored "+fsc.score+"/"+fsc.max));
    row2.appendChild(btn("act ghost","Retake", function(){ startQuiz(g.day, "fast"); }));
    c2.appendChild(row2);
  } else if(fchk && fchk.questions && fchk.questions.length){
    row2.appendChild(btn("act","Quick check · "+fchk.questions.length+" questions", function(){ startQuiz(g.day, "fast"); }));
    row2.appendChild(el("span","muted","about three minutes"));
    c2.appendChild(row2);
  } else if(g.fast === "REVIEW" || g.fast === "CATCHUP"){
    /* Friday and Saturday have nothing new to test, so they get no check. Say so —
       a card that just stops reads like something failed to load. */
    row2.appendChild(el("span","muted","No check tonight: this hour is "
      + (g.fast === "REVIEW" ? "review" : "catch-up") + ", not new material."));
    c2.appendChild(row2);
  } else {
    row2.appendChild(btn("act ghost","Log a score manually", function(){ manualScore(g.day, "fast"); }));
    row2.appendChild(el("span","muted","No quick check generated for this session yet"));
    c2.appendChild(row2);
  }
  root.appendChild(c2);

  var c3 = el("div","card");
  c3.appendChild(el("div","lbl","If a gap opens this afternoon"));
  c3.appendChild(el("p","muted","Watch tonight's intro videos at 1.75×. Ten to fifteen minutes, and it turns the deep hour into revision rather than first contact. Don't start new material in a burst."));
  root.appendChild(c3);
}

/* ---------- week ---------- */
function viewWeek(root){
  var head = el("div","card");
  head.appendChild(el("div","lbl","The shape of every week"));
  head.appendChild(el("p","muted","Deep hour first at normal speed, fast hour second at 1.5–1.75×. Six days. Sunday is the recap only."));
  root.appendChild(head);
  weekGrid(root);
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
    if(pick.slot === "fast"){
      c.appendChild(el("p","muted","This one is a recall course, so don't teach it as a concept — <b>quiz each other on the lists</b> until you can both produce them cold. Producing beats recognising."));
    }
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
  var ppl = S.people, rows = [];
  for(var w=1; w<=12; w++){
    var any = false, r = {w:w, cells:[]};
    GRID.forEach(function(d){
      var cell = [];
      ["deep","fast"].forEach(function(slot){
        ppl.forEach(function(p){
          var s = getScore(p.id, w, d.day, slot);
          if(s){ cell.push({p:p, s:s, slot:slot}); any = true; }
        });
      });
      r.cells.push(cell);
    });
    if(any) rows.push(r);
  }
  if(!rows.length){ root.appendChild(el("div","empty","<b>Nothing logged yet</b>Scores appear here as you take the checks.")); return; }

  var t = el("div","tw");
  var html = '<table><thead><tr><th>Week</th>';
  GRID.forEach(function(d){
    html += '<th>'+d.day+'<br><span style="font-weight:400;text-transform:none;letter-spacing:0">'
         + NAMES[d.deep]+' · '+NAMES[d.fast]+'</span></th>';
  });
  html += '<th>Avg</th></tr></thead><tbody>';
  rows.forEach(function(r){
    html += '<tr><td class="k">W'+r.w+'</td>';
    var tot = 0, cnt = 0;
    r.cells.forEach(function(cell){
      var bits = cell.map(function(x){
        return '<span class="sc '+scoreClass(x.s)+(x.slot==="fast"?' sm':'')+'">'
             + esc(x.p.name.charAt(0).toUpperCase())+' '+x.s.score+'</span>';
      });
      cell.forEach(function(x){ tot += x.s.score/x.s.max; cnt++; });
      html += '<td>'+(bits.length?bits.join(" "):'<span class="muted">–</span>')+'</td>';
    });
    html += '<td class="k">'+(cnt?Math.round(tot/cnt*100)+"%":"–")+'</td></tr>';
  });
  t.innerHTML = html + '</tbody></table>';
  root.appendChild(t);

  var n = el("div","card");
  n.appendChild(el("div","lbl","Reading this"));
  var legend = ppl.map(function(p){ return esc(p.name.charAt(0).toUpperCase())+" is "+esc(p.name); }).join(", ");
  n.appendChild(el("p","muted", legend+". Each cell holds that day's deep-hour score and, in the paler pill, the fast-hour one. A column that stays red across weeks is a course to raise with a tutor, not something another Sunday will fix."));
  root.appendChild(n);
}

/* ---------- data / sync ---------- */
function viewData(root){
  var top = el("div","card");
  top.appendChild(el("div","lbl","Settings"));
  top.appendChild(el("h2",null,"Signed in as "+esc(meName())));
  top.appendChild(el("p","muted","Switching to the other person is down at the bottom of this page, deliberately. It used to be one tap on the header and was easy to do by accident."));
  var tb = el("div","row");
  tb.appendChild(btn("act ghost","← Back to Home", function(){ TAB="home"; syncUrl(); render(); window.scrollTo(0,0); }));
  top.appendChild(tb);
  root.appendChild(top);

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
  c2.appendChild(el("p","muted","<br>Packs are read live from the <code>devpanther/miva-study</code> repo, one week at a time. Regenerate a week and push it, and this picks it up within five minutes — the site never needs redeploying for new questions."));
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
  c3.appendChild(el("p","muted","<br>Two places, claimed by name. Switching here doesn't delete anything — your scores stay against your name."));
  var r3 = el("div","row");
  if(CONFIRMSWITCH){
    r3.appendChild(el("span","muted","Switch away from "+esc(meName())+"?"));
    r3.appendChild(btn("act","Yes, switch", function(){ CONFIRMSWITCH=false; signOut(); }));
    r3.appendChild(btn("act ghost","Cancel", function(){ CONFIRMSWITCH=false; render(); }));
  } else {
    r3.appendChild(btn("act ghost","Switch person", function(){ CONFIRMSWITCH=true; render(); }));
  }
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
    order:EXQUIZ.order, opts:EXQUIZ.opts, answers:EXQUIZ.answers,
    idx:EXQUIZ.idx, submitted:EXQUIZ.submitted, at:Date.now()
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
  if(!r || !r.order) return null;
  return {done: Object.keys(r.answers||{}).length, of: r.order.length, submitted: !!r.submitted};
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
function newAttempt(pack, only){
  var pool = only && only.length ? only.slice() : null;
  var order = pool ? pool : shuffled(pack.questions.length);
  if(pool){ var sp = shuffled(pool.length); order = sp.map(function(k){ return pool[k]; }); }
  return {
    order: order,
    opts: order.map(function(oi){ return shuffled(pack.questions[oi].options.length); }),
    answers: {}, idx: 0, submitted: false
  };
}
function startExam(course, only){
  var pack = EXAMCACHE[course];
  if(!pack || pack === "__fail__"){ render(); return; }
  var prev = only ? null : examRestore(course);
  var a = (prev && prev.order && prev.opts) ? prev : newAttempt(pack, only);
  EXQUIZ = {
    course: course, title: pack.title, pack: pack,
    order: a.order, opts: a.opts,
    answers: a.answers || {},
    idx: typeof a.idx === "number" ? a.idx : 0,
    submitted: !!a.submitted,
    showAll: false
  };
  if(only) examSave();
  render(); window.scrollTo(0,0);
}
/* display position -> the question and its shuffled options */
function exQ(i){
  var q = EXQUIZ;
  var orig = q.order[i];
  var src = q.pack.questions[orig];
  return {
    orig: orig, src: src, q: src.q, why: src.why,
    options: q.opts[i].map(function(k){ return src.options[k]; }),
    answerIndex: q.opts[i].indexOf(src.answerIndex)
  };
}
function examGrade(){
  var q = EXQUIZ, score = 0, missed = [];
  q.order.forEach(function(_, i){
    var v = exQ(i);
    if(q.answers[i] === v.answerIndex) score++;
    else missed.push(i);
  });
  return {score:score, max:q.order.length, missed:missed};
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
        card.appendChild(el("span","sc "+(p.submitted?"g":"o"), p.submitted ? "Sat it" : p.done + "/" + (p.of||c.questions) + " answered"));
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

  var q = EXQUIZ, n = q.order.length, left = [];
  q.order.forEach(function(_,i){ if(typeof q.answers[i] !== "number") left.push(i); });

  var bar = el("div","deckbar");
  var track = el("div","track"); track.style.cssText="height:9px;border-radius:999px;background:var(--surface2);overflow:hidden";
  var fill = el("div"); fill.style.cssText="height:100%;background:var(--deep);border-radius:999px;transition:width .3s;width:"+Math.round((n-left.length)/n*100)+"%";
  track.appendChild(fill); bar.appendChild(track);
  var meta = el("div","deckmeta");
  meta.appendChild(el("span",null, EXVIEW.course.replace("_"," ") + " · " + (n - left.length) + "/" + n + " answered"));
  meta.appendChild(el("span",null, "Q " + (q.idx+1)));
  bar.appendChild(meta);
  root.appendChild(bar);

  var qq = exQ(q.idx);
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
    startExam(q.course);
  }));
  if(g.missed.length){
    r.appendChild(btn("act ghost","Retake the "+g.missed.length+" I missed", function(){
      var only = g.missed.map(function(i){ return q.order[i]; });
      try{ localStorage.removeItem(EXLS+":"+q.course); }catch(e){}
      startExam(q.course, only);
    }));
  }
  root.appendChild(r);
  var note = el("p","muted");
  note.style.cssText = "margin:2px 2px 0;font-size:13px";
  note.textContent = "Questions and options are reshuffled every sitting, so you can sit this as many times as you like without learning the paper instead of the subject.";
  root.appendChild(note);

  q.order.forEach(function(_, i){
    var qq = exQ(i);
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
/* A check is twelve questions and a quarter of an hour. If the phone sleeps or the
   tab is dropped, the answers so far are still here when you come back. */
function quizKey(w, day, slot){ return QLS+":"+w+":"+day+":"+(slot||"deep"); }
function quizSave(){
  if(!QUIZ) return;
  try{ localStorage.setItem(quizKey(wk(), QUIZ.day, QUIZ.slot), JSON.stringify({
    opts:QUIZ.opts, answers:QUIZ.answers, marks:QUIZ.marks,
    idx:QUIZ.idx, submitted:QUIZ.submitted, at:Date.now()
  })); }catch(e){}
}
function quizRestore(w, day, slot){
  try{ var r = localStorage.getItem(quizKey(w, day, slot)); if(r) return JSON.parse(r); }catch(e){}
  return null;
}
function quizClear(w, day, slot){ try{ localStorage.removeItem(quizKey(w, day, slot)); }catch(e){} }
function quizProgress(w, day, slot){
  var r = quizRestore(w, day, slot);
  if(!r || r.submitted) return 0;
  return Object.keys(r.answers||{}).length;
}
function startQuiz(day, slot){
  slot = slot || "deep";
  var chk = checkFor(weekData(wk()), day, slot);
  if(!chk || !chk.questions || !chk.questions.length){ manualScore(day, slot); return; }
  var prev = quizRestore(wk(), day, slot);
  var opts = (prev && prev.opts) || chk.questions.map(function(qq){
    return (qq.type === "mcq" && qq.options) ? shuffled(qq.options.length) : null;
  });
  QUIZ = {
    day:day, slot:slot, chk:chk, opts:opts,
    answers:(prev && prev.answers) || {},
    marks:(prev && prev.marks) || {},
    submitted:!!(prev && prev.submitted),
    idx:(prev && typeof prev.idx === "number") ? prev.idx : 0,
    celebrated:false
  };
  BRIEF = false;
  TAB = "quiz"; render();
  window.scrollTo(0,0);
}
function manualScore(day, slot){
  slot = slot || "deep";
  var ex = getScore(ME, wk(), day, slot);
  MANUAL = {day:day, slot:slot, score: ex?ex.score:null, wrong: ex&&ex.wrong?ex.wrong.join(", "):""};
  TAB = "manual"; render();
}
/* Options are shown in a per-attempt random order. These two map between what is
   on screen and what the pack says, so a clustered answer key cannot be guessed. */
function qOptions(q, i){
  var qq = q.chk.questions[i], perm = q.opts && q.opts[i];
  if(!qq.options) return [];
  if(!perm) return qq.options.slice();
  return perm.map(function(k){ return qq.options[k]; });
}
function qCorrect(q, i){
  var qq = q.chk.questions[i], perm = q.opts && q.opts[i];
  if(!perm) return qq.answerIndex;
  return perm.indexOf(qq.answerIndex);
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
      if(q.answers[i]===qCorrect(q,i)) score++;
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
  var gg = GRID.filter(function(g){return g.day===q.day;})[0];
  var course = NAMES[q.slot==="fast" ? gg.fast : gg.deep];

  var bar = el("div","deckbar");
  var rail = el("div","rail");
  for(var i=0;i<n;i++){
    (function(j){
      var cls = answered(q,j) ? "done" : "";
      if(j===q.idx) cls += " at";
      var b = el("button", cls, "");
      b.title = "Question "+(j+1);
      b.onclick = function(){ q.idx = j; quizSave(); render(); };
      rail.appendChild(b);
    })(i);
  }
  bar.appendChild(rail);
  var meta = el("div","deckmeta");
  var countSpan = el("span",null, q.day + " · " + course + " · " + (n - unanswered(q).length) + "/" + n);
  meta.appendChild(countSpan);
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

  /* Typing in a short answer must not re-render — that would steal the caret
     mid-word. But the progress count and the submit gate both depend on how many
     are still blank, so they get refreshed on their own. Assigned further down,
     once the footer exists; called from the textarea handler. */
  var refreshGate = function(){};

  var qq = q.chk.questions[q.idx];
  var card = el("div","qcard");
  card.appendChild(el("div","qeyebrow","Question "+(q.idx+1)+" of "+n));
  card.appendChild(el("div","qt", esc(qq.q)));

  if(qq.type === "mcq" && qq.options){
    var opts = el("div","opts");
    qOptions(q, q.idx).forEach(function(opt, oi){
      var on = q.answers[q.idx] === oi;
      var b = el("button","opt"+(on?" on":""));
      b.innerHTML = '<span class="k">'+LETTERS[oi]+'</span><span>'+esc(opt)+'</span>';
      b.onclick = function(){
        q.answers[q.idx] = oi;
        if(q.idx < n-1) q.idx++;
        quizSave(); render(); window.scrollTo({top:0,behavior:"smooth"});
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
      quizSave();
      refreshGate();
    };
    card.appendChild(ta);
    card.appendChild(el("p","muted","<br>You mark this one yourself after you submit — the model answer is waiting."));
  }

  var foot = el("div","deckfoot");
  if(q.idx > 0) foot.appendChild(btn("act ghost","Back", function(){ q.idx--; quizSave(); render(); window.scrollTo(0,0); }));
  foot.appendChild(el("div","spacer"));

  var gate = el("div","gate");
  foot.appendChild(gate);
  refreshGate = function(){
    var left = unanswered(q);
    countSpan.textContent = q.day + " · " + course + " · " + (n - left.length) + "/" + n;
    gate.innerHTML = "";
    if(!left.length){
      gate.appendChild(btn("act big","Submit all "+n, function(){
        q.submitted = true; q.idx = 0; quizSave(); render(); window.scrollTo(0,0);
      }));
    } else if(q.idx < n-1){
      gate.appendChild(btn("act","Next", function(){ q.idx++; quizSave(); render(); window.scrollTo(0,0); }));
    } else {
      gate.appendChild(btn("act", left.length+" still blank", function(){
        q.idx = left[0]; toast("Question "+(left[0]+1)+" is blank"); quizSave(); render(); window.scrollTo(0,0);
      }));
    }
  };
  refreshGate();
  card.appendChild(foot);
  root.appendChild(card);

  var out = el("div","row");
  out.appendChild(btn("act ghost","Save and stop", function(){
    quizSave(); QUIZ=null; TAB="home"; toast("Kept — pick up where you left off"); render();
  }));
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
    r.wrong.forEach(function(cn){
      var li = el("li");
      var a = el("button","linkish", esc(cn));
      a.onclick = function(){ openBuddy("concept", cn); };
      li.appendChild(a);
      li.style.marginBottom = "5px";
      ul.appendChild(li);
    });
    wc.appendChild(ul);
    root.appendChild(wc);
    wc.appendChild(el("p","muted","<br>Tap any of them for the reasoning and somewhere to watch it explained."));
  }

  q.chk.questions.forEach(function(qq, i){
    var isMcq = qq.type==="mcq" && qq.options;
    var right = isMcq ? qCorrect(q, i) : -1;
    var missed = isMcq ? (q.answers[i] !== right) : (q.marks[i] === false);
    var pending = !isMcq && q.marks[i] === undefined;
    var box = el("div","rev "+(pending ? "" : (missed ? "miss" : "hit")));
    if(!pending) box.appendChild(el("span","tag "+(missed?"miss":"hit"), missed ? "Missed" : "Got it"));
    box.appendChild(el("div","rq", (i+1)+". "+esc(qq.q)));

    if(isMcq){
      var opts = el("div","opts");
      qOptions(q, i).forEach(function(opt, oi){
        var cls = "opt";
        if(oi === right) cls += " right";
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
      var y = btn(q.marks[i]===true ? "act" : "act ghost","I got this", function(){ q.marks[i]=true; quizSave(); render(); });
      var nn = btn(q.marks[i]===false ? "act" : "act ghost","I missed it", function(){ q.marks[i]=false; quizSave(); render(); });
      sm.appendChild(y); sm.appendChild(nn);
      box.appendChild(sm);
    }
    root.appendChild(box);
  });

  var foot = el("div","row");
  var sv = btn("act big","Save "+r.score+"/"+r.max, function(){
    var g2 = grade(q);
    if(g2.unmarked){ toast("Mark your written answers first"); return; }
    S.scores[key(ME, wk(), q.day, q.slot)] = {score:g2.score, max:g2.max, wrong:g2.wrong, at:new Date().toISOString()};
    quizClear(wk(), q.day, q.slot);
    QUIZ=null; TAB="home"; save("Logged "+g2.score+"/"+g2.max);
  });
  if(r.unmarked) sv.setAttribute("disabled","");
  foot.appendChild(sv);
  foot.appendChild(btn("act ghost","Retake", function(){
    quizClear(wk(), q.day, q.slot);
    startQuiz(q.day, q.slot);
  }));
  root.appendChild(foot);
}

function viewManual(root){
  var m = MANUAL;
  if(!m){ TAB="tonight"; render(); return; }
  var g = GRID.filter(function(x){return x.day===m.day;})[0];
  var c = el("div","card deepc");
  c.appendChild(el("div","lbl", m.day+" · "+NAMES[m.slot==="fast"?g.fast:g.deep]+" · log a score"));
  c.appendChild(el("h2",null,"How did it go?"));
  c.appendChild(el("p","muted","Fallback for a session with no generated check. Normally you'd answer the questions here and be graded."));

  var maxS = 12;
  var ck = checkFor(weekData(wk()), m.day, m.slot);
  if(ck && ck.maxScore) maxS = ck.maxScore;
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
    S.scores[key(ME, wk(), m.day, m.slot)] = {
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
    brand.appendChild(el("div","spacer"));
    var st = streak();
    if(st > 0) brand.appendChild(el("span","chip flame", FLAME+"<span>"+st+"</span>"));
    if(aheadOfCalendar()) brand.appendChild(el("span","chip","ahead"));
    if(SYNCING) brand.appendChild(el("span","chip","saving…"));
    else if(STORAGE === "none" || STORAGE === "error") brand.appendChild(el("span","chip","local"));

    var sel = document.createElement("select");
    sel.className = "wksel";
    sel.title = "Which week you are looking at";
    var cur = wk(), L = loadedWeeks();
    for(var i=1;i<=12;i++){
      var o=document.createElement("option"); o.value=i;
      o.textContent = "Week "+i + (L.indexOf(i)>=0 ? "" : " –") + (weekInfo().n===i ? "  ·  now" : "");
      if(i===cur) o.selected=true;
      sel.appendChild(o);
    }
    sel.onchange=function(){
      VIEWWEEK=parseInt(sel.value,10); QUIZ=null; MANUAL=null; ensureWeek(VIEWWEEK); syncUrl(); render();
    };
    brand.appendChild(sel);

    /* A cog, not a name. The name here used to sign you out on one tap, which is far
       too easy to do by accident when it sits beside the week selector. Switching
       people now lives behind Settings, and Home says who you are instead. */
    var cog = btn("chip cog"+(TAB==="data"?" on":""), COG, function(){
      QUIZ=null; MANUAL=null; TAB="data"; syncUrl(); render(); window.scrollTo(0,0);
    });
    cog.title = "Settings";
    cog.setAttribute("aria-label","Settings");
    brand.appendChild(cog);
  } else {
    brand.appendChild(el("div","spacer"));
    brand.appendChild(el("span","chip", wi.label + (wi.n>0&&wi.n<13 ? " of 12" : "")));
  }
  bin.appendChild(brand);

  if(GATE === "open" && ME && findPerson(ME)){
    var tabs = el("div","tabs");
    [["home","Home"],["tonight","Tonight"],["sunday","Sunday"],["progress","Stats"],["exam","Exam"]].forEach(function(t){
      tabs.appendChild(btn(TAB===t[0]?"on":"", t[1], function(){
        QUIZ=null; MANUAL=null; if(t[0]!=="exam"){ EXVIEW=null; EXQUIZ=null; } TAB=t[0]; syncUrl(); render(); window.scrollTo(0,0);
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
  if(TAB==="home") viewHome(wrap);
  else if(TAB==="tonight") viewTonight(wrap);
  else if(TAB==="week") viewWeek(wrap);
  else if(TAB==="sunday") viewSunday(wrap);
  else if(TAB==="progress") viewProgress(wrap);
  else if(TAB==="exam") viewExam(wrap);
  else if(TAB==="data") viewData(wrap);
  else if(TAB==="quiz") viewQuiz(wrap);
  else if(TAB==="manual") viewManual(wrap);
  root.appendChild(wrap);

  if(TAB !== "quiz") buddyButton(root);
  if(BUDDY) buddyPanel(root);
  if(TOAST) root.appendChild(el("div","toast", esc(TOAST)));
}

/* ---------- boot ---------- */
/* ---------- the address bar ----------
   Reloading used to drop you back on Home in the current calendar week, which is the
   wrong place whenever you were reading week 9 or halfway down the Exam tab. The tab
   and the week now live in the query string, so a reload, a bookmark and the back
   button all land where you were.

   Transient states are deliberately NOT in the url: a quiz in progress restores from
   its own saved state, and a shared link should never drop someone into a half-finished
   paper. */
var TABS_URL = {home:1, tonight:1, sunday:1, progress:1, exam:1, data:1, week:1};

function readUrl(){
  var q;
  try{ q = new URLSearchParams(window.location.search); }catch(e){ return; }
  var t = q.get("tab");
  if(t && TABS_URL[t]) TAB = t;
  var w = parseInt(q.get("week"), 10);
  if(w >= 1 && w <= 12) VIEWWEEK = w;
  var c = q.get("course");
  if(c && /^[A-Z]{3}_\d{3}$/.test(c) && TAB === "exam") EXVIEW = {course:c, mode:"guide"};
}

function syncUrl(replace){
  try{
    var q = new URLSearchParams();
    var t = (TAB === "quiz" || TAB === "manual") ? "tonight" : TAB;
    if(TABS_URL[t] && t !== "home") q.set("tab", t);
    if(VIEWWEEK) q.set("week", String(VIEWWEEK));
    var s2 = q.toString();
    var next = window.location.pathname + (s2 ? "?" + s2 : "");
    if(next === window.location.pathname + window.location.search) return;
    window.history[replace ? "replaceState" : "pushState"]({tab:t, week:VIEWWEEK}, "", next);
  }catch(e){ /* an old browser just loses the niceness, not the app */ }
}

window.addEventListener("popstate", function(){
  QUIZ = null; MANUAL = null; BUDDY = null;
  readUrl();
  if(VIEWWEEK) ensureWeek(VIEWWEEK);
  render();
});

function boot(){
  INDEX = {semesterStart:"2026-09-07", weeks:[1,2,3,4,5,6,7,8,9,10,11,12].map(function(n){ return {week:n}; })};
  readUrl();
  ensureWeek(wk());
  syncUrl(true);
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
