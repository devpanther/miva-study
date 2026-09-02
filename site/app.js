
(function(){
"use strict";

var BOARD = "https://claude.ai/code/artifact/8d0bff19-5549-4d2d-953c-b3c7a827420e";

/* The descriptions are what the LMS actually holds, not what the plan assumed.
   MTH 102 has no lecture video from week 8, PHY 102 has none in six weeks, and
   CSC 106 carries close to an hour of lecture in weeks 3 to 8 — which is not the
   "you know this already" course the original grid described. */
/* The week.

   Two hours a night, Monday to Friday. Saturday is review and catch-up, Sunday is the
   weekend class. Classes do not run at the weekend any more.

   `fastFull` marks a second hour that is a full working hour rather than an hour of
   video at 1.5-1.75x. Two sessions carry it, and both for the same reason: credit
   units. COS 102 and CSC 106 are three units each, the heaviest on the timetable, and
   both are built rather than watched.

   CSC 106 is the one that had been quietly starved. Its Tuesday hour was booked for
   sixty minutes and averaged twenty minutes of video, so on paper it had an hour and in
   practice it had a fifth of the attention per credit unit that MTH 102 had. Nothing
   was taken from anywhere to fix it; the hour was already there and half of it was
   going unused. */
var GRID = [
  {day:"Mon", deep:"MTH_102", dn:"New topic",          fast:"GST_112", fn:"Whole week + forum post"},
  {day:"Tue", deep:"PHY_102", dn:"New topic",          fast:"CSC_106", fn:"Watch it, then build it", fastFull:true},
  {day:"Wed", deep:"COS_102", dn:"Theory + algorithm", fast:"GST_122", fn:"Whole week + forum post"},
  {day:"Thu", deep:"MTH_102", dn:"Problems only",      fast:"PHY_108", fn:"Practical + report now"},
  {day:"Fri", deep:"PHY_102", dn:"Derivations",        fast:"COS_102", fn:"Write the code", fastFull:true},
  {day:"Sat", deep:"REVIEW",  dn:"The week's scores",  fast:"CATCHUP", fn:"Last week's questions"}
];
/* REVIEW and CATCHUP are places in the week, not courses. Nothing that counts a course
   may pick them up. */
function isCourse(c){ return !!c && c !== "REVIEW" && c !== "CATCHUP"; }
/* How many graded first hours a week actually has. Was hardcoded to six in three
   places, which stopped being true the moment Saturday lost its class. */
function deepSlots(){ return GRID.filter(function(d){ return isCourse(d.deep); }).length; }
/* Credit units, straight off the course list. These decide how much a grade is worth,
   so they decide how much a night is worth, and the app says so out loud on every card.
   Without this the schedule gets built on which course FEELS hard, which is how a
   3-unit course ended up with the least time on the timetable. */
var UNITS = {
  COS_102:3, CSC_106:3,
  MTH_102:2, PHY_102:2, GST_112:2, GST_122:2,
  PHY_108:1, MIVA_COS_111:1
};
function unitsOf(c){ return UNITS[c] || 0; }

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
/* Before week 1 there is a runway, and it is not dead time — everything on this list
   buys back an evening later in the semester. Each line ticks off and the ticks sync
   like scores do, so the runway is a thing you finish rather than a thing you read. */
var RUNWAY = [
  {id:"tests", label:"Take the 8 pre-semester tests",
   detail:"Ungraded. They show where you are weak before you spend an hour anywhere.",
   per:["MTH_102","PHY_102","COS_102","PHY_108","GST_112","GST_122","CSC_106","MIVA_COS_111"],
   /* Each course chip opens that course on the LMS, where its pre-semester test sits. */
   linkFor:function(c){ return lmsCourseLink(c); }},
  /* This used to read "Three activities, and then that course never asks for another
     evening", which was the LMS progress meter mistaken for the work. It counts three
     pages; the actual requirement is a certification earned on someone else's platform.
     It has its own tab now, and the runway just points at it. */
  {id:"cos111", label:"Start the first MIVA-COS 111 certification",
   detail:"Not three clicks. A real certification, on AWS or Google Cloud or Cisco, and it takes hours. Starting now is the whole point of the runway.",
   links:function(){ return [{label:"Open the Certs tab", href:"?tab=certs"},
                             {label:"The course \u2197", href: CERTLINKS.course}]; }},
  {id:"csc106", label:"Speed-run CSC 106 weeks 1\u20133 at 1.75\u00d7",
   detail:"Three weeks ahead on the lightest course is three Tuesdays of slack.",
   links:function(){
     return [1,2,3].map(function(w){ return {label:"Week " + w + " \u2197", href: lmsWeekLink("CSC_106", w)}; });
   }},
  {id:"skim", label:"Skim the study-guide PDFs for PHY 102 and MTH 102",
   detail:"Not to learn them. To know what is coming, so week 1 is not a cold start.",
   links:function(){
     return ["PHY_102","MTH_102"].map(function(c){
       var info = lmsFor(c, 1), pdf = info && info.ids && info.ids.pdf;
       return {label:(NAMES[c] || c) + " week 1 " + (pdf ? "PDF" : "on the LMS") + " \u2197",
               href: lmsPdfLink(c, 1)};
     });
   }}
];
/* ---------- MIVA-COS 111, the certification course ----------

   The app used to call this "three activities, and then that course never asks for
   another evening", which came from reading the LMS progress meter. That meter counts
   three PAGES: the orientation, the recommendations, the handbook. Ticking all three
   completes nothing. The work is a real certification earned on someone else's
   platform, and none of it is tracked there.

   Three things make it worth its own tab rather than a runway line:

     It is a grade lever, not a pass. The handbook's grading page is two lines long:
     one certification is a "Pass grade (C)", additional ones are "Grade improvements
     (B or A)". No number-to-letter table exists past that, so on a one-unit course the
     count is the grade and more is simply better.

     The submission is one shot. "You have only one opportunity to submit. Once
     submitted, your response cannot be edited, modified, or replaced." Upload after one
     certificate and a second one earned later cannot be added.

     It spans both semesters. You are told to work at your own pace across the session
     and submit only once you are finished, which means the right move is usually not to
     submit this semester at all.

   So this is a term-long list, not runway work that disappears in September. */

var CERTBASE = "https://lms.miva.university";
var CERTLINKS = {
  course:     CERTBASE + "/course/view.php?id=783",
  orientation:CERTBASE + "/mod/page/view.php?id=82435",
  list:       CERTBASE + "/mod/page/view.php?id=82458",
  handbook:   CERTBASE + "/mod/url/view.php?id=101236",
  walkthrough:CERTBASE + "/mod/url/view.php?id=101237",
  upload:     CERTBASE + "/mod/url/view.php?id=99034"
};

/* The list MIVA recommends for BSc Computer Science. The hrefs are the platforms
   themselves, because that is all the LMS page links to: you find the named course
   once you are in. */
var CERTS = [
  {id:"gcloud", name:"Digital Transformation with Google Cloud",
   vendor:"Google Cloud Skills Boost", note:"Intro GCP labs",
   href:"https://www.cloudskillsboost.google/"},
  {id:"aws", name:"Cloud Foundations",
   vendor:"AWS Academy", note:"Fundamentals",
   href:"https://www.awsacademy.com/login"},
  {id:"cisco", name:"Networking Basics",
   vendor:"Cisco NetAcad", note:"",
   href:"https://www.netacad.com/catalogs/learn"}
];
/* Anything outside the recommended list still counts, and still lifts the grade. The
   handbook's FAQ: "Yes, as long as they're from approved vendor partners and you
   provide evidence before grading. Discuss with your instructor first." Two slots,
   because the point is to be able to record them, not to plan them. */
var CERTEXTRA = [
  {id:"extra1", name:"Another certification", vendor:"Approved vendor, cleared with the lecturer", note:"", href:null},
  {id:"extra2", name:"Another certification", vendor:"Approved vendor, cleared with the lecturer", note:"", href:null}
];

function certKey(id){ return ME + "|cert|" + id; }
function certDone(id){ var v = S.scores[certKey(id)]; return !!(v && v.done); }
function certSet(id, on){
  if(on) S.scores[certKey(id)] = {done:true, on: ymd(today())};
  else delete S.scores[certKey(id)];
}
function certOn(id){ var v = S.scores[certKey(id)]; return (v && v.on) || ""; }
function certCount(){
  var n = 0;
  CERTS.concat(CERTEXTRA).forEach(function(c){ if(certDone(c.id)) n++; });
  return n;
}
/* What the count buys you.
   These are the handbook's own words, not a rule we worked out. Page 5, "Requirements
   and Grading", says exactly two things:

     "Minimum Completion (1 certification): Pass grade (C)"
     "Additional Certifications: Grade improvements (B or A)"

   and the FAQ on page 20 repeats it: "Completing minimum requirements earns a pass
   grade. Additional certifications can improve your grade up to an A."

   Nowhere does it say two is a B and three is an A. So neither do we. Past the first
   one the honest answer is "B or A, and your lecturer decides", and the tab says that
   rather than inventing a ladder. */
function certGrade(n){
  /* Short labels: this sits in a stat box a third of a phone wide, and "above the
     minimum" wrapped to three lines there. The sentence underneath carries the detail. */
  if(n === 0) return {label:"none yet", tone:"b",
    say:"One certification is the minimum. Without one, this course is not passed."};
  if(n === 1) return {label:"C", tone:"o",
    say:"One is a pass. The handbook grades it C."};
  return {label:"B or A", tone:"g",
    say:"Past one, the handbook says extra certifications lift the grade to a B or an A. It never says how many make each, so more is better and the lecturer decides."};
}

var CERTSYNC = null;
function certSave(){
  clearTimeout(CERTSYNC);
  CERTSYNC = setTimeout(function(){ CERTSYNC = null; push(false); }, 900);
  mirror();
}

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
  "<b>Keep the weekend class regardless.</b> It is the last thing to drop, not the first. It costs no preparation, and after a broken week it is the only hour that tells you what you actually retained."
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
/* null = let the calendar and your progress decide; otherwise -1 (weekend) or 0-5. */
var VIEWDAY = null;
var WEEKS = {};          /* week number -> pack, fetched on demand */
var LOADING = {};        /* week number -> true while in flight */
var INDEX = null;
var STORAGE = "loading"; /* loading | blob | none | error */
var SYNCING = false;
var LS = "miva_state_v3";
var GATE = "checking";   /* checking | locked | open | setup */
var PWBUSY = false, PWERR = null;
var CONFIRMSWITCH = false;
var LMS = null;          /* what the LMS holds, by course and week */
var SEL = null;          /* {text, rect} while something is highlighted */
var GUIDEVIEW = null;    /* {course, week, from} while reading a week's study guide */
var SESSION = null;      /* {day, week, from} while looking at one evening */

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
/* msg === false means save without saying so.
   A drill writes on every sitting and a goal writes on every tap of + or −, and a toast
   for each one turns the bottom of the screen into a ticker. Failures still speak up:
   silence is only ever the success case. */
function push(msg){
  mirror();
  var quiet = msg === false;
  if(STORAGE !== "blob"){ if(!quiet) toast(msg ? msg + " · this device only" : "Saved on this device"); return; }
  var p = findPerson(ME);
  if(!p){ if(!quiet) toast(msg||"Saved"); return; }
  SYNCING = true; render();
  fetch("/api/state", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({id:p.id, name:p.name, joinedAt:p.joinedAt, scores:myScores()})
  }).then(function(r){ return r.json(); }).then(function(d){
    SYNCING = false;
    if(d && d.ok){ if(!quiet) toast(msg || "Saved for both of you"); }
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
/* ---------- which day you are looking at ----------
   Two different questions that used to share one answer.

   "What day is it" is a calendar fact: todayIdx(). "Which day of this week am I
   reading" is a place in the app, and the two only coincide in the week the calendar
   is actually in. Opening week 7 on a Thursday in week 3 used to land on Thursday of
   week 7 — a night that has not happened, chosen for no reason except that today
   happens to be a Thursday.

   So: in the current week, the day is today. In any other week it is the first evening
   you have not logged, and once a week is complete it is the weekend class that closes
   it. Either way you can then walk the week with the arrows, and the choice sticks
   until you change week. */
var DAYORDER = [0,1,2,3,4,5,-1];   /* Mon…Sat, then the weekend class */
var FULLDAY = {Mon:"Monday", Tue:"Tuesday", Wed:"Wednesday", Thu:"Thursday",
               Fri:"Friday", Sat:"Saturday"};

function todayIdx(){ var d = today().getDay(); return d===0 ? -1 : d-1; }

function autoDay(w){
  if(!ME || !w) return todayIdx();
  if(weekInfo().n === w) return todayIdx();
  for(var i = 0; i < GRID.length; i++){
    if(!getScore(ME, w, GRID[i].day)) return i;
  }
  return -1;                       /* the week is done; the weekend closes it */
}
function dayIdx(){
  if(VIEWDAY === 0 || VIEWDAY) return VIEWDAY;   /* 0 is a real day, not "unset" */
  if(VIEWDAY === -1) return -1;
  return autoDay(wk());
}
function dayName(i){ return i === -1 ? "Weekend class" : FULLDAY[GRID[i].day]; }
/* Walking off either end of a week rolls into the next or previous one, so the arrows
   are a continuous line through the term rather than seven dead ends. */
function stepDay(delta){
  var here = dayIdx(), at = DAYORDER.indexOf(here);
  if(at < 0) at = 0;
  var next = at + delta, w = wk();
  if(next < 0){
    if(onRunway() || w <= 1) return;
    VIEWWEEK = w - 1; ensureWeek(VIEWWEEK); VIEWDAY = DAYORDER[DAYORDER.length - 1];
  } else if(next >= DAYORDER.length){
    if(onRunway() || w >= 12) return;
    VIEWWEEK = w + 1; ensureWeek(VIEWWEEK); VIEWDAY = DAYORDER[0];
  } else {
    VIEWDAY = DAYORDER[next];
  }
  QUIZ = null; MANUAL = null;
  syncUrl(); render();
}
function canStep(delta){
  var at = DAYORDER.indexOf(dayIdx());
  if(at < 0) at = 0;
  var next = at + delta;
  if(next >= 0 && next < DAYORDER.length) return true;
  if(onRunway()) return false;
  return delta < 0 ? wk() > 1 : wk() < 12;
}
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
    if(deepDone(ME, w) < deepSlots()) return w;
  }
  return 12;
}
function wk(){
  if(VIEWWEEK) return VIEWWEEK;
  return defaultWeek();
}
/* The runway is a place you can be, not just a date that has not arrived. VIEWWEEK 0
   means you chose it; null means nobody has chosen anything and the calendar decides. */
function onRunway(){
  if(VIEWWEEK === 0) return true;
  return (VIEWWEEK === null || VIEWWEEK === undefined) && weekInfo().n === 0;
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
    if(isCourse(d.deep)) out.push({day:d.day, slot:"deep", course:d.deep});
    if(isCourse(d.fast) && checkFor(wd, d.day, "fast"))
      out.push({day:d.day, slot:"fast", course:d.fast});
  });
  return out;
}
/* ---------- installing it ----------
   The whole point of this thing is that it opens in one tap at 21:00, which means it
   belongs on a home screen rather than in a browser tab behind eleven others.

   Android hands us a real prompt, so we show a button that fires it. iOS never has, and
   never will, so there we show the actual steps — which are worth spelling out because
   "Add to Home Screen" is buried in the share sheet and is only in Safari, not Chrome. */
var INSTALL = null;      /* Android's deferred prompt, when the browser offers one */
var INSTALL_LS = "miva_install_v1";

window.addEventListener("beforeinstallprompt", function(e){
  e.preventDefault();
  INSTALL = e;
  if(TAB === "home" || TAB === "settings") render();
});
window.addEventListener("appinstalled", function(){
  INSTALL = null;
  try{ localStorage.setItem(INSTALL_LS, "installed"); }catch(e){}
  toast("Installed");
  render();
});

function isInstalled(){
  try{
    if(window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) return true;
    if(window.matchMedia && window.matchMedia("(display-mode: minimal-ui)").matches) return true;
  }catch(e){}
  return !!window.navigator.standalone;   /* iOS */
}
function isIOS(){
  var ua = navigator.userAgent || "";
  if(/iPad|iPhone|iPod/.test(ua)) return true;
  /* iPadOS reports itself as a Mac; the touch points give it away. */
  return /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
}
function isSafari(){
  var ua = navigator.userAgent || "";
  return /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|Chrome|Chromium/.test(ua);
}
function installDismissed(){
  try{ return !!localStorage.getItem(INSTALL_LS); }catch(e){ return false; }
}
function dismissInstall(){
  try{ localStorage.setItem(INSTALL_LS, "dismissed"); }catch(e){}
  render();
}

/* The card on Home. Offered once; after that it lives in Settings and nowhere else. */
function installCard(root, always){
  if(isInstalled()) return;
  if(!always && installDismissed()) return;
  if(!always && !INSTALL && !isIOS()) return;   /* a desktop browser with no prompt: leave it alone */

  var c = el("div","card instc");
  c.appendChild(el("div","lbl","Put it on your home screen"));
  c.appendChild(el("h2",null,"One tap at nine o'clock"));

  if(INSTALL){
    c.appendChild(el("p","muted","It installs as a proper app: its own icon, no browser bars, and the shell still opens when the signal does not."));
    var r = el("div","row");
    r.appendChild(btn("act big","Install", function(){
      var p2 = INSTALL; INSTALL = null;
      p2.prompt();
      p2.userChoice.then(function(res){
        if(res && res.outcome === "accepted"){ try{ localStorage.setItem(INSTALL_LS,"installed"); }catch(e){} }
        else { INSTALL = p2; }
        render();
      });
    }));
    if(!always) r.appendChild(btn("act ghost","Not now", dismissInstall));
    c.appendChild(r);
  }
  else if(isIOS() && isSafari()){
    c.appendChild(el("p","muted","Safari does not offer a button for this, so it is three taps by hand:"));
    var ol = el("ol","insteps");
    ol.appendChild(el("li",null,"Tap the <b>Share</b> button at the bottom of Safari — the square with an arrow out of it."));
    ol.appendChild(el("li",null,"Scroll down and tap <b>Add to Home Screen</b>."));
    ol.appendChild(el("li",null,"Tap <b>Add</b>. It appears on your home screen as <b>Study</b>."));
    c.appendChild(ol);
    if(!always){
      var r2 = el("div","row");
      r2.appendChild(btn("act ghost","Done, hide this", dismissInstall));
      c.appendChild(r2);
    }
  }
  else if(isIOS()){
    c.appendChild(el("p","muted","On an iPhone only Safari can add a page to the home screen — Chrome and the rest cannot. Open this same address in Safari and the steps are under the Share button."));
    if(!always){
      var r3 = el("div","row");
      r3.appendChild(btn("act ghost","Not now", dismissInstall));
      c.appendChild(r3);
    }
  }
  else {
    c.appendChild(el("p","muted","Your browser has not offered to install it yet. In Chrome it is the icon at the right-hand end of the address bar, or Install from the ⋮ menu."));
  }
  root.appendChild(c);
}

/* ---------- the runway ----------
   Ticks live in the same store the scores do, so they follow you between devices and
   between the two of you. They carry no "at" and no "score", which keeps them out of
   the streak and out of the mark total — a runway tick is not an evening's work. */
function rwKey(id){ return ME + "|runway|" + id; }
function rwDone(id){ var v = S.scores[rwKey(id)]; return !!(v && v.done); }
function rwSet(id, on){
  if(on) S.scores[rwKey(id)] = {done:true, on: ymd(today())};
  else delete S.scores[rwKey(id)];
}
/* Ticking runs down a list of twelve, so syncing on every tap would toast twelve times
   and re-render under your thumb. Paint immediately, save once you stop. */
var RWSYNC = null;
function rwSave(){
  clearTimeout(RWSYNC);
  RWSYNC = setTimeout(function(){ RWSYNC = null; push("Runway saved"); }, 900);
  mirror();
}
function rwTally(){
  var done = 0, total = 0;
  RUNWAY.forEach(function(t){
    if(t.per){ total += t.per.length; t.per.forEach(function(c){ if(rwDone(t.id+":"+c)) done++; }); }
    else { total += 1; if(rwDone(t.id)) done++; }
  });
  return {done:done, total:total};
}

/* ---------- finishing a course for the week ----------
   A course is done for the week when every session it owns that week has been scored.
   MTH, PHY and COS own two evenings each; the fast courses own one. */
function courseSlots(w){
  var wd = weekData(w), out = {};
  GRID.forEach(function(d){
    (out[d.deep] = out[d.deep] || []).push({day:d.day, slot:"deep"});
    if(d.fast !== "REVIEW" && d.fast !== "CATCHUP" && checkFor(wd, d.day, "fast"))
      (out[d.fast] = out[d.fast] || []).push({day:d.day, slot:"fast"});
  });
  return out;
}
function courseTally(person, w, course){
  var slots = (courseSlots(w)[course] || []), got = 0, max = 0, done = 0;
  slots.forEach(function(x){
    var sc = getScore(person, w, x.day, x.slot);
    if(sc){ got += sc.score; max += sc.max; done++; }
  });
  return {done:done, of:slots.length, got:got, max:max, complete: slots.length > 0 && done === slots.length};
}
/* Courses this person has just finished for the week and not yet been congratulated on. */
function newlyFinished(w){
  if(!ME) return [];
  var out = [];
  Object.keys(courseSlots(w)).forEach(function(c){
    if(!courseTally(ME, w, c).complete) return;
    if(S.scores[ME + "|party|w" + w + "|" + c]) return;
    out.push(c);
  });
  return out;
}
function markCelebrated(w, course){ S.scores[ME + "|party|w" + w + "|" + course] = {done:true}; }

function scoreClass(s){
  if(!s) return "";
  var r = s.score / s.max;
  return r >= 0.83 ? "g" : (r >= 0.5 ? "o" : "b");
}
/* One person's map holds several kinds of thing under one prefix, and the study streak
   and the mark total must only ever see one of them. A drill has an `at` too, and
   before this guard existed a morning drill would have quietly kept the evening streak
   alive on a night you never opened a check. */
function isSession(k, pre){
  if(k.indexOf(pre) !== 0) return false;
  var rest = k.slice(pre.length);
  return /^w\d{1,2}\|[A-Za-z]{3}(\|f)?$/.test(rest);
}
function streak(){
  if(!ME) return 0;
  var days = {}, pre = ME+"|";
  Object.keys(S.scores).forEach(function(k){
    if(!isSession(k, pre)) return;
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
    if(isSession(k, pre)) t += (S.scores[k].score||0);
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
  GRID.forEach(function(d){ if(isCourse(d.deep) && getScore(person, w, d.day)) n++; });
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
function sundayTopics(){ return sundayTopicsFor(wk()); }
function sundayTopicsFor(w){
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
/* ---------- what you are shaky on ----------
   Every score carries the concepts behind the questions that were missed, so twelve
   weeks of checks is already a map of what has not landed. This reads that map.

   It is deliberately one-sided: a course you are getting right is not on it. The hour
   is short and the point of it is the gaps, so anything already solid is folded into a
   single line at the bottom and otherwise left alone. */
var SOLID = 0.8;          /* at or above this, a course is not the problem */

function masteryFor(person){
  var by = {};
  var touch = function(c){
    if(!by[c]) by[c] = {course:c, got:0, max:0, done:0, of:0, concepts:{}};
    return by[c];
  };
  /* Seed from the timetable, not from the weeks that happen to be loaded. A course you
     have never sat still has to appear — "not sat yet" is a thing worth being told. */
  GRID.forEach(function(d){
    if(isCourse(d.deep)) touch(d.deep);
    if(isCourse(d.fast)) touch(d.fast);
  });
  for(var w = 1; w <= 12; w++){
    slotsFor(w).forEach(function(x){
      if(!isCourse(x.course)) return;
      var m = touch(x.course);
      m.of++;
      var sc = getScore(person, w, x.day, x.slot);
      if(!sc) return;
      m.done++; m.got += sc.score; m.max += sc.max;
      (sc.wrong || []).forEach(function(cn){
        var k = String(cn).trim();
        if(!k) return;
        if(!m.concepts[k]) m.concepts[k] = {name:k, n:0, weeks:[], last:w, day:x.day, slot:x.slot};
        var e = m.concepts[k];
        e.n++; e.last = w; e.day = x.day; e.slot = x.slot;
        if(e.weeks.indexOf(w) < 0) e.weeks.push(w);
      });
    });
  }
  return Object.keys(by).map(function(c){
    var m = by[c];
    m.ratio = m.max ? m.got / m.max : null;             /* null = never sat one */
    m.missed = Object.keys(m.concepts).map(function(k){ return m.concepts[k]; })
      .sort(function(a, b){ return (b.n - a.n) || (b.last - a.last); });
    return m;
  }).sort(function(a, b){
    if(a.ratio === null) return 1;
    if(b.ratio === null) return -1;
    return a.ratio - b.ratio;
  });
}

/* Both of you, because the hour is shared. A concept either of you missed is worth the
   room; who missed it decides who is teaching and who is listening. */
function weakAreas(){
  var people = S.people.length ? S.people : (ME ? [{id:ME, name:meName()}] : []);
  var per = people.map(function(p){ return {person:p, mastery:masteryFor(p.id)}; });
  var merged = {};
  per.forEach(function(row){
    row.mastery.forEach(function(m){
      if(!merged[m.course]) merged[m.course] = {course:m.course, who:[], missed:{}, done:0, of:m.of};
      var g = merged[m.course];
      g.done += m.done;
      g.who.push({name:row.person.name, id:row.person.id, ratio:m.ratio, done:m.done, of:m.of});
      m.missed.forEach(function(c){
        var e = g.missed[c.name] || (g.missed[c.name] = {name:c.name, n:0, last:c.last, day:c.day, slot:c.slot, by:[]});
        e.n += c.n;
        if(c.last > e.last){ e.last = c.last; e.day = c.day; e.slot = c.slot; }
        if(e.by.indexOf(row.person.name) < 0) e.by.push(row.person.name);
      });
    });
  });
  return Object.keys(merged).map(function(c){
    var g = merged[c];
    var rated = g.who.filter(function(x){ return x.ratio !== null; });
    g.ratio = rated.length ? rated.reduce(function(a, x){ return a + x.ratio; }, 0) / rated.length : null;
    g.list = Object.keys(g.missed).map(function(k){ return g.missed[k]; })
      .sort(function(a, b){ return (b.n - a.n) || (b.last - a.last); });
    /* Weak means: scoring below the bar, or missing the same thing more than once. */
    g.weak = (g.ratio !== null && g.ratio < SOLID) || g.list.some(function(x){ return x.n > 1; });
    return g;
  }).sort(function(a, b){
    if(a.ratio === null) return 1;
    if(b.ratio === null) return -1;
    return a.ratio - b.ratio;
  });
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

/* Code in a question should look like code.

   Both banks were written in markdown, so a C or JavaScript question arrives with
   backticks in it: `n` for a variable, and a fenced block for a listing. Escaping and
   printing that verbatim puts literal backticks on screen and runs a four-line program
   into one unreadable line — which for a "what does this print?" question is not a
   cosmetic problem, it is the question becoming unanswerable.

   Deliberately not a markdown parser. Two constructs, nothing else: everything is
   escaped first, so no text from a pack can put markup on the page. */
/* Break an explanation into paragraphs.

   Every `why` in the bank is written to the same shape: the reason the right answer is
   right, then the reason the tempting one is not. Rendered as one block that is 250 to
   390 characters of unbroken prose on a phone — a grey wall you skim instead of read,
   which for the one part of a drill that actually teaches you something is the whole
   thing failing quietly.

   So it is split at sentence boundaries. Deliberately not labelled: sometimes the
   explanation runs to two sentences and the trap to one, and a heading that guesses
   wrong is worse than no heading. Two or three short paragraphs need no headings. */
function whyInto(parent, text, cls){
  var t = String(text == null ? "" : text).trim();
  if(!t) return;
  /* Split on sentence ends, keeping the punctuation. Decimals, "e.g." and initials do
     not qualify: a full stop only ends a sentence when whitespace and then a capital,
     an opening quote, or a list marker follows.

     The list marker matters more than it looks. Several of the longer teaching notes
     are numbered lists written inline — "…each applied to the book. (1) Since objects
     are not dependent… (2) …" — and without this they stayed one 800-character block,
     which is the exact shape of text this whole function exists to break up. */
  var parts = t.split(/(?<=[.!?;:])\s+(?=["\u201c]?\(?[A-Z\u03b1-\u03c9\u0391-\u03a9\d]|\([a-z]\))/);
  var out = [], buf = "";
  var flush = function(){ if(buf.trim()){ out.push(buf.trim()); buf = ""; } };
  for(var i = 0; i < parts.length; i++){
    buf = buf ? buf + " " + parts[i] : parts[i];
    /* Break after any sentence long enough to stand as a paragraph. A short clause
       stays joined to the next one, so this never produces a stack of one-line
       fragments — and there is no cap, because capping the count is what left a
       four-sentence explanation with a 360-character block at the end of it. */
    if(buf.length >= 90 && i < parts.length - 1) flush();
  }
  flush();
  if(!out.length) out = [t];

  /* A second pass, for the handful that are still walls.

     About one explanation in twenty is a single sentence of three hundred characters or
     more, held together by semicolons — a teaching note listing what each definition
     means, or why each of four options is wrong. A semicolon separates independent
     clauses, so breaking there is safe; but it is only done to paragraphs that are
     already too long, because doing it everywhere would shred ordinary prose into
     fragments. */
  var final = [];
  out.forEach(function(p){
    if(p.length <= 300 || p.indexOf("; ") < 0){ final.push(p); return; }
    var bits = p.split(/;\s+/), acc = "";
    bits.forEach(function(bit, i){
      acc = acc ? acc + "; " + bit : bit;
      if(acc.length >= 140 && i < bits.length - 1){ final.push(acc); acc = ""; }
    });
    if(acc.trim()) final.push(acc.trim());
  });

  final.forEach(function(p){ parent.appendChild(el("p", cls || null, codeHtml(p))); });
}

function codeHtml(t){
  var out = esc(String(t == null ? "" : t));

  /* Fenced blocks come out first and are held aside, because everything below rewrites
     newlines — and a <br> inside a white-space:pre block is a blank line the author
     never wrote. They go back in at the end, untouched. */
  var held = [];
  out = out.replace(/```[a-zA-Z0-9+#-]*\n?([\s\S]*?)```/g, function(m, body){
    held.push(body.replace(/^\n+|\n+$/g, ""));
    return "\u0000" + (held.length - 1) + "\u0000";
  });

  out = out.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  /* A newline left in a stem is a line the author meant to keep. */
  out = out.replace(/\n/g, "<br>");

  out = out.replace(/\u0000(\d+)\u0000/g, function(m, i){
    return '<pre class="qcode">' + held[Number(i)] + '</pre>';
  });
  return out;
}

/* Turn a session brief into something readable.

   Briefs are written as one long sentence chain. Three shapes appear in the real data:
   semicolon lists, sentence sequences, and — the one that defeated the first attempt —
   a colon followed by comma-separated gerund phrases:

     "...the concrete problems the lessons name: counting the search space of the
      four-digit padlock, tracing Merge sort on a small set, running the greedy
      activity-selection example with start times 2, 4, 1, 6, 9, 6 and end times..."

   Splitting that on commas shatters the number list. So a comma only counts as a
   joint when the words after it start a new phrase of the same kind: a gerund, or an
   interrogative like "how" or "which". Numbers never do. */

var LEADIN  = /^(?:how|which|what|why|whether|where|when)\b/i;
var DETER   = /^(?:the|a|an|its|his|her|their|each|both|every|this|these|those)\s+[a-z]/i;
var QUALIFY = /^(including|excluding|involving|regarding|concerning|especially|namely|such)$/i;

function isJoint(after){
  var raw = after.trim();
  var w = raw.replace(/^(?:and|then|or)\s+/i, "").trim();
  if(w.length < 12) return false;                     // too short to be its own item
  /* "…on real numbers, then alters the decision box…" — "then" is an explicit
     sequencer, so it starts a step whatever word follows it. */
  if(/^(?:and\s+)?then\s/i.test(raw)) return true;
  if(LEADIN.test(w)) return true;
  var first = (w.match(/^[A-Za-z-]+/) || [""])[0];
  if(QUALIFY.test(first)) return false;               // qualifies the item before it
  if(DETER.test(w)) return true;                      // "the quotient rule…", "a block…"
  return first.length > 4 && /ing$/.test(first);      // a gerund: counting, tracing…
}

function splitPhrases(s){
  var out = [], buf = "", i = 0, depth = 0;
  while(i < s.length){
    var c = s[i];
    if(c === "(" || c === "[") depth++;
    else if(c === ")" || c === "]") depth = Math.max(0, depth - 1);
    /* A list inside brackets — "(code inspection, monitoring, backtracking)" — belongs
       to the item that introduced it, so commas in there are never joints. */
    else if(c === "," && depth === 0 && isJoint(s.slice(i + 1, i + 48))){
      out.push(buf.trim()); buf = ""; i++; continue;
    }
    buf += c; i++;
  }
  if(buf.trim()) out.push(buf.trim());
  /* Anything too small to stand alone goes back onto its neighbour. */
  var merged = [];
  out.forEach(function(x){
    if(merged.length && x.replace(/^(and|or|then)\s+/i,"").length < 18) merged[merged.length-1] += ", " + x;
    else merged.push(x);
  });
  return merged;
}

function sentences(t){
  return t.split(/(?<=[.!?])\s+(?=[A-Z(])/).map(x=>x.trim()).filter(Boolean);
}

function briefParts(text){
  var t = String(text || "").trim();
  if(t.length < 200) return null;

  var blocks = [];
  sentences(t).forEach(function(sen){
    if((sen.match(/;/g) || []).length >= 2){
      var colon = sen.search(/:\s/);
      var head = colon > 0 ? sen.slice(0, colon + 1) : "";
      var rest = colon > 0 ? sen.slice(colon + 1) : sen;
      if(head) blocks.push({lead: head.trim()});
      rest.split(/;\s+/).forEach(function(x){
        x = x.trim().replace(/[.;]+$/, "");
        if(x) blocks.push({item: x.charAt(0).toUpperCase() + x.slice(1)});
      });
      return;
    }
    var colon2 = sen.search(/:\s/);
    if(colon2 > 0 && colon2 < 160){
      var parts = splitPhrases(sen.slice(colon2 + 1));
      if(parts.length >= 3){
        blocks.push({lead: sen.slice(0, colon2 + 1).trim()});
        parts.forEach(function(x){
          x = x.trim().replace(/[.]+$/, "");
          if(x) blocks.push({item: x.charAt(0).toUpperCase() + x.slice(1)});
        });
        return;
      }
    }
    /* Two parts is enough to be worth splitting once a sentence is long; below that
       length, splitting in two just makes a short line shorter. */
    var p2 = splitPhrases(sen);
    if(p2.length >= 3 || (p2.length === 2 && sen.length > 190)){
      p2.forEach(function(x){
        x = x.trim().replace(/[.]+$/, "");
        if(x) blocks.push({item: x.charAt(0).toUpperCase() + x.slice(1)});
      });
      return;
    }
    blocks.push({item: sen});
  });

  /* A scene-setting sentence that lands before a lead-in reads as a stray bullet.
     Promote it: "The same Week 3 approaches, treated as practice." is a preamble,
     not the first item of the list that follows. */
  for(var k = 0; k < blocks.length - 1; k++){
    if(blocks[k].item && blocks[k+1] && blocks[k+1].lead){
      blocks[k] = {lead: blocks[k].item};
    } else if(blocks[k].lead) continue;
    else break;
  }

  var items = blocks.filter(b=>b.item).length;
  return items >= 3 ? blocks : null;
}

/* Every place the brief appears renders it through here. It used to be written out
   raw in three separate views, so fixing one left the others as walls. */
/* The session brief, collapsed by default and labelled for what it is.

   It used to be the first thing on the card, clamped to four lines of a 500-character
   sentence. That is the "word salad" problem exactly: the most prominent text on the
   screen was the least actionable thing on it. It is still here, because on a Sunday
   you do want to know what a session covered. It is just no longer in the way. */
function coversBlock(parent, text){
  var t = String(text || "").trim();
  if(!t) return;
  var wrap = el("div","covers");
  var open = false, body = null;
  var b = btn("moreb","What this covers", function(){
    open = !open;
    if(open){ body = el("div"); briefInto(body, t, "muted"); wrap.appendChild(body); b.textContent = "Hide"; }
    else { if(body) body.remove(); body = null; b.textContent = "What this covers"; }
  });
  wrap.appendChild(b);
  parent.appendChild(wrap);
}

/* ---------- Friday: review the week ----------

   The old Friday card told you to "look at your scores" and then showed you none of
   them. This shows every session of the week with what you got, worst first, and puts
   the redo button on the row. The two at the top are what Sunday is for. */
function sessionRows(parent, w, opts){
  opts = opts || {};
  var rows = slotsFor(w).map(function(x){
    var sc = getScore(ME, w, x.day, x.slot);
    return {day:x.day, slot:x.slot, course:x.course, sc:sc,
            ratio: sc ? sc.score / sc.max : null};
  });
  /* Unsat sessions last: you cannot revise something you have not met. */
  rows.sort(function(a, b){
    if(a.ratio === null && b.ratio === null) return 0;
    if(a.ratio === null) return 1;
    if(b.ratio === null) return -1;
    return a.ratio - b.ratio;
  });
  var any = rows.some(function(r){ return r.sc; });
  if(!any){
    parent.appendChild(el("p","muted","Nothing scored in week " + w + " yet. Sit a check and it appears here."));
    return 0;
  }
  var list = el("div","srows");
  rows.forEach(function(r, i){
    var row = el("div","srow" + (r.sc ? "" : " unsat")
                 + (opts.mark && i < 2 && r.sc ? " worst" : ""));
    var left = el("div","sleft");
    left.appendChild(el("div","sname", esc(NAMES[r.course] || r.course)));
    left.appendChild(el("div","smeta", r.day + " · " + (r.slot === "deep" ? "first hour" : "second hour")
      + " · " + unitsOf(r.course) + "u"));
    row.appendChild(left);
    if(r.sc){
      row.appendChild(el("span","sc " + scoreClass(r.sc), r.sc.score + "/" + r.sc.max));
      row.appendChild(btn("act tiny ghost", opts.verb || "Redo", function(){
        startQuiz(r.day, r.slot, true);
      }));
    } else {
      row.appendChild(el("span","sc", "not sat"));
      row.appendChild(btn("act tiny", "Sit it", function(){ startQuiz(r.day, r.slot); }));
    }
    list.appendChild(row);
  });
  parent.appendChild(list);
  return rows.filter(function(r){ return r.sc; }).length;
}

function reviewPanel(parent, w){
  var slots = slotsFor(w), done = 0;
  slots.forEach(function(x){ if(getScore(ME, w, x.day, x.slot)) done++; });
  parent.appendChild(el("p","muted","Everything week " + w + " caught you on, in one sitting. Then the two topics for Sunday."));

  ensureWeek(w);
  var deck = weekDeck(w, {size: CATCHN});
  if(deck === null){
    factRow2(parent, ["loading week " + w]);
  } else if(!deck.length){
    factRow2(parent, [done + " of " + slots.length + " sat"]);
    parent.appendChild(el("p","muted","Nothing scored in week " + w + " yet, so there is nothing to go back over."));
  } else {
    factRow2(parent, [deck.missedCount + " you got wrong",
                      deck.heldCount + " to spot-check",
                      deckMins(deck.length)]);
    stepList(parent, [
      "Sit them. You find out why on every one, straight away",
      "Then read back the summaries for the two courses at the top",
      "Settle which two topics Sunday gets"
    ]);
    var r = el("div","row");
    r.appendChild(btn("act big", "Go over the week · " + deck.length + " questions", function(){
      startDeck("review", deck, {week: w});
    }));
    parent.appendChild(r);
  }
  parent.appendChild(el("div","lbl2","The week, worst first"));
  sessionRows(parent, w, {mark: true});
}

/* ---------- Saturday: catch-up ----------

   This is the spaced-repetition hour, and until now it was a paragraph telling you to
   sit seven question sets with no way to start any of them. Same rows, pointed at last
   week, with the score you got the first time so you can see whether it stuck. */
function catchupPanel(parent, w){
  var prev = w - 1;
  if(prev < 1){
    parent.appendChild(el("p","muted","First week of the semester, so nothing is seven days old yet."));
    stepList(parent, [
      "Redo anything from this week you got wrong",
      "GST 112 and CSC 106 are pure recall and cheapest to bank now"
    ]);
    sessionRows(parent, w);
    return;
  }
  parent.appendChild(el("p","muted","Week " + prev + ", seven days on. Everything it caught you on, plus a few you got right, to see what stayed."));

  ensureWeek(prev);
  var deck = weekDeck(prev, {size: CATCHN});
  var sat = catchDone(prev);

  if(deck === null){
    factRow2(parent, ["loading week " + prev + "…"]);
  } else if(!deck.length){
    factRow2(parent, ["week " + prev, "nothing scored"]);
    parent.appendChild(el("p","muted","You did not sit anything in week " + prev + ", so there is nothing seven days old to come back to."));
  } else {
    factRow2(parent, [deck.missedCount + " you got wrong",
                      deck.heldCount + " to spot-check",
                      deckMins(deck.length),
                      "does not change your score"]);
    stepList(parent, [
      "Sit them cold. No notes, no going back to the summary first",
      "Anything still catching you goes on Sunday's list"
    ]);
    var r = el("div","row");
    r.appendChild(btn("act big", (sat ? "Go again · " : "Start the catch-up · ") + deck.length + " questions", function(){
      startDeck("catchup", deck, {week: prev});
    }));
    if(sat) r.appendChild(el("span","sc " + (sat.n / sat.of >= 0.83 ? "g" : (sat.n / sat.of >= 0.5 ? "o" : "b")),
                             "sat " + sat.n + "/" + sat.of));
    parent.appendChild(r);
  }
  parent.appendChild(el("div","lbl2","Week " + prev + ", session by session"));
  sessionRows(parent, prev, {verb: "Sit again"});
}

/* A row of plain facts with no course attached. */
function factRow2(parent, bits){
  var r = el("div","facts");
  /* "0 to spot-check" is not information, it is a slot that happened to be empty. */
  bits = bits.filter(function(t){ return t && !/^0 /.test(t); });
  bits.forEach(function(t, i){
    if(i) r.appendChild(el("span","fdot","·"));
    r.appendChild(el("span","fact", esc(t)));
  });
  parent.appendChild(r);
}

/* ---------- what to actually do tonight ----------

   The brief says what a session COVERS. That is a different document from what you DO,
   and reading 300 words of prose at 21:00 to work out "watch, read, then take the
   check" is the app failing at its one job.

   So the steps are computed, not written. They come from facts the app already holds:
   which slot this is, whether there is a lecture video this week, whether a check
   exists and how long it is, whether the course wants building rather than watching.
   That means they are short, always true, and never go stale when a pack is
   regenerated. The prose moves behind "What this covers", where it belongs. */

function doSteps(course, slot, chk, minutes){
  var n = chk && chk.questions ? chk.questions.length : 0;
  var out = [];
  var build = (course === "CSC_106" || course === "COS_102");

  if(slot === "deep"){
    if(minutes) out.push("Watch the lecture video at 1×, " + minutes + " minutes");
    else out.push("No lecture video this week. The PDF is the lesson, so read it properly");
    out.push("Read the PDF with a pen. Phone in another room");
    if(build) out.push("Write the code yourself before you look at theirs");
    else out.push("Work the examples on paper, not in your head");
    if(n) out.push("Take the " + n + "-question check");
  } else {
    if(minutes) out.push("Watch at 1.5× to 1.75×, about " + Math.round(minutes / 1.6) + " minutes");
    else out.push("No video. Read the PDF straight through");
    if(build) out.push("Build the example as you go");
    if(n) out.push("Take the " + n + "-question check");
    out.push("Post in the forum, then close the laptop");
  }
  return out;
}

/* A numbered list, because at 21:00 you want an order, not a paragraph. */
function stepList(parent, steps){
  if(!steps || !steps.length) return;
  var box = el("div","dolist");
  box.appendChild(el("div","lbl2","Do this"));
  var ol = el("ol");
  steps.forEach(function(t){ ol.appendChild(el("li", null, esc(t))); });
  box.appendChild(ol);
  parent.appendChild(box);
}

/* The one line that says what this session is worth and how long it takes. */
function factRow(parent, course, slot, chk){
  var u = unitsOf(course), n = chk && chk.questions ? chk.questions.length : 0;
  var bits = [];
  if(u) bits.push(u + " unit" + (u === 1 ? "" : "s"));
  bits.push(slot === "deep" ? "1 hour at 1×" : "1 hour at 1.5–1.75×");
  if(n) bits.push(n + " questions");
  var r = el("div","facts");
  bits.forEach(function(t, i){
    if(i) r.appendChild(el("span","fdot","·"));
    r.appendChild(el("span", i === 0 && u >= 3 ? "fact heavy" : "fact", esc(t)));
  });
  parent.appendChild(r);
}

function briefInto(parent, text, cls){
  var t = String(text || "").trim();
  if(!t){ parent.appendChild(el("p", cls||"muted", "No brief for this session.")); return; }

  /* A brief that already has paragraph breaks was written by someone who decided where
     they go. Use them.

     Below this is a parser that infers structure from semicolons and gerund phrases. It
     earned its place when every brief was one 570-character sentence and inferring was
     the only option. Against properly punctuated prose it does harm: "Her orderings,
     which matter: the product rule u(x)v′(x) + u′(x)v(x), and the quotient rule ..."
     came out as three bullets beginning "Her orderings", "Which matter" and "And". So
     it now only runs on text that gave it nothing to go on. */
  if(t.indexOf("\n\n") >= 0){
    var box = el("div","brief");
    t.split(/\n{2,}/).forEach(function(para){
      var p = para.trim();
      if(p) box.appendChild(el("p", cls || "muted", codeHtml(p)));
    });
    parent.appendChild(box);
    makeSelectable(box);
    return;
  }

  var blocks = briefParts(t), holder = el("div","brief"), ul = null;
  if(blocks){
    blocks.forEach(function(b){
      if(b.lead){ ul = null; holder.appendChild(el("p", cls||"muted", esc(b.lead))); }
      else { if(!ul){ ul = el("ul"); holder.appendChild(ul); }
             ul.appendChild(el("li", null, esc(b.item))); }
    });
  } else {
    sentences(t).forEach(function(x){ holder.appendChild(el("p", cls||"muted", esc(x))); });
  }
  parent.appendChild(holder);
  makeSelectable(holder);
}

/* `foot` lets the caller decide where the expand button lands — so it can share a row
   with something else, spaced by that row's gap, instead of two inline things ending up
   jammed against each other. */
function topicBlock(parent, text, cls, foot){
  var t = String(text||"").trim();
  if(!t) return;

  var p = el("p", (cls||"")+" clamp"); p.innerHTML = esc(t);
  parent.appendChild(p);
  if(t.length < 260){ p.className = cls||""; return; }

  var full = null;
  var b = el("button","moreb","Read the full brief");
  b.onclick = function(){
    if(full){ full.remove(); full = null; p.style.display = ""; b.textContent = "Read the full brief"; return; }
    full = el("div");
    briefInto(full, t, cls);
    p.style.display = "none";
    parent.insertBefore(full, p.nextSibling);
    b.textContent = "Show less";
  };
  (foot || parent).appendChild(b);
}
var FLAME = '<svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor" aria-hidden="true"><path d="M6.6 0S7.4 2.4 5.6 4.3C3.9 6.1 1 7.3 1 10.1A5.5 5.5 0 0 0 6.5 15 5.5 5.5 0 0 0 12 10.1c0-2.6-1.6-3.8-2.4-5.5-.3 1-.9 1.6-1.6 2 .6-2.4-.5-5-1.4-6.6Z"/></svg>';

/* Arrows for the day strip, and a small icon for each thing the stats row counts.
   They are separate glyphs on purpose: the flame is the streak and nothing else, so
   when it lights up you know without reading what it is telling you. */
var CHEVL = '<svg width="17" height="17" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3.5 5.5 8l4.5 4.5"/></svg>';
var CHEVR = '<svg width="17" height="17" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5"/></svg>';
var ICO_CAL = '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="1.9" y="3" width="12.2" height="11.1" rx="2"/><path d="M1.9 6.6h12.2M5.2 1.6v2.6M10.8 1.6v2.6" stroke-linecap="round"/></svg>';
var ICO_STAR = '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1.3l1.86 3.94 4.14.62-3 3.05.71 4.32L8 11.2l-3.71 2.03.71-4.32-3-3.05 4.14-.62z"/></svg>';
var ICO_TARGET = '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="8" cy="8" r="6.1"/><circle cx="8" cy="8" r="3.1"/><circle cx="8" cy="8" r="0.9" fill="currentColor" stroke="none"/></svg>';
var ICO_BOLT = '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M9.2 1 3.4 9.1h3.3L6.1 15l6.1-8.4H8.7z"/></svg>';

var QMARK_SM = '<svg width="13" height="13" viewBox="0 0 64 64" fill="none" aria-hidden="true">'
  + '<path d="M20.5 24.5A11.5 11.5 0 1 1 32 36v5.5" stroke="currentColor" stroke-width="7" '
  + 'stroke-linecap="round" stroke-linejoin="round"/>'
  + '<circle cx="32" cy="50.5" r="4" fill="currentColor"/></svg>';

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
/* A model that ignores the formatting rules writes "1. Input x. 2. Sum = x + y. 3. …"
   inside one paragraph, which renders as a wall. Where a line carries three or more
   ascending enumerators, break them onto their own lines so the list renderer below
   picks them up. Deliberately strict: it must start at 1 and count up, so ordinary
   prose containing "week 1." is left alone. */
function unrunLists(src){
  return String(src||"").split("\n").map(function(line){
    if(line.length < 60 || /^\s*(\d+[.)]|[-*+])\s/.test(line)) return line;
    /* An enumerator only counts when a sentence just ended before it. Without that,
       "Average = Sum / 3. 4. Output" reads the 3 in the arithmetic as item three and
       the sequence stops being ascending, so nothing is rescued. */
    var re = /(?:^|[.;:!?]\s+)(\d{1,2})[.)]\s+(?=[A-Za-z(])/g, m, hits = [];
    while((m = re.exec(line))){
      hits.push({ n: +m[1], at: m.index + m[0].length - m[0].replace(/^[^\d]*/, "").length });
      re.lastIndex = m.index + m[0].length - 1;
    }
    if(hits.length < 3) return line;
    for(var i = 0; i < hits.length; i++) if(hits[i].n !== i + 1) return line;
    var parts = [], prev = 0;
    hits.forEach(function(h){
      var chunk = line.slice(prev, h.at).trim();
      if(chunk) parts.push(chunk);
      prev = h.at;
    });
    var tail = line.slice(prev).trim();
    if(tail) parts.push(tail);
    return parts.join("\n");
  }).join("\n");
}

function mdToHtml(src){
  var lines = unrunLists(src).replace(/\r/g,"").split("\n");
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
    wrap.appendChild(el("p","muted","Type your name. It becomes your area — your scores, your streak, your weekend topic. There's room for two of you."));
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
    ? "Your scores are stored with the site, not on this device. Sign in with the same name on your phone or another laptop and everything comes with it — and you each see the other's scores, which is what picks the weekend class's topics."
    : "Scores are being kept on this device for now. Once the shared store is connected they follow you between devices and your partner can see them."));
  root.appendChild(info);
}

/* ---------- stats strip ---------- */
function statsStrip(root){
  var w = wk(), di = dayIdx();
  var st = streak(), tal = weekTally(ME, w);
  var g = el("div","stats");

  /* One icon per thing, and the flame belongs to the streak alone. Three identical
     numbers in three identical boxes read as one number repeated; the glyph is what
     tells you at a glance which is which. */
  var s1 = el("div","stat flame");
  s1.id = "streakstat";
  s1.innerHTML = '<div class="si">'+FLAME+'</div><div class="v">'+st+'</div><div class="k">day streak</div>';
  g.appendChild(s1);

  var s2 = el("div","stat week");
  s2.innerHTML = '<div class="si">'+ICO_CAL+'</div><div class="v">'+tal.done+'<span style="font-size:15px;color:var(--ink3)">/'+(tal.of||6)+'</span></div><div class="k">week '+w+'</div>';
  g.appendChild(s2);

  var s3 = el("div","stat marks");
  s3.innerHTML = '<div class="si">'+ICO_STAR+'</div><div class="v">'+totalMarks()+'</div><div class="k">marks</div>';
  g.appendChild(s3);
  root.appendChild(g);

  var pc = el("div","card");
  pc.appendChild(el("div","lbl","This week"));
  var hasFast = slotsFor(w).some(function(x){ return x.slot === "fast"; });
  /* Saturday holds no class in either hour, so it gets no pip in either row. A hollow
     circle where a session used to be reads as one you skipped. */
  [["deep","first hour"],["fast","second hour"]].forEach(function(pair){
    var slot = pair[0];
    if(slot === "fast" && !hasFast) return;
    var line = el("div","piprow");
    line.appendChild(el("span","piplbl", pair[1]));
    var pips = el("div","pips");
    GRID.forEach(function(d,i){
      var course = slot === "deep" ? d.deep : d.fast;
      if(!isCourse(course)) return;
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

/* ---------- Kizito, the study buddy ---------- */
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
/* ---------- highlight anything, ask about it ----------
   The exam guides run to forty-odd pages and the weekly summaries to several thousand
   words. Reading those on a phone, the useful question is almost always about the
   paragraph under your thumb — so selecting it offers to ask, rather than making you
   retype it into a box. */

var SELMIN = 3, SELMAX = 1800;

/* ---------- selecting text to ask about it ----------
   Plain native selection: hold a word and drag, exactly like anywhere else. The earlier
   tap-a-paragraph experiment turned out worse than the thing it replaced — a tap in a
   list took the whole list, and you could never take half a sentence.

   Android still draws its own Copy / Share toolbar beside the highlight and there is no
   suppressing it, so ours is pinned to the bottom of the screen instead, where that
   toolbar never reaches. */

function makeSelectable(root){
  root.classList.add("selectable");
}

function selText(){
  var s;
  try { s = window.getSelection(); } catch(e){ return null; }
  if(!s || s.isCollapsed || !s.rangeCount) return null;
  /* Only the reading surfaces offer to be asked about, and never something the person
     is typing in. CSS already stops a selection starting anywhere else, but a select-all
     or a stray programmatic range can still land outside, so check it here too. */
  var n = s.anchorNode, inside = false;
  while(n && n !== document.body){
    if(n.nodeType === 1){
      var tag = n.tagName;
      if(tag === "TEXTAREA" || tag === "INPUT" || n.isContentEditable) return null;
      if(n.classList && n.classList.contains("selectable")) inside = true;
    }
    n = n.parentNode;
  }
  if(!inside) return null;
  var t = String(s.toString()).replace(/\s+/g, " ").trim();
  if(t.length < SELMIN) return null;
  var r;
  try { r = s.getRangeAt(0).getBoundingClientRect(); } catch(e){ return null; }
  if(!r || (!r.width && !r.height)) return null;
  return { text: t.slice(0, SELMAX), truncated: t.length > SELMAX, rect: r };
}

function clearSelPill(){
  clearTimeout(SELGRACE); SELGRACE = null;
  var old = document.getElementById("selpill");
  if(old) old.remove();
  var c = document.getElementById("selcopy");
  if(c) c.remove();
  SEL = null;
}

var SELSEEN = 0, SELGRACE = null;   /* when we last had a real selection */

function showSelPill(){
  var got = selText();
  var old = document.getElementById("selpill");
  if(!got || got.text.length < SELMIN){
    /* Touching the bar collapses the selection before the tap lands on it, so a bar
       that vanished the instant the highlight did could never be pressed on a phone.
       Hold it for a moment after the selection goes. */
    if(SEL && old && Date.now() - SELSEEN < 2600){
      /* and come back when the grace runs out, or a bar nobody pressed would hang
         around until the next selection */
      clearTimeout(SELGRACE);
      SELGRACE = setTimeout(showSelPill, 2600 - (Date.now() - SELSEEN) + 40);
      return;
    }
    clearSelPill();
    return;
  }
  SEL = got;
  SELSEEN = Date.now();

  var b = old || el("button","selpill");
  b.id = "selpill";
  var snip = got.text.replace(/\s+/g, " ").trim();
  if(snip.length > 34) snip = snip.slice(0, 34).replace(/\s\S*$/, "") + "…";
  b.innerHTML = '<span class="sq">' + QMARK_SM + '</span>'
              + '<span class="sl">Ask about <b>' + esc(snip) + '</b></span>';
  /* mousedown default is what would drop a desktop selection; cancelling it is safe.
     touchstart is NOT cancelled — doing that also cancels the click that follows, which
     is precisely why this button used to be dead on a phone. touchend fires the action
     directly instead, and cancelling THAT suppresses the duplicate click. */
  var fire = function(e){
    e.preventDefault(); e.stopPropagation();
    var quote = SEL ? SEL.text : "";
    clearSelPill();
    try { window.getSelection().removeAllRanges(); } catch(err){}
    if(quote) openBuddy("ask", null, quote);
  };
  b.onmousedown = function(e){ e.preventDefault(); };
  b.ontouchend  = fire;
  b.onclick     = fire;
  if(!old) document.body.appendChild(b);

  /* Copy is off the OS menu now, so it lives here instead. */
  var cp = document.getElementById("selcopy");
  if(!cp){
    cp = el("button","selcopy");
    cp.id = "selcopy";
    cp.title = "Copy";
    cp.innerHTML = '<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2.2"/><path d="M13 5.2A2.2 2.2 0 0 0 10.8 3H5.2A2.2 2.2 0 0 0 3 5.2v5.6A2.2 2.2 0 0 0 5.2 13"/></svg>';
    cp.onmousedown = function(e){ e.preventDefault(); };
    document.body.appendChild(cp);
  }
  var doCopy = function(e){
    e.preventDefault(); e.stopPropagation();
    var txt = SEL ? SEL.text : "";
    var done = function(){
      toast("Copied");
      clearSelPill();
      try { window.getSelection().removeAllRanges(); } catch(err){}
    };
    try{
      if(navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(txt).then(done, done);
      else {
        var ta = document.createElement("textarea");
        ta.value = txt; ta.style.cssText = "position:fixed;opacity:0";
        document.body.appendChild(ta); ta.select();
        try{ document.execCommand("copy"); }catch(err){}
        ta.remove(); done();
      }
    }catch(err){ done(); }
  };
  cp.ontouchend = doCopy;
  cp.onclick    = doCopy;
  /* Deliberately NOT anchored to the selection. Android draws its own Copy / Share
     toolbar right next to the highlighted text and there is no way to suppress it, so
     anything placed there gets covered. The bar is pinned to the bottom instead,
     inset on the right to clear the buddy button, where the native toolbar never
     goes. */
}

var SELTIMER = null;
function onSelChange(){
  clearTimeout(SELTIMER);
  SELTIMER = setTimeout(showSelPill, 180);   /* wait for the drag to settle */
}
document.addEventListener("selectionchange", onSelChange);
document.addEventListener("scroll", function(){ if(SEL) showSelPill(); }, true);
window.addEventListener("resize", function(){ if(SEL) showSelPill(); });

function openBuddy(view, concept, quote){
  var c = buddyContext();
  var qs = concept ? whyFor_concept(c.chk, concept) : [];
  BUDDY = {view: view || "home", concept: concept || null, qs: qs, quote: quote || null,
           asking:false, answer:null, searches:null, err:null, text:""};
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
      question: BUDDY.text,
      /* Reading a guide means the question is about THAT course, not tonight's. */
      course: (EXVIEW && EXVIEW.course) ? EXVIEW.course : c.course,
      week: c.w,
      topic: c.chk ? c.chk.topic : "",
      who: meName(),
      selection: BUDDY.quote || "",
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
/* Kizito. Drawn rather than imported so he inherits the theme, stays a few hundred
   bytes, and can be animated a piece at a time — the ears tilt, the head bobs, the eyes
   blink on their own schedule. Every moving part is its own group so nothing has to be
   redrawn to make him move. */
var TEDDY = ''
  + '<svg class="teddy" viewBox="0 0 64 64" width="38" height="38" aria-hidden="true">'
  +   '<g class="t-bob">'
  +     '<g class="t-ear t-ear-l">'
  +       '<circle cx="17" cy="15.5" r="9" fill="var(--fur)"/>'
  +       '<circle cx="17" cy="15.5" r="4.6" fill="var(--fur-in)"/>'
  +     '</g>'
  +     '<g class="t-ear t-ear-r">'
  +       '<circle cx="47" cy="15.5" r="9" fill="var(--fur)"/>'
  +       '<circle cx="47" cy="15.5" r="4.6" fill="var(--fur-in)"/>'
  +     '</g>'
  +     '<circle cx="32" cy="34" r="21" fill="var(--fur)"/>'
  +     '<ellipse cx="32" cy="40" rx="12.5" ry="10" fill="var(--fur-in)"/>'
  +     '<g class="t-eyes">'
  +       '<ellipse class="t-eye" cx="24" cy="29.5" rx="2.9" ry="3.4" fill="var(--fur-ink)"/>'
  +       '<ellipse class="t-eye" cx="40" cy="29.5" rx="2.9" ry="3.4" fill="var(--fur-ink)"/>'
  +     '</g>'
  +     '<circle cx="25.1" cy="28.4" r="1.05" fill="#fff" opacity=".9"/>'
  +     '<circle cx="41.1" cy="28.4" r="1.05" fill="#fff" opacity=".9"/>'
  +     '<ellipse cx="32" cy="36.4" rx="4.1" ry="3.1" fill="var(--fur-ink)"/>'
  +     '<path d="M32 39.4v2.3M32 41.7c0 2.1-2.6 2.1-2.6 0M32 41.7c0 2.1 2.6 2.1 2.6 0" '
  +       'stroke="var(--fur-ink)" stroke-width="1.7" stroke-linecap="round" fill="none"/>'
  +   '</g>'
  + '</svg>';

function buddyButton(root){
  var ctx = buddyContext();
  var b = el("button","buddybtn"+((ctx.missed && ctx.missed.length) ? " nudge" : ""));
  b.id = "buddybtn";
  b.setAttribute("aria-label","Ask Kizito");
  b.innerHTML = TEDDY;
  if(ctx.missed && ctx.missed.length) b.appendChild(el("span","dot", String(ctx.missed.length)));
  b.onclick = function(){ hideHello(); openBuddy("home"); };
  root.appendChild(b);
}

/* ---------- "Hi, I'm Kizito" ----------
   He says it once, when the app has finished loading, and then gets out of the way.
   The bubble is fixed beside the button rather than over the page, takes no pointer
   events, and retracts on its own after a few seconds — or the moment you scroll,
   tap anything, or open him, because a greeting that interrupts you is not a greeting.

   It lives on <body>, not inside #root, so a re-render mid-wave does not tear it out. */
var HELLO_DONE = false, HELLO_TIMER = null, HELLO_ARMED = false;

/* Armed from render, not from boot: whether you are signed in is only settled after the
   lock is answered and a person is chosen, and boot runs before both. */
function armHello(){
  if(HELLO_DONE || HELLO_ARMED) return;
  if(GATE !== "open" || !ME || !findPerson(ME)) return;
  if(TAB === "quiz" || BUDDY) return;
  HELLO_ARMED = true;
  setTimeout(sayHello, 950);
}

function hideHello(){
  clearTimeout(HELLO_TIMER);
  var h = document.getElementById("hello");
  if(!h || h.classList.contains("out")) return;
  h.classList.add("out");
  setTimeout(function(){ if(h.parentNode) h.remove(); }, 320);
}

function sayHello(){
  if(HELLO_DONE) return;
  if(GATE !== "open" || !ME || !findPerson(ME)) return;
  if(TAB === "quiz" || BUDDY) return;                    /* never over a question or the sheet */
  if(!document.getElementById("buddybtn")) return;
  if(document.getElementById("hello")) return;
  /* A toast lands in the same corner. Two things talking at once is worse than one of
     them arriving a moment later, so he waits for the room to be quiet. */
  if(TOAST){ setTimeout(sayHello, 1200); return; }
  HELLO_DONE = true;

  var h = el("div","hello");
  h.id = "hello";
  h.innerHTML = '<b>Hi, I\u2019m Kizito.</b><i>Ask me anything tonight.</i>';
  document.body.appendChild(h);
  /* the button notices him arriving */
  var btn2 = document.getElementById("buddybtn");
  if(btn2){ btn2.classList.add("waving"); setTimeout(function(){ btn2.classList.remove("waving"); }, 1600); }

  HELLO_TIMER = setTimeout(hideHello, 4200);
  window.addEventListener("scroll", hideHello, {passive:true, once:true});
  window.addEventListener("pointerdown", hideHello, {once:true});
}

/* ---------- dragging the sheet away ----------
   On a phone the natural way to dismiss a bottom sheet is to push it down, not to hunt
   for a Close chip in the corner. The whole difficulty is that the sheet and the list
   inside it both want the same downward swipe, so the rule has to be unambiguous:

     the sheet only takes the gesture when the content is already at its top.

   That is decided ONCE, at touchstart, and never revisited mid-gesture. Deciding it
   continuously is what makes these things feel broken — you flick a long list up, it
   hits the top, and the sheet suddenly starts moving under your thumb halfway through a
   scroll you did not finish. So: scrolled down at the moment you touched? The list owns
   the whole swipe, to the end. At the top? The sheet owns it, and the list stays put.

   Dragging from the header always moves the sheet, whatever the list is doing — that is
   what a grab handle is for. */
function dismissable(sheet, scroller, close){
  var startY = 0, startX = 0, dy = 0, mine = false, decided = false;
  var lastY = 0, lastT = 0, vel = 0;

  var setY = function(px){
    sheet.style.transition = "none";
    sheet.style.transform = px ? "translateY(" + px + "px)" : "";
    var scrim = document.querySelector(".scrim");
    if(scrim) scrim.style.opacity = String(Math.max(0, 1 - px / 420));
  };
  var release = function(px, ms){
    sheet.style.transition = "transform " + ms + "ms cubic-bezier(.2,.9,.3,1)";
    sheet.style.transform = px ? "translateY(" + px + "px)" : "";
  };

  sheet.addEventListener("touchstart", function(e){
    if(e.touches.length !== 1) return;
    var t = e.touches[0];
    startY = lastY = t.clientY; startX = t.clientX;
    dy = 0; vel = 0; lastT = nowMs();
    decided = false; mine = false;
    /* The one decision. Header, or a list already at its top, and the sheet may move. */
    var onHandle = !!(e.target.closest && e.target.closest(".sheeth"));
    var atTop = !scroller || scroller.scrollTop <= 0;
    sheet.__grab = onHandle || atTop;
  }, {passive:true});

  sheet.addEventListener("touchmove", function(e){
    if(e.touches.length !== 1) return;
    var t = e.touches[0];
    dy = t.clientY - startY;

    if(!decided){
      var dx = t.clientX - startX;
      if(Math.abs(dy) < 6 && Math.abs(dx) < 6) return;      /* still a tap */
      decided = true;
      /* Downward, mostly vertical, and allowed to grab. Anything else is the list's. */
      mine = sheet.__grab && dy > 0 && Math.abs(dy) > Math.abs(dx);
      if(mine && scroller) scroller.style.overflowY = "hidden";
    }
    if(!mine) return;

    e.preventDefault();               /* stop the page rubber-banding behind the sheet */
    var now = nowMs();
    if(now > lastT){ vel = (t.clientY - lastY) / (now - lastT); lastT = now; lastY = t.clientY; }
    /* Pulling up goes nowhere, but it should not feel dead either. */
    setY(dy > 0 ? dy : dy / 5);
  }, {passive:false});

  var end = function(){
    if(scroller) scroller.style.overflowY = "";
    if(!mine){ decided = false; return; }
    mine = false; decided = false;
    var far  = dy > Math.min(150, sheet.offsetHeight * 0.28);
    var fast = vel > 0.55 && dy > 40;         /* a flick counts even if it was short */
    if(far || fast){
      release(sheet.offsetHeight + 60, 200);
      var scrim = document.querySelector(".scrim");
      if(scrim){ scrim.style.transition = "opacity .2s"; scrim.style.opacity = "0"; }
      setTimeout(close, 190);
    } else {
      release(0, 240);                         /* not far enough: springs back */
      var s2 = document.querySelector(".scrim");
      if(s2){ s2.style.transition = "opacity .24s"; s2.style.opacity = "1"; }
    }
  };
  sheet.addEventListener("touchend", end, {passive:true});
  sheet.addEventListener("touchcancel", end, {passive:true});
}

function buddyPanel(root){
  var c = buddyContext();
  var back = el("div","scrim");
  back.onclick = function(){ BUDDY = null; render(); };
  root.appendChild(back);

  var p = el("div","sheet");
  p.appendChild(el("div","grab"));
  var head = el("div","sheeth");
  head.innerHTML = '<div><div class="lbl" style="margin:0">'+esc(c.day)+' · '+esc(NAMES[c.course]||c.course)+' · week '+c.w+'</div>'
                 + '<h2 style="margin:2px 0 0;font-size:18px">Kizito</h2></div>';
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
      card.appendChild(el("div","bq", codeHtml(q.q)));
      if(q.type === "mcq" && q.options){
        card.appendChild(el("div","ba","<b>Answer:</b> "+codeHtml(q.options[q.answerIndex])));
      }
      var bw = el("div","bw");
      whyInto(bw, q.why);
      card.appendChild(bw);
      body.appendChild(card);
    });
    videoRow(body, c.course, BUDDY.concept);
    var br = el("div","row");
    br.appendChild(btn("act ghost","← Back", function(){ openBuddy("home"); }));
    br.appendChild(btn("act","Ask about this", function(){ BUDDY.view = "ask"; render(); }));
    body.appendChild(br);
  }
  else if(BUDDY.view === "ask"){
    body.appendChild(el("div","lbl", BUDDY.quote ? "About the highlighted passage" : "Ask"));

    if(BUDDY.quote){
      var qb = el("div","quote");
      qb.appendChild(el("div","qtext", esc(BUDDY.quote.slice(0, 420) + (BUDDY.quote.length > 420 ? "…" : ""))));
      var qx = btn("qdrop","Drop it", function(){ BUDDY.quote = null; render(); });
      qb.appendChild(qx);
      body.appendChild(qb);

      /* The three questions worth asking about a passage, so it is one tap rather
         than a typing job on a phone at 23:00. */
      var quick = el("div","row qrow");
      [["Explain this", "Explain this passage."],
       ["Why is it true?", "Why is this true? Show me the reasoning."],
       ["Give an example", "Give me one worked example of this."]
      ].forEach(function(q){
        quick.appendChild(btn("chip qchip", q[0], function(){ BUDDY.text = q[1]; askBuddy(); }));
      });
      body.appendChild(quick);
    } else {
      body.appendChild(el("p","muted","Your question goes out with tonight's topic, your lecturer's own summary, and what you got wrong — so the answer is about this course, not the subject in general."));
    }

    var ta = el("textarea");
    ta.placeholder = BUDDY.quote ? "…or ask your own question about it"
                   : (BUDDY.concept ? "Why is " + BUDDY.concept + " actually true?" : "Ask anything about tonight's session…");
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
      makeSelectable(an);
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

    body.appendChild(el("div","lbl","This week's study guide"));
    body.appendChild(el("p","muted","Your lecturer's material for " + esc(NAMES[c.course]||c.course)
      + " week " + c.w + ", written out in full. Highlight any line in it to ask about that line."));
    var gb = el("div","row");
    gb.appendChild(btn("act","Open the study guide", function(){
      BUDDY = null; openGuide(c.course, c.w, "tonight");
    }));
    body.appendChild(gb);
  }

  if(BUDDY.view === "brief"){
    body.innerHTML = "";
    body.appendChild(el("div","lbl","Tonight's brief"));
    briefInto(body, (c.chk && c.chk.topic) || "", "muted");
    body.appendChild(btn("act ghost","← Back", function(){ openBuddy("home"); }));
  }

  p.appendChild(body);
  root.appendChild(p);
  dismissable(p, body, function(){ BUDDY = null; render(); });
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
/* Which courses are finished for the week, at a glance. The celebration is a moment;
   this is the part that is still there tomorrow. */
function courseStrip(parent, w){
  var slots = courseSlots(w), names = Object.keys(slots);
  if(!names.length) return;
  var order = ["MTH_102","PHY_102","COS_102","GST_112","CSC_106","GST_122","PHY_108"];
  names.sort(function(a,b){ return order.indexOf(a) - order.indexOf(b); });
  var strip = el("div","cstrip");
  names.forEach(function(c){
    var t = courseTally(ME, w, c);
    var pill = el("div","cpill" + (t.complete ? " on" : (t.done ? " part" : "")));
    pill.innerHTML = '<span class="cpn">' + esc(NAMES[c] || c) + '</span>'
      + '<span class="cpd">' + (t.complete ? "✓ done" : t.done + "/" + t.of) + '</span>';
    if(t.complete && t.max) pill.title = NAMES[c] + ": " + t.got + "/" + t.max + " this week";
    strip.appendChild(pill);
  });
  parent.appendChild(strip);
}

function weekGrid(root){
  var w = wk(), wd = weekData(w), di = dayIdx();
  var g = el("div","wg");
  GRID.forEach(function(d, i){
    var r = el("div","wr");
    r.appendChild(el("div","dn",d.day));

    var ft = null;
    var chk = checkFor(wd, d.day, "deep");
    if(wd && wd.days){ var dd = wd.days.filter(function(x){ return x.day===d.day; })[0]; if(dd && dd.fast) ft = dd.fast.topic; }
    var hasCheck = !!(chk && chk.questions && chk.questions.length);
    var mine = getScore(ME, w, d.day);

    /* deep hour - opens that night's check */
    var dc = el("div","cell d"+(i===di?" today":""));
    dc.innerHTML = '<div class="ce">deep · 1×</div>'
      + '<div class="cn">'+esc(NAMES[d.deep])+'</div>'
      + '<div class="ct">'+esc(chk&&chk.topic?chk.topic:d.dn)+'</div>';
    var foot = el("div","cf");
    if(mine){
      foot.appendChild(el("span","sc "+scoreClass(mine), "you "+mine.score+"/"+mine.max));
      if(mine.tries > 1 && mine.best > mine.score)
        foot.appendChild(el("span","sc best", "best "+mine.best+"/"+mine.max));
      if(mine.overrides)
        foot.appendChild(el("span","sc best", mine.overrides + " changed"));
    }
    others().forEach(function(p){
      var o = getScore(p.id,w,d.day);
      if(o) foot.appendChild(el("span","sc "+scoreClass(o), esc(p.name.toLowerCase())+" "+o.score+"/"+o.max));
    });
    var dprog = hasCheck ? quizProgress(w, d.day, "deep") : 0;
    var dsaved = hasCheck ? quizRestore(w, d.day, "deep") : null;
    var dreview = !!(dsaved && dsaved.submitted);
    foot.appendChild(el("span","go", dreview ? "review →"
      : (mine ? "practise →"
      : (dprog ? "resume · "+dprog+"/"+chk.questions.length+" →"
      : (hasCheck ? chk.questions.length+" questions →" : "log a score →")))));
    dc.appendChild(foot);
    /* Tapping a topic used to launch the check cold. The card now opens the session —
       brief, videos, study guide — and the footer is the way into the questions. */
    dc.onclick = function(){ openSession(d.day, w); };
    foot.querySelector(".go").onclick = function(e){
      e.stopPropagation();
      if(!hasCheck){ manualScore(d.day); return; }
      /* Scored, with nothing left to reopen: the only thing left to do is practise. */
      startQuiz(d.day, "deep", !dreview && !!mine);
    };
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
      fc.onclick = function(){ openSession(d.day, w); };
      ff.querySelector(".go").onclick = function(e){ e.stopPropagation(); startQuiz(d.day, "fast"); };
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
  legend.innerHTML = "Left is the <b>deep hour</b>, an hour at 1× with a twelve-question check. Right is the <b>fast hour</b> at 1.5–1.75× with a short one. Tap a card to open the session; tap the line at its foot to go straight to the questions.";
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
  var di = dayIdx(), w = wk(), wd = weekData(w), wi = weekInfo();

  /* the way in */
  var hail = el("div","hail");
  hail.innerHTML = '<span class="hi">'+esc(greeting())+', <b>'+esc(meName())+'</b></span>'
                 + '<span class="muted">'+(onRunway() ? "runway" : "week "+w)+'</span>';
  root.appendChild(hail);

  /* Term has not started, or you have gone back to look at the runway. Showing a
     week-1 evening as "tonight" would be a lie, and the runway has its own work. */
  if(onRunway()){
    runwayCard(root, wi);
    var la = el("div","card");
    la.appendChild(el("div","lbl","Looking ahead"));
    la.appendChild(el("h2",null,"Week 1 is already loaded"));
    la.appendChild(el("p","muted","Every check, summary and study guide for week 1 is here now. Working ahead is free slack — nothing resets when the week actually opens."));
    var lr = el("div","row");
    lr.appendChild(btn("act big","Look at week 1", function(){ TAB="tonight"; syncUrl(); render(); }));
    lr.appendChild(btn("act ghost","The calendar", function(){ TAB="sunday"; syncUrl(); render(); }));
    la.appendChild(lr);
    root.appendChild(la);
    installCard(root);
    statsStrip(root);
    weekGrid(root);
    return;
  }

  var hero = el("div","card deepc");
  if(di === -1){
    hero.appendChild(el("div","lbl","Sunday · 19:00"));
    hero.appendChild(el("h2",null,"Weekend class"));
    hero.appendChild(el("p","muted","One hour. One topic each, taught with no notes."));
    var rs = el("div","row");
    rs.appendChild(btn("act big","Open the weekend class", function(){ TAB="sunday"; render(); }));
    hero.appendChild(rs);
  } else {
    var g = GRID[di];
    var chk = checkFor(wd, g.day, "deep");
    var sc = getScore(ME, w, g.day);
    hero.appendChild(el("div","lbl","Tonight · "+g.day+" · week "+w));
    hero.appendChild(el("h2",null, esc(NAMES[g.deep]) + "  then  " + esc(NAMES[g.fast])));
    hero.appendChild(el("p","muted", chk && chk.topic ? esc(chk.topic).slice(0,150)+"…" : esc(g.dn)));
    watchLine(hero, g.deep, w, true);
    var r = el("div","row");
    if(sc){
      r.appendChild(el("span","sc "+scoreClass(sc), "Scored "+sc.score+"/"+sc.max));
      r.appendChild(btn("act","Open the session", function(){ TAB="tonight"; render(); }));
    } else {
      r.appendChild(btn("act big","Start tonight's session", function(){ TAB="tonight"; render(); }));
    }
    hero.appendChild(r);
  }
  root.appendChild(hero);

  installCard(root);
  statsStrip(root);

  var wh = el("div","card");
  wh.appendChild(el("div","lbl","The week · deep hour then fast hour"));
  wh.appendChild(el("p","muted","Six identical days. No day is heavier than another, and no course is ever more than three days from your attention. Tap any deep-hour cell to take that check."));
  courseStrip(wh, w);
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

  fold(root, "The weekend class", "1 hr, both of you", function(b){
    b.appendChild(el("p","muted","Teach the topic you understood <b>least</b>, not the one you understood best. Explaining something you only half-know is where it gets built — you find the hole the moment you say it out loud, and someone is there to notice you glossed over it."));
    bullets(b, [
      "One hour in total, not one hour each. Two topics — one yours, one theirs.",
      "Never both take the same course. If your lowest scores land together, whoever scored lower keeps it and the other takes their next-lowest elsewhere. The app does this for you.",
      "Resist a second topic each. Wanting to come back next Sunday is what keeps this running in November.",
      "A bad week makes this more valuable, not less. Teach one thing you half-covered.",
      "Whatever you couldn't explain goes to the top of next week's list."
    ]);
    var r = el("div","row");
    r.appendChild(btn("act ghost","Open the weekend class", function(){ TAB="sunday"; render(); }));
    b.appendChild(r);
  });

  fold(root, "The calendar", "28 Aug – 13 Dec", function(b){
    tbl(b, ["Week","Dates","What's different"], CALENDAR.map(function(r){ return [r[0], esc(r[1]), esc(r[2])]; }));
    b.appendChild(el("p","muted","Assumes Week 1 opens Monday 7 September. The LMS still shows the January cohort's windows — confirm yours when they publish."));
  });
}

/* ---------- the runway ----------
   Shown wherever the calendar says week 1 has not started. Ticking a line re-renders
   the card in place rather than the whole screen, so the list does not jump under your
   thumb while you work down it. */
function runwayCard(root, wi){
  var c = el("div","card deepc");
  c.appendChild(el("div","lbl","Before week 1 · " + wi.daysToStart + " day" + (wi.daysToStart===1?"":"s") + " to go"));
  c.appendChild(el("h2",null,"Runway"));
  c.appendChild(el("p","muted","Week 1 opens Monday 7 September. Everything here buys back an evening later — it is worth more now than it will be at any point after."));

  var body = el("div");
  var draw = function(){
    body.innerHTML = "";
    var t = rwTally();
    var bar = el("div","rwbar");
    bar.innerHTML = '<span style="width:' + Math.round(100*t.done/t.total) + '%"></span>';
    body.appendChild(bar);
    body.appendChild(el("div","lbl", t.done + " of " + t.total + " done"));

    RUNWAY.forEach(function(item){
      var whole = item.per
        ? item.per.every(function(cs){ return rwDone(item.id+":"+cs); })
        : rwDone(item.id);
      var row = el("div","rwit" + (whole ? " on" : ""));
      var head = el("button","rwh");
      head.innerHTML = '<span class="rwtick">' + (whole ? "✓" : "") + '</span>'
                     + '<span class="rwl"><b>' + esc(item.label) + '</b>'
                     + '<i>' + esc(item.detail) + '</i></span>';
      head.onclick = function(){
        if(item.per) item.per.forEach(function(cs){ rwSet(item.id+":"+cs, !whole); });
        else rwSet(item.id, !whole);
        draw(); rwSave();
      };
      row.appendChild(head);

      if(item.per){
        var chips = el("div","rwchips");
        item.per.forEach(function(cs){
          var k = item.id + ":" + cs, on = rwDone(k);
          var href = item.linkFor ? item.linkFor(cs) : null;
          var gone = lmsAbsent(cs);

          /* One chip, two jobs. The name ticks it off; the arrow opens the LMS. They are
             separate hit areas because opening a test is not the same as saying you have
             done it, and a chip that did both would be wrong half the time. */
          var pair = el("span","rwchip" + (on ? " on" : "") + (href ? " haslink" : ""));
          var tick = btn("rwtick-b", (on ? "✓ " : "") + (NAMES[cs] || cs), function(){
            rwSet(k, !on); draw(); rwSave();
          });
          pair.appendChild(tick);
          if(href){
            var a = el("a","rwgo","↗");
            a.href = href; a.target = "_blank"; a.rel = "noopener";
            a.title = "Open " + (NAMES[cs] || cs) + " on the LMS";
            a.onclick = function(e){ e.stopPropagation(); };
            pair.appendChild(a);
          }
          chips.appendChild(pair);
        });
        row.appendChild(chips);
      }

      /* Whole-item links, for the tasks that are one job rather than eight. */
      if(item.links){
        var ls = item.links().filter(function(x){ return x && x.href; });
        if(ls.length){
          var lr = el("div","rwlinks");
          ls.forEach(function(x){
            var a = el("a","rwlink", esc(x.label));
            a.href = x.href; a.target = "_blank"; a.rel = "noopener";
            lr.appendChild(a);
          });
          row.appendChild(lr);
        }
      }
      body.appendChild(row);
    });
  };
  draw();
  c.appendChild(body);
  root.appendChild(c);
}

/* ---------- walking through the week ----------
   Seven targets and two arrows. The arrows are there because a thumb on a phone is
   better at "the night before this one" than at hitting a 34px pill, and the pills are
   there because sometimes you know exactly which night you want.

   Each pill carries the colour of what you scored that night, so the strip doubles as
   the week at a glance: green means it went well, red means it is worth another sitting,
   hollow means you have not been there yet. */
function dayNav(root){
  var di = dayIdx(), w = wk(), cal = weekInfo().n, tdy = todayIdx();
  var nav = el("div","daynav");

  var back = btn("dstep", CHEVL, function(){ stepDay(-1); });
  back.disabled = !canStep(-1);
  back.setAttribute("aria-label","The day before");
  nav.appendChild(back);

  var head = el("div","dhead");
  head.appendChild(el("div","dh1", esc(dayName(di))));
  var sub = el("div","dh2");
  sub.appendChild(el("span",null,"week " + w));
  if(cal === w && di === tdy) sub.appendChild(el("span","dnow","today"));
  else if(cal === w) sub.appendChild(el("span","dpast", di < tdy || tdy === -1 ? "earlier this week" : "still to come"));
  else if(w > cal && cal > 0) sub.appendChild(el("span","dpast","ahead"));
  else if(cal > w) sub.appendChild(el("span","dpast","done week"));
  head.appendChild(sub);
  nav.appendChild(head);

  var fwd = btn("dstep", CHEVR, function(){ stepDay(1); });
  fwd.disabled = !canStep(1);
  fwd.setAttribute("aria-label","The day after");
  nav.appendChild(fwd);
  root.appendChild(nav);

  var strip = el("div","dstrip");
  strip.setAttribute("role","tablist");
  DAYORDER.forEach(function(i){
    var lbl = i === -1 ? "Wknd" : GRID[i].day;
    var sc  = i === -1 ? null : getScore(ME, w, GRID[i].day);
    var cls = "dchip" + (i === di ? " on" : "")
            + (cal === w && i === tdy ? " istoday" : "")
            + (sc ? " " + scoreClass(sc) : "");
    var b = btn(cls, esc(lbl), function(){
      if(VIEWDAY === i) return;
      VIEWDAY = i; QUIZ = null; MANUAL = null; syncUrl(); render();
    });
    b.setAttribute("role","tab");
    b.setAttribute("aria-selected", i === di ? "true" : "false");
    b.title = i === -1 ? "Weekend class" : FULLDAY[GRID[i].day] + " of week " + w;
    strip.appendChild(b);
  });
  root.appendChild(strip);
}

/* ---------- tonight ---------- */
function viewTonight(root){
  var wi = weekInfo(), di = dayIdx();

  /* A catch-up or a review takes over the tab while you are sitting it. Half a deck
     with the rest of Saturday's page scrolling underneath is the same mistake as
     burying the questions behind ten buttons. */
  if(DRILL && (DRILL.kind === "catchup" || DRILL.kind === "review")){
    if(DRILL.done) deckResult(root, DRILL.kind === "catchup" ? "Catch-up done" : "Week reviewed");
    else drillRunner(root);
    return;
  }

  if(onRunway()){
    runwayCard(root, wi);
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
    dayNav(root);
    var cs = el("div","card recapc");
    cs.appendChild(el("div","lbl","Sunday · 19:00"));
    cs.appendChild(el("h2",null,"Weekend class"));
    cs.appendChild(el("p","muted","One hour. One topic each, taught with no notes — then everything the week showed you were shaky on, with somewhere to go for each."));
    var r = el("div","row");
    r.appendChild(btn("act big","Open the weekend class", function(){ TAB="sunday"; render(); }));
    cs.appendChild(r);
    root.appendChild(cs);
    return;
  }
  else {
    statsStrip(root);
    dayNav(root);
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
  c1.appendChild(el("div","lbl","21:00 – 22:00 · first hour"));
  if(!isCourse(g.deep)){
    /* Saturday. No class in this hour any more — it is the week's review. */
    c1.appendChild(el("h2",null,"Review the week"));
    reviewPanel(c1, w);
    root.appendChild(c1);
    saturdaySecondHour(root, w);
    gapCard(root);
    return;
  }
  c1.appendChild(el("h2",null,esc(NAMES[g.deep])));
  /* Facts first, then an order to follow. The brief that describes the session moves
     down behind "What this covers": useful on a Sunday, in the way at 21:00. */
  factRow(c1, g.deep, "deep", chk);
  var mins1 = watchLine(c1, g.deep, w, true);
  stepList(c1, doSteps(g.deep, "deep", chk, mins1));
  coversBlock(c1, topic || g.dn);

  var gr1 = el("div","row"); gr1.style.marginTop = "10px";
  gr1.appendChild(btn("act ghost","Study guide", function(){ openGuide(g.deep, w, "tonight"); }));
  c1.appendChild(gr1);

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

  var fchk0 = checkFor(wd, g.day, "fast");
  var c2 = el("div","card fastc");
  c2.appendChild(el("div","lbl","22:00 – 23:00 · second hour"
    + (g.fastFull ? " · a full hour, not a skim" : "")));
  c2.appendChild(el("h2",null, g.fast==="REVIEW" ? "Review the week"
                            : (g.fast==="CATCHUP" ? "Catch-up" : esc(NAMES[g.fast]))));
  if(g.fast === "REVIEW"){
    reviewPanel(c2, w);
  } else if(g.fast === "CATCHUP"){
    catchupPanel(c2, w);
  } else {
    var full2 = !!g.fastFull;
    factRow(c2, g.fast, full2 ? "deep" : "fast", fchk0);
    var mins2 = watchLine(c2, g.fast, w, false);
    stepList(c2, doSteps(g.fast, full2 ? "deep" : "fast", fchk0, mins2));
    coversBlock(c2, fastTopic || g.fn);
  }

  if(g.fast !== "REVIEW" && g.fast !== "CATCHUP"){
    var gr2 = el("div","row"); gr2.style.marginTop = "6px";
    gr2.appendChild(btn("act ghost","Study guide", function(){ openGuide(g.fast, w, "tonight"); }));
    c2.appendChild(gr2);
  }

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
    /* Nothing to add. The panel above is the whole hour: the rows ARE the work, and a
       line saying "no check tonight" under a list of checks reads as a contradiction. */
  } else {
    row2.appendChild(btn("act ghost","Log a score manually", function(){ manualScore(g.day, "fast"); }));
    row2.appendChild(el("span","muted","No quick check generated for this session yet"));
    c2.appendChild(row2);
  }
  root.appendChild(c2);

  gapCard(root);
}

/* Saturday's second hour: catch-up, on its own card. */
function saturdaySecondHour(root, w){
  var c = el("div","card fastc");
  c.appendChild(el("div","lbl","22:00 – 23:00 · second hour"));
  c.appendChild(el("h2",null,"Catch-up"));
  catchupPanel(c, w);
  root.appendChild(c);
}

function gapCard(root){
  var c3 = el("div","card");
  c3.appendChild(el("div","lbl","If a gap opens this afternoon"));
  c3.appendChild(el("p","muted","Watch tonight's intro videos at 1.75×. Ten to fifteen minutes, and it turns the first hour into revision rather than first contact. Don't start new material in a burst."));
  root.appendChild(c3);
}

/* ---------- week ---------- */
function viewWeek(root){
  var head = el("div","card");
  head.appendChild(el("div","lbl","The shape of every week"));
  head.appendChild(el("p","muted","Two hours a night, Monday to Friday. The first at normal speed, the second at 1.5–1.75× unless it is a course you build rather than watch. Saturday is review and catch-up. Sunday is the weekend class."));
  root.appendChild(head);
  weekGrid(root);
}

/* ---------- sunday ---------- */
/* Everything the term has shown you are shaky on, and — the part that matters — a way
   into each one. A list of your weaknesses with nothing to do about it is just a list
   of your weaknesses. */
function weakSection(root){
  var all = weakAreas();
  if(!all.length) return;

  var weak = all.filter(function(g){ return g.weak && g.ratio !== null; });
  var solid = all.filter(function(g){ return !g.weak && g.ratio !== null; });
  var untouched = all.filter(function(g){ return g.ratio === null; });

  var head = el("div","card");
  head.appendChild(el("div","lbl","What to work on"));
  head.appendChild(el("h2",null, weak.length
    ? "The " + weak.length + " course" + (weak.length === 1 ? "" : "s") + " the term says you are shaky on"
    : "Nothing is behind"));
  head.appendChild(el("p","muted", weak.length
    ? "Drawn from every check you have taken, not just this week. Each line is a concept behind a question one of you missed, and each has somewhere to go — the written guide, the lecturer's own video, someone else teaching it, or Kizito."
    : "Every course you have sat is at " + Math.round(SOLID * 100) + "% or better with nothing missed twice. Teach the two topics above and take the hour back."));
  root.appendChild(head);

  weak.forEach(function(g){
    var c = el("div","card");
    var top = el("div","wkhd");
    top.innerHTML = '<div><div class="lbl" style="margin:0">' + esc(NAMES[g.course] || g.course) + '</div>'
      + '<h3 style="margin:2px 0 0">' + Math.round(g.ratio * 100) + '% across ' + g.done + ' session' + (g.done === 1 ? "" : "s") + '</h3></div>';
    var pills = el("div","row"); pills.style.marginTop = "0";
    g.who.forEach(function(x){
      if(x.ratio === null) return;
      pills.appendChild(el("span","sc " + (x.ratio >= SOLID ? "g" : x.ratio >= 0.5 ? "o" : "b"),
        esc(x.name.toLowerCase()) + " " + Math.round(x.ratio * 100) + "%"));
    });
    top.appendChild(pills);
    c.appendChild(top);

    if(!g.list.length){
      c.appendChild(el("p","muted","Low overall, but nothing missed twice — read the week summaries back rather than hunting one concept."));
      var gr = el("div","row");
      gr.appendChild(btn("act ghost","Study guide", function(){ openGuide(g.course, wk(), "sunday"); }));
      c.appendChild(gr);
      root.appendChild(c);
      return;
    }

    g.list.slice(0, 5).forEach(function(x){
      var row = el("div","gap");
      row.appendChild(el("div","gapn", esc(x.name)));
      var meta = [];
      if(x.n > 1) meta.push("missed " + x.n + " times");
      meta.push("week " + x.last);
      if(x.by.length && S.people.length > 1) meta.push(x.by.map(function(n){ return n.toLowerCase(); }).join(" and "));
      row.appendChild(el("div","gapm", esc(meta.join(" · "))));

      var acts = el("div","row gapa");
      acts.appendChild(btn("chip","Guide", function(){ openGuide(g.course, x.last, "sunday"); }));
      var lms = lmsWeekLink(g.course, x.last);
      if(lms){
        var a2 = el("a","chip","LMS ↗");
        a2.href = lms; a2.target = "_blank"; a2.rel = "noopener";
        a2.style.textDecoration = "none";
        acts.appendChild(a2);
      }
      var q = searchTerms(g.course, x.name);
      if(q){
        var yt = el("a","chip","Watch ↗");
        yt.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
        yt.target = "_blank"; yt.rel = "noopener";
        yt.title = q;
        yt.style.textDecoration = "none";
        acts.appendChild(yt);
      }
      acts.appendChild(btn("chip","Ask Kizito", function(){ openBuddy("concept", x.name); }));
      row.appendChild(acts);
      c.appendChild(row);
    });
    if(g.list.length > 5)
      c.appendChild(el("p","muted","And " + (g.list.length - 5) + " more, further down the list."));
    root.appendChild(c);
  });

  /* What is going fine gets one line and no attention. */
  if(solid.length || untouched.length){
    var f = el("div","card");
    f.appendChild(el("div","lbl","Not on the list"));
    if(solid.length){
      f.appendChild(el("p","muted","<b>Going fine:</b> " + solid.map(function(g){
        return esc(NAMES[g.course] || g.course) + " " + Math.round(g.ratio * 100) + "%";
      }).join(" · ") + ". Left alone on purpose."));
    }
    if(untouched.length){
      f.appendChild(el("p","muted","<b>Not sat yet:</b> " + untouched.map(function(g){
        return esc(NAMES[g.course] || g.course);
      }).join(" · ") + ". Nothing to say about these until you take a check."));
    }
    root.appendChild(f);
  }
}

function weekHasScores(w){
  return slotsFor(w).some(function(x){
    return S.people.some(function(p){ return !!getScore(p.id, w, x.day, x.slot); });
  });
}

function viewSunday(root){
  var w = wk();
  if(w===0){ root.appendChild(el("div","empty","<b>No week loaded yet</b>The first weekend class is Sunday 13 September.")); return; }

  /* The class is about the week you just finished. Once a week is complete the picker
     walks on to the next one, which on Sunday night is a week with nothing in it — so
     unless you have chosen a week yourself, fall back to the last one that has scores. */
  var moved = false;
  if(!weekHasScores(w) && (VIEWWEEK === null || VIEWWEEK === undefined)){
    for(var b2 = w - 1; b2 >= 1; b2--){
      if(weekHasScores(b2)){ w = b2; moved = true; break; }
    }
  }
  var t = sundayTopicsFor(w);

  var intro = el("div","card recapc");
  intro.appendChild(el("div","lbl","Sunday 19:00 – 20:00" + (moved ? " · week " + w : "")));
  intro.appendChild(el("h2",null,"One hour. One topic each."));
  intro.appendChild(el("p","muted","Teach the thing you scored <b>lowest</b> on, not the thing you know best. You find the hole the moment you try to say it out loud, and there is someone there to notice you glossed over it."));
  if(moved) intro.appendChild(el("p","muted","Week " + w + ", because that is the week with scores in it — the picker has already moved on to the next one."));
  root.appendChild(intro);

  if(!t || !t.some(function(l){ return l.pick; })){
    root.appendChild(el("div","empty","<b>Nothing scored in week " + w + " yet</b>Take one check and the two topics pick themselves. What to work on, below, looks across the whole term."));
    /* The term-wide gaps do not depend on this week having scores, so they stay. */
    weakSection(root);
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
    /* A session topic runs to a paragraph. As an <h3> it was a wall of bold; through
       the brief renderer it is a clamped summary with the full thing one tap away. */
    c.appendChild(el("h3",null, esc(NAMES[pick.course] || pick.course) + " · " + esc(pick.day)
      + (pick.slot === "fast" ? " fast hour" : " deep hour")));
    /* The brief's expand link and the score sit on one line, spaced by the row's own
       gap. As bare inline siblings they touched. */
    var foot = el("div","row");
    topicBlock(c, topicName(pick, w), "muted", foot);
    foot.appendChild(el("span","sc "+scoreClass(pick.s), NAMES[pick.course]+" · "+pick.s.score+"/"+pick.s.max));
    c.appendChild(foot);
    if(pick.slot === "fast"){
      c.appendChild(el("p","muted","This one is a recall course, so don't teach it as a concept — <b>quiz each other on the lists</b> until you can both produce them cold. Producing beats recognising."));
    }
    if(pick.s.wrong && pick.s.wrong.length){
      /* These are separate concept names, one per question missed. Joined into a
         sentence with middle dots they read as one long broken sentence, which is
         exactly what they are not — so they get a line each. */
      var mh = el("div","lbl","The " + pick.s.wrong.length + " you missed in that session");
      mh.style.marginTop = "14px";
      c.appendChild(mh);
      var ml = el("ul","misslist");
      pick.s.wrong.forEach(function(cn){
        var li = el("li");
        var a = el("button","linkish", esc(cn));
        a.onclick = function(){ openBuddy("concept", cn); };
        li.appendChild(a);
        ml.appendChild(li);
      });
      c.appendChild(ml);
    }
    var h = el("p"); h.style.cssText="margin-top:14px;font-weight:800;font-size:14px";
    h.textContent="Questions for the listener — keep going until they run out of answer";
    c.appendChild(h);
    var ol = el("ol"); ol.style.cssText="margin:4px 0 0;padding-left:20px;color:var(--ink2);font-size:14.5px";
    whyFor(pick, w).forEach(function(q){ var li=el("li",null,esc(q)); li.style.marginBottom="5px"; ol.appendChild(li); });
    c.appendChild(ol);
    root.appendChild(c);
  });

  weakSection(root);

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
/* ---------- how much of it you actually know ----------
   The job is magnitude, low to high, across seven courses — so it is a bar chart, one
   hue, sorted worst first, and the number is written on the bar rather than guessed
   off an axis. No legend: there is one series and the title names it.

   The second number on each row is the one that keeps it honest. 100% across one
   session is not knowing a course; it is having sat one check. Accuracy without
   coverage is the way this kind of chart usually lies, so both are always shown and a
   thin coverage track sits under the bar. */
function knowledgeChart(root){
  var rows = weakAreas().filter(function(g){ return g.ratio !== null; });
  var none = weakAreas().filter(function(g){ return g.ratio === null; });
  if(!rows.length) return false;

  var c = el("div","card");
  c.appendChild(el("div","lbl","What you know"));
  c.appendChild(el("h2",null,"Accuracy by course, weakest first"));
  c.appendChild(el("p","muted","Every check either of you has taken. The thin line under each bar is how much of that course you have actually sat — a high score over one session is a small sample, not a strong course."));

  var ch = el("div","kchart");
  rows.forEach(function(g){
    var pct = Math.round(g.ratio * 100);
    var cov = g.of ? Math.min(1, g.done / g.of) : 0;
    var r = el("div","krow");
    r.setAttribute("title", (NAMES[g.course] || g.course) + ": " + pct + "% over "
      + g.done + " of " + g.of + " sessions");
    r.innerHTML =
        '<div class="kname">' + esc(NAMES[g.course] || g.course) + '</div>'
      + '<div class="kbars">'
      +   '<div class="ktrack"><span class="kfill" style="width:' + Math.max(pct, 1.5) + '%"></span></div>'
      +   '<div class="kcov"><span style="width:' + Math.round(cov * 100) + '%"></span></div>'
      + '</div>'
      + '<div class="kval"><b>' + pct + '%</b><i>' + g.done + '/' + g.of + '</i></div>';
    ch.appendChild(r);
  });
  c.appendChild(ch);

  if(none.length){
    c.appendChild(el("p","muted","<b>No data:</b> " + none.map(function(g){
      return esc(NAMES[g.course] || g.course); }).join(" · ") + ". Not drawn rather than drawn as zero — you have not sat them."));
  }
  root.appendChild(c);
  return true;
}

/* The drills, on the stats page, kept visibly apart from the marks.

   They belong here — a fortnight of drills is a real signal about what you know, and
   Stats is where you come to ask that. But they are not graded work, and putting the
   two in one table would invite exactly the reading this whole design avoids: that a
   good morning on the bus makes up for a check you skipped. So it gets its own strip,
   under its own heading, in its own words. */
function drillStatsPanel(root){
  var days = drillDays();
  if(!days.length) return false;
  var r7 = drillRecent(7), r30 = drillRecent(30), st = drillStreak(), all = drillTotal();

  var c = el("div","card");
  c.appendChild(el("div","lbl","Drills"));
  c.appendChild(el("p","muted","Separate from your marks. This is practice, and it counts for nothing except what it tells you."));

  var g = el("div","stats");
  var mk = function(cls, icon, v, k){
    var d = el("div","stat " + cls);
    d.innerHTML = '<div class="si">'+icon+'</div><div class="v">'+v+'</div><div class="k">'+k+'</div>';
    return d;
  };
  g.appendChild(mk("flame", FLAME, st, "day streak"));
  g.appendChild(mk("drill", ICO_TARGET,
    r30.ratio === null ? '<span class="none">0</span>'
      : Math.round(r30.ratio*100) + '<span style="font-size:15px;color:var(--ink3)">%</span>', "last 30 days"));
  g.appendChild(mk("marks", ICO_STAR, all.got + '<span style="font-size:15px;color:var(--ink3)">/' + all.of + '</span>', "all time"));
  c.appendChild(g);

  if(r7.sat && r30.sat > r7.sat){
    var a = Math.round(r7.ratio*100), b = Math.round(r30.ratio*100);
    c.appendChild(el("p","muted", "The last seven days are " + a + "%, against " + b + "% over the month"
      + (a > b ? " — going the right way." : (a < b ? ", so the recent ones have been harder going." : "."))));
  }

  var weak = drillWeak().slice(0, 6);
  if(weak.length){
    c.appendChild(el("div","lbl2","What the drills keep catching"));
    var ul = el("ul","misslist");
    weak.forEach(function(w){ ul.appendChild(el("li", null, esc(w))); });
    c.appendChild(ul);
  }
  root.appendChild(c);
  return true;
}

function viewProgress(root){
  var drew = knowledgeChart(root);
  if(drillStatsPanel(root)) drew = true;
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
  if(!rows.length){
    if(!drew) root.appendChild(el("div","empty","<b>Nothing logged yet</b>Scores appear here as you take the checks."));
    return;
  }
  root.appendChild(el("div","lbl","Every score, week by week"));

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
  tb.appendChild(btn("act ghost","← Back to Home", function(){ TAB="home"; syncUrl(); render(); }));
  top.appendChild(tb);
  root.appendChild(top);

  if(isInstalled()){
    var ic = el("div","card");
    ic.appendChild(el("div","lbl","Installed"));
    ic.appendChild(el("p","muted","You are running this from your home screen. The shell is kept on the device, so it opens even with no signal — your scores and the week's material still need a connection."));
    root.appendChild(ic);
  } else {
    installCard(root, true);
  }

  var c = el("div","card"+(STORAGE==="blob"?"":" fastc"));
  c.appendChild(el("div","lbl","Sync"));
  if(STORAGE === "blob"){
    c.appendChild(el("h2",null,"Shared"));
    c.appendChild(el("p","muted","Scores are saved with the site. Both of you see the same thing on any device, and the weekend class picks its topics from both sets of scores."));
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

  if(weekInfo().n < 12){
    var ce = el("div","card");
    ce.appendChild(el("div","lbl","Exam prep"));
    ce.appendChild(el("h2",null,"Not yet"));
    ce.appendChild(el("p","muted","A study guide and a hundred-question paper for each course. These are for revision week, so the tab appears in week 12 — it would only be noise before then. Open it early if you want a look."));
    var re = el("div","row");
    re.appendChild(btn("act ghost","Open exam prep anyway", function(){
      QUIZ=null; MANUAL=null; TAB="exam"; syncUrl(); render();
    }));
    ce.appendChild(re);
    root.appendChild(ce);
  }

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
    idx:EXQUIZ.idx, submitted:EXQUIZ.submitted, at:Date.now(),
    debrief:EXQUIZ.debrief
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
/* ---------- the LMS side of the evening ----------
   The tracker cannot see into Moodle, so this is a snapshot taken by crawling it:
   how many videos each course-week has and how long they run. It exists so an evening
   can be sized before it starts, and so one tap gets you to the right page. */
function loadLms(){
  if(LMS) return;
  fetch("/api/lms").then(function(r){ return r.ok ? r.json() : null; })
    .then(function(d){ if(d && d.courses){ LMS = d; render(); } })
    .catch(function(){ /* runtimes just stay hidden */ });
}

function lmsFor(course, w){
  if(!LMS || !LMS.courses || !LMS.courses[course]) return null;
  var c = LMS.courses[course], wk = c.weeks && c.weeks[String(w)];
  return wk ? {cid:c.id, sec:wk.section, intro:wk.intro, lecture:wk.lecture,
               ids: wk.ids || {}, speed:c.speed || 1, note:c.note || ""} : null;
}

function lmsLink(info){
  if(!info || !LMS) return null;
  return LMS.base + "/course/view.php?id=" + info.cid + (info.sec ? "&section=" + info.sec : "");
}

/* A course's front page: where its pre-semester test lives, among other things. */
function lmsCourseLink(course){
  if(!LMS || !LMS.courses || !LMS.courses[course]) return null;
  return LMS.base + "/course/view.php?id=" + LMS.courses[course].id;
}
function lmsWeekLink(course, w){
  var info = lmsFor(course, w);
  return info ? lmsLink(info) : lmsCourseLink(course);
}
function lmsPdfLink(course, w){
  var info = lmsFor(course, w);
  if(!info || !info.ids || !info.ids.pdf) return lmsWeekLink(course, w);
  return LMS.base + "/mod/" + (info.ids.pdfMod || "page") + "/view.php?id=" + info.ids.pdf;
}
/* Some courses are not in the LMS list at all, and saying so beats a dead link. */
function lmsAbsent(course){
  return (LMS && LMS.absent && LMS.absent[course]) || null;
}

/* Minutes for ONE session.
   The speed belongs to the course, not to the kind of clip: a fast-hour lecture runs at
   1.75x like everything else in that hour. Getting this wrong made the fast hour look
   twice as long as it is, and made COS 102 look impossible. Intro clips are always
   orientation, so they always run at 1.75x. A course gets two deep hours a week, so its
   lectures are split across them. */
function sessionMinutes(info, halve, speed){
  if(!info) return null;
  var d = halve ? 2 : 1, sp = speed || info.speed || 1;
  return Math.round((info.intro.secs / 1.75 + info.lecture.secs / sp) / 60 / d);
}

/* The line that tells you what tonight actually is. */
function watchLine(parent, course, w, halve){
  var info = lmsFor(course, w);

  if(!info){
    /* A course on the timetable that the LMS has no enrolment for. Saying nothing
       here reads as a loading failure, so say the thing. */
    var absent = LMS && LMS.absent && LMS.absent[course];
    if(absent){
      var a0 = el("div","watch");
      a0.appendChild(el("span","wmin","—"));
      a0.appendChild(el("span","wtxt", esc(absent) + " Use the hour on last week's question set."));
      parent.appendChild(a0);
    }
    return;
  }

  var mins = sessionMinutes(info, halve);
  var nL = info.lecture.n, nI = info.intro.n;
  var row = el("div","watch");

  var what;
  if(nL === 0 && nI === 0) what = "No video this week — the PDF is the whole lesson.";
  else if(nL === 0)        what = "No lecture video this week. " + nI + " short clip" + (nI>1?"s":"") + ", then the PDF is the lesson.";
  else {
    var shown = halve ? Math.max(1, Math.round(nL / 2)) : nL;
    what = shown + " lecture video" + (shown > 1 ? "s" : "")
         + (nI ? " + " + nI + " short clip" + (nI > 1 ? "s" : "") : "")
         + (info.speed !== 1 ? " at " + info.speed + "×" : "");
  }

  row.appendChild(el("span","wmin", mins ? "~" + mins + " min" : "—"));
  row.appendChild(el("span","wtxt", esc(what)));
  parent.appendChild(row);

  /* Where the speed is what makes the evening fit, say so — otherwise the number
     looks like a fact rather than a choice. */
  var checkMins = halve ? 15 : 5;
  if(nL && info.speed > 1){
    var atOne = sessionMinutes(info, halve, 1);
    if(atOne + checkMins > 60 && mins + checkMins <= 60){
      parent.appendChild(el("p","muted tight",
        "At 1× this is " + atOne + " min, which leaves no room for the check. The "
        + info.speed + "× is what makes the hour work — drop to 1× only where code or a derivation is on screen."));
    }
  }
  if(mins && mins + checkMins > 60){
    parent.appendChild(el("p","muted tight",
      "This is over the hour even before the check. Take the video tonight and the check tomorrow, or split it across both sessions."));
  }

  var row2 = el("div","row lmsrow");
  var add = function(cls, label, href){
    if(!href) return;
    var x = el("a", cls, label);
    x.href = href; x.target = "_blank"; x.rel = "noopener";
    x.style.textDecoration = "none";
    row2.appendChild(x);
  };
  add("act ghost", "Open on the LMS ↗", lmsLink(info));

  /* The plan says "read the PDF, take the quiz, post in the forum" every night and
     then makes you go and find all three. */
  var id = info.ids || {}, base = LMS.base + "/mod/";
  add("chip", "PDF",   id.pdf   ? base + (id.pdfMod || "page") + "/view.php?id=" + id.pdf : null);
  add("chip", "Pop quiz", id.pop ? base + "quiz/view.php?id=" + id.pop : null);
  add("chip", "Practice", id.practice ? base + "quiz/view.php?id=" + id.practice : null);
  add("chip", "Forum", id.forum ? base + "forum/view.php?id=" + id.forum : null);
  parent.appendChild(row2);
  return mins;
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
  TAB = "exam"; render();
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
    debrief: a.debrief || null,
    showAll: false
  };
  if(only) examSave();
  render();
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

/* ---------- tonight's study guide ----------
   The weekly per-course summary is a real teaching document — a thousand words for the
   lighter courses, close to four thousand for MTH 102 — and it was reachable only from
   inside the buddy panel behind a "Load the summary" button. For the weeks with no
   lecture video it is the closest thing to the lesson, so it gets its own view, in the
   same prose styling as the exam guides and highlightable the same way. */
/* ---------- one session, opened deliberately ----------
   A card that shows tonight's topic should open the session, not fire a graded check at
   you. This is the same pair of cards the Tonight tab builds, for whichever day you
   tapped, with the check as an explicit action at the end. */
function viewSession(root){
  var ss = SESSION || {};
  var w = ss.week || wk();
  var di = GRID.map(function(x){ return x.day; }).indexOf(ss.day);
  if(di < 0){ TAB = "tonight"; syncUrl(true); viewTonight(root); return; }
  var g = GRID[di], wd = weekData(w);

  var head = el("div","card");
  var r0 = el("div","row backrow");
  r0.appendChild(btn("act ghost","← Back", function(){
    SESSION = null; TAB = ss.from || "home"; syncUrl(); render();
  }));
  head.appendChild(r0);
  head.appendChild(el("div","lbl", g.day + " · week " + w));
  head.appendChild(el("h2",null, esc(NAMES[g.deep]) + "  then  " + esc(NAMES[g.fast])));
  root.appendChild(head);

  /* the deep hour */
  var chk = checkFor(wd, g.day, "deep");
  var c1 = el("div","card deepc");
  c1.appendChild(el("div","lbl","21:00 – 22:00 · deep hour · 1×"));
  c1.appendChild(el("h2",null, esc(NAMES[g.deep])));
  topicBlock(c1, (chk && chk.topic) || g.dn, "muted");
  watchLine(c1, g.deep, w, true);
  var gr = el("div","row");
  gr.appendChild(btn("act ghost","Study guide", function(){ openGuide(g.deep, w, "session"); }));
  c1.appendChild(gr);

  var sc = getScore(ME, w, g.day);
  var rw = el("div","row");
  if(sc){
    rw.appendChild(el("span","sc "+scoreClass(sc), "Scored "+sc.score+"/"+sc.max));
    rw.appendChild(btn("act ghost","Retake", function(){ startQuiz(g.day); }));
  } else if(chk && chk.questions && chk.questions.length){
    rw.appendChild(btn("act big","Take the check · "+chk.questions.length+" questions", function(){ startQuiz(g.day); }));
  } else {
    rw.appendChild(btn("act ghost","Log a score manually", function(){ manualScore(g.day); }));
  }
  c1.appendChild(rw);
  root.appendChild(c1);

  /* the fast hour */
  var fchk = checkFor(wd, g.day, "fast");
  var ftopic = null;
  if(wd && wd.days){ var dd = wd.days.filter(function(x){ return x.day===g.day; })[0]; if(dd && dd.fast) ftopic = dd.fast.topic; }
  var c2 = el("div","card fastc");
  c2.appendChild(el("div","lbl","22:00 – 23:00 · fast hour · 1.5–1.75×"));
  c2.appendChild(el("h2",null, esc(NAMES[g.fast])));
  topicBlock(c2, (fchk && fchk.topic) || ftopic || g.fn, "muted");
  if(g.fast !== "REVIEW" && g.fast !== "CATCHUP"){
    watchLine(c2, g.fast, w, false);
    var gr2 = el("div","row");
    gr2.appendChild(btn("act ghost","Study guide", function(){ openGuide(g.fast, w, "session"); }));
    c2.appendChild(gr2);
  }
  var fsc = getScore(ME, w, g.day, "fast");
  var rw2 = el("div","row");
  if(fsc){
    rw2.appendChild(el("span","sc "+scoreClass(fsc), "Scored "+fsc.score+"/"+fsc.max));
    rw2.appendChild(btn("act ghost","Retake", function(){ startQuiz(g.day, "fast"); }));
    c2.appendChild(rw2);
  } else if(fchk && fchk.questions && fchk.questions.length){
    rw2.appendChild(btn("act","Quick check · "+fchk.questions.length+" questions", function(){ startQuiz(g.day, "fast"); }));
    c2.appendChild(rw2);
  }
  root.appendChild(c2);
}

function openSession(day, w, from){
  SESSION = {day: day, week: w || wk(), from: from || TAB};
  /* Opening Thursday's session is choosing Thursday. Coming back to Study should land
     on the night you were just reading, not on whatever the calendar says. */
  var at = GRID.map(function(d){ return d.day; }).indexOf(day);
  if(at >= 0) VIEWDAY = at;
  QUIZ = null; MANUAL = null; BUDDY = null;
  TAB = "session"; syncUrl(); render();
}

function viewGuide(root){
  var g = GUIDEVIEW || {};
  var w = g.week || wk(), course = g.course;
  /* Landed here from a stale link with nothing to show. */
  if(!course){ TAB = "tonight"; syncUrl(true); viewTonight(root); return; }

  var head = el("div","card");
  var r0 = el("div","row backrow");
  r0.appendChild(btn("act ghost","← Back", function(){
    GUIDEVIEW = null; TAB = g.from || "tonight"; syncUrl(); render();
  }));
  head.appendChild(r0);
  head.appendChild(el("div","lbl","Week " + w + " · study guide"));
  head.appendChild(el("h2",null, esc(NAMES[course] || course)));
  head.appendChild(el("p","muted","Your lecturer's own material for the week, written out. Highlight any line to ask about it."));
  root.appendChild(head);

  var key = w + ":" + course;
  if(SUMCACHE[key] === undefined){ loadSummary(w, course); }
  if(SUMCACHE[key] === undefined || SUMCACHE[key] === null){
    root.appendChild(el("div","empty","<b>Loading</b>Fetching the week's summary."));
    return;
  }
  if(SUMCACHE[key] === "__none__"){
    root.appendChild(el("div","empty","<b>Nothing written for this one yet</b>No summary in the repo for " + esc(course) + " week " + w + "."));
    return;
  }
  var body = el("div","card prose");
  body.innerHTML = mdToHtml(SUMCACHE[key]);
  root.appendChild(body);
  makeSelectable(body);
}

function openGuide(course, w, from){
  GUIDEVIEW = {course: course, week: w, from: from || TAB};
  QUIZ = null; MANUAL = null; BUDDY = null;
  TAB = "guide"; syncUrl(); render();
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
  back.appendChild(btn("act ghost","← All courses", function(){ EXVIEW = null; EXQUIZ = null; render(); }));
  root.appendChild(back);

  if(EXVIEW.mode === "guide"){
    var md = GUIDECACHE[EXVIEW.course];
    if(!md){ root.appendChild(el("div","empty","<b>Loading the guide</b>It's a long one.")); return; }
    if(md === "__fail__"){ root.appendChild(el("div","empty","<b>Not published yet</b>This guide isn't in the study repo.")); return; }
    var g = el("div","card prose");
    g.innerHTML = mdToHtml(md);
    setTimeout(function(){ makeSelectable(g); }, 0);
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
  card.appendChild(el("div","qt", codeHtml(qq.q)));
  var opts = el("div","opts");
  qq.options.forEach(function(opt, oi){
    var on = q.answers[q.idx] === oi;
    var b = el("button","opt"+(on?" on":""));
    b.innerHTML = '<span class="k">'+LETTERS[oi]+'</span><span>'+esc(opt)+'</span>';
    b.onclick = function(){
      q.answers[q.idx] = oi; examSave();
      if(q.idx < n-1){ q.idx++; }
      render();
    };
    opts.appendChild(b);
  });
  card.appendChild(opts);

  var foot = el("div","deckfoot");
  if(q.idx > 0) foot.appendChild(btn("act ghost","Back", function(){ q.idx--; examSave(); render(); }));
  foot.appendChild(el("div","spacer"));
  if(q.idx < n-1) foot.appendChild(btn("act","Next", function(){ q.idx++; examSave(); render(); }));
  if(!left.length) foot.appendChild(btn("act big","Submit", function(){
    q.submitted = true; examSave(); render();
  }));
  card.appendChild(foot);
  root.appendChild(card);

  var r2 = el("div","row");
  if(left.length){
    r2.appendChild(btn("act ghost","Next blank ("+left.length+")", function(){
      q.idx = left[0]; render();
    }));
    r2.appendChild(btn("act ghost","Mark it now", function(){
      if(!window.confirm(left.length + " questions are blank. They will be marked wrong. Submit anyway?")) return;
      q.submitted = true; examSave(); render();
    }));
  }
  r2.appendChild(btn("act ghost","Save and stop", function(){
    examSave(); EXVIEW = null; EXQUIZ = null; toast("Saved — pick up where you left off"); render();
  }));
  root.appendChild(r2);
}

/* A hundred questions can leave twenty or thirty misses, and the stored rationale
   explains the question rather than the mistake. This asks for the mistake: why the
   option you picked is wrong, and what the right one turns on. Ten at a time, because
   the misses that matter most are the ones you look at first. */
function askExamDebrief(q, g, done){
  if(q.debriefing) return;
  var want = g.missed.filter(function(i){ return !(q.debrief && q.debrief[i] !== undefined); }).slice(0, 10);
  if(!want.length) return;
  q.debriefing = true;
  q.debriefError = null;

  var missed = want.map(function(i){
    var qq = exQ(i);
    return { i:i, q:qq.q,
             chose: (qq.options[q.answers[i]] || "(no answer)"),
             right: (qq.options[qq.answerIndex] || ""),
             notes: qq.why || "" };
  });

  fetch("/api/grade", {
    method: "POST",
    headers: {"content-type":"application/json"},
    body: JSON.stringify({ course: q.course, week: 12, items: [], missed: missed })
  }).then(function(r){ return r.json(); }).then(function(d){
    q.debriefing = false;
    q.debrief = q.debrief || {};
    if(!d || !d.ok){ q.debriefError = (d && d.reason) || "The marker could not be reached."; done(); return; }
    (d.debrief || []).forEach(function(x){ q.debrief[x.i] = x.teach; });
    want.forEach(function(i){ if(q.debrief[i] === undefined) q.debrief[i] = ""; });
    examSave();
    done();
  }).catch(function(){
    q.debriefing = false;
    q.debriefError = "The marker could not be reached.";
    done();
  });
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
    q.showAll = !q.showAll; render();
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

  if(g.missed.length){
    var db = el("div","card");
    var pending = g.missed.filter(function(i){ return !(q.debrief && q.debrief[i] !== undefined); });
    db.appendChild(el("div","lbl","Why you missed them"));
    if(q.debriefing){
      db.appendChild(el("p","muted","Working through the ones you got wrong. A few seconds."));
      db.appendChild(el("div","gradebar"));
    } else if(q.debriefError){
      db.appendChild(el("p","muted", esc(q.debriefError) + " The stored explanation under each question still stands."));
      var rr = el("div","row");
      rr.appendChild(btn("act ghost","Try again", function(){ q.debriefError = null; askExamDebrief(q, g, function(){ render(); }); render(); }));
      db.appendChild(rr);
    } else if(pending.length){
      db.appendChild(el("p","muted","The explanation under each question says what the question is about. This says what went wrong with the option you actually chose."));
      var r2 = el("div","row");
      r2.appendChild(btn("act","Explain my " + Math.min(10, pending.length) + " worst" + (pending.length > 10 ? " (of " + pending.length + ")" : ""), function(){
        askExamDebrief(q, g, function(){ render(); });
        render();
      }));
      db.appendChild(r2);
    } else {
      db.appendChild(el("p","muted","Done — each miss below now says what went wrong with the option you chose."));
    }
    root.appendChild(db);
  }

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
      whyInto(e2, qq.why);
      box.appendChild(e2);
    }
    var dt = q.debrief && q.debrief[i];
    if(dt){
      var tb = el("div","teach");
      tb.appendChild(el("div","lbl","Why you missed it"));
      tb.appendChild(el("p", null, esc(dt)));
      box.appendChild(tb);
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
    idx:QUIZ.idx, submitted:QUIZ.submitted, at:Date.now(),
    /* Marking costs a request; losing it to a reload would cost another. */
    marked:QUIZ.marked, debrief:QUIZ.debrief, overrides:QUIZ.overrides,
    /* so that reopening the results never counts as sitting it again */
    logged:QUIZ.logged
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
function startQuiz(day, slot, fresh){
  slot = slot || "deep";
  var chk = checkFor(weekData(wk()), day, slot);
  if(!chk || !chk.questions || !chk.questions.length){ manualScore(day, slot); return; }
  var prev = quizRestore(wk(), day, slot);
  /* A finished attempt is kept so you can go back and read the explanations again —
     safe now that the score locked when you submitted, so re-reading cannot improve it.
     Starting a fresh sitting is an explicit choice, and it is always practice. */
  if(fresh){ quizClear(wk(), day, slot); prev = null; }
  var opts = (prev && prev.opts) || chk.questions.map(function(qq){
    return (qq.type === "mcq" && qq.options) ? shuffled(qq.options.length) : null;
  });
  QUIZ = {
    day:day, slot:slot, chk:chk, opts:opts,
    answers:(prev && prev.answers) || {},
    marks:(prev && prev.marks) || {},
    submitted:!!(prev && prev.submitted),
    idx:(prev && typeof prev.idx === "number") ? prev.idx : 0,
    marked:(prev && prev.marked) || null,
    debrief:(prev && prev.debrief) || null,
    overrides:(prev && prev.overrides) || 0,
    logged:(prev && prev.logged) || null,
    celebrated:false
  };
  BRIEF = false;
  TAB = "quiz"; render();
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
  return {t:"For the weekend", c:"b"};
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
    briefInto(bc, q.chk.topic, "muted");
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
  card.appendChild(el("div","qt", codeHtml(qq.q)));

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
    card.appendChild(el("p","muted","<br>Written answer. It gets marked after you submit, against what the question asked for — so say the thing, however roughly. Spelling and shorthand cost you nothing."));
  }

  var foot = el("div","deckfoot");
  if(q.idx > 0) foot.appendChild(btn("act ghost","Back", function(){ q.idx--; quizSave(); render(); }));
  foot.appendChild(el("div","spacer"));

  var gate = el("div","gate");
  foot.appendChild(gate);
  refreshGate = function(){
    var left = unanswered(q);
    countSpan.textContent = q.day + " · " + course + " · " + (n - left.length) + "/" + n;
    gate.innerHTML = "";
    if(!left.length){
      gate.appendChild(btn("act big","Submit all "+n, function(){
        q.submitted = true; q.idx = 0; quizSave(); render();
      }));
    } else if(q.idx < n-1){
      gate.appendChild(btn("act","Next", function(){ q.idx++; quizSave(); render(); }));
    } else {
      gate.appendChild(btn("act", left.length+" still blank", function(){
        q.idx = left[0]; toast("Question "+(left[0]+1)+" is blank"); quizSave(); render();
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

/* ---------- logging the score ----------
   The score is written the moment the marking lands, before a single correct answer is
   revealed. It used to be written by a Save button at the bottom of the results, which
   meant you could submit, read every answer and explanation, walk away without saving,
   and sit the same check again knowing the paper. The number is supposed to say how
   much you knew at 21:00 on a Tuesday, and a number you can decline after seeing the
   answers cannot say that.

   Retakes still run — reading the explanations and going again is most of the point —
   but the first, cold sitting is the score. Later attempts are kept alongside as a best,
   and it is the cold score that Sunday's topics and the week's course strip read. */
function logScore(q, g){
  var k = key(ME, wk(), q.day, q.slot);
  var prev = S.scores[k];
  var now = new Date().toISOString();
  if(prev && prev.at){
    S.scores[k] = {
      score: prev.score, max: prev.max, wrong: prev.wrong, at: prev.at,
      tries: (prev.tries || 1) + 1,
      best: Math.max(prev.best === undefined ? prev.score : prev.best, g.score),
      overrides: prev.overrides || 0,
      lastAt: now
    };
    return {cold:false, logged: g.score, kept: prev.score, max: g.max};
  }
  S.scores[k] = {score:g.score, max:g.max, wrong:g.wrong, at:now, tries:1};
  return {cold:true, logged: g.score, max: g.max};
}

/* Changing a mark yourself has to move the score, or the button is decoration and a
   marker that got one wrong stays wrong. It is recorded, and it is shown wherever the
   score is shown — a corrected mark should look different from one nobody touched. */
function relogAfterOverride(q, g, n){
  var k = key(ME, wk(), q.day, q.slot);
  var rec = S.scores[k];
  if(!rec) return;
  if(q.logged && q.logged.cold){
    rec.score = g.score; rec.wrong = g.wrong;
  }
  rec.best = Math.max(rec.best === undefined ? rec.score : rec.best, g.score);
  rec.overrides = (rec.overrides || 0) + 1;
  push("Mark changed");
}

/* ---------- marking the written answers ----------
   Sent as one request per check: every written answer, plus the multiple-choice ones
   that were missed so the debrief comes back in the same round trip. The result is
   cached on the attempt, so re-rendering the review does not re-mark it and money is
   spent once per check rather than once per repaint. */
function needsMarking(q){
  if(!q || !q.chk) return false;
  return q.chk.questions.some(function(qq, i){
    return !(qq.type === "mcq" && qq.options) && q.marks[i] === undefined;
  });
}

function askGrader(q, done){
  if(q.grading) return;
  q.grading = true;
  q.gradeError = null;

  var items = [], missed = [];
  q.chk.questions.forEach(function(qq, i){
    if(qq.type === "mcq" && qq.options){
      if(q.answers[i] !== qCorrect(q, i)){
        missed.push({ i:i, q:qq.q,
          chose: (qOptions(q, i)[q.answers[i]] || "(no answer)"),
          right: (qOptions(q, i)[qCorrect(q, i)] || ""),
          notes: qq.why || "" });
      }
    } else {
      items.push({ i:i, q:qq.q, notes: qq.why || qq.concept || "", answer: q.answers[i] || "" });
    }
  });
  if(!items.length && !missed.length){ q.grading = false; return; }

  var g = GRID.filter(function(x){ return x.day === q.day; })[0] || {};
  var course = q.slot === "fast" ? g.fast : g.deep;

  fetch("/api/grade", {
    method: "POST",
    headers: {"content-type":"application/json"},
    body: JSON.stringify({ course: course, week: wk(), items: items, missed: missed })
  }).then(function(r){ return r.json(); }).then(function(d){
    q.grading = false;
    if(!d || !d.ok){
      q.gradeError = (d && d.reason) || "The marker could not be reached.";
      done(); return;
    }
    q.marked = {};
    (d.marks || []).forEach(function(m){
      q.marked[m.i] = m;
      /* An unmarked item stays undefined so the save gate still catches it. */
      if(!m.unmarked) q.marks[m.i] = !!m.correct;
    });
    q.debrief = {};
    (d.debrief || []).forEach(function(x){ q.debrief[x.i] = x.teach; });
    q.gradeModel = d.model;
    quizSave();
    done();
  }).catch(function(){
    q.grading = false;
    q.gradeError = "The marker could not be reached.";
    done();
  });
}

function viewResult(root, q){
  /* Mark first, then show the score. Showing a score that is about to change would be
     worse than waiting three seconds for the real one. */
  if(needsMarking(q) && !q.gradeError){
    if(!q.grading) askGrader(q, function(){ if(TAB === "quiz" && QUIZ === q) render(); });
    if(q.grading){
      var wait = el("div","card deepc");
      wait.appendChild(el("div","lbl","Marking"));
      wait.appendChild(el("h2",null,"Reading your written answers"));
      wait.appendChild(el("p","muted","Each one is checked against what the question actually asked for. A few seconds."));
      wait.appendChild(el("div","gradebar"));
      root.appendChild(wait);
      return;
    }
  }

  var r = grade(q);

  /* Locked here, not at a button. Nothing below this line has been seen yet. */
  if(!r.unmarked && !q.logged){
    q.logged = logScore(q, r);
    quizSave();
    /* Before the push, not after: marking a course celebrated writes to the same store
       the score does, and doing it afterwards left the flag on this device only — so
       signing in anywhere else replayed every celebration you had already had. */
    maybeCelebrate(wk());
    push(q.logged.cold ? "Logged " + r.score + "/" + r.max : "Practice run saved");
  }

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

  /* Say plainly what went into the record, so a practice run is never mistaken for the
     score and the score is never something you thought you could still decline. */
  if(q.logged){
    var lg = el("div", "logline" + (q.logged.cold ? "" : " practice"));
    var ov = q.overrides
      ? " You have changed " + q.overrides + " mark" + (q.overrides === 1 ? "" : "s") + " yourself, which is recorded."
      : "";
    lg.innerHTML = q.logged.cold
      ? "<b>Logged " + r.score + "/" + r.max + ".</b> It went in when the marking landed, before any answer below was shown." + ov
      : "<b>Practice run.</b> Your logged score for this check is still " + q.logged.kept + "/" + q.logged.max
        + ", and that is the one Sunday reads. This attempt counts towards your best." + ov;
    root.appendChild(lg);
  }

  if(q.gradeError){
    var ge = el("div","card fastc");
    ge.appendChild(el("div","lbl","Marking unavailable"));
    ge.appendChild(el("p","muted", esc(q.gradeError) + " Mark the written answers yourself below and the score saves as normal."));
    var gr = el("div","row");
    gr.appendChild(btn("act ghost","Try marking again", function(){
      q.gradeError = null; q.marked = null;
      q.chk.questions.forEach(function(qq, i){ if(!(qq.type==="mcq"&&qq.options)) q.marks[i] = undefined; });
      render();
    }));
    ge.appendChild(gr);
    root.appendChild(ge);
  }

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
    mk.appendChild(el("p","muted","The marker could not be reached, so the written ones are yours to mark. The model answers and the multiple-choice results stay hidden until you have — marking after reading them would not be marking."));
    root.appendChild(mk);
  }

  if(r.wrong.length && !r.unmarked){
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
    var hush = r.unmarked;   /* nothing is revealed until the marking is settled */
    var box = el("div","rev "+((pending || hush) ? "" : (missed ? "miss" : "hit")));
    if(!pending && !hush) box.appendChild(el("span","tag "+(missed?"miss":"hit"), missed ? "Missed" : "Got it"));
    box.appendChild(el("div","rq", (i+1)+". "+esc(qq.q)));

    if(isMcq){
      var opts = el("div","opts");
      qOptions(q, i).forEach(function(opt, oi){
        var cls = "opt";
        /* While written answers are still unmarked, show what you picked and nothing
           more. Which one was right is part of what you would be marking yourself on. */
        if(!r.unmarked){
          if(oi === right) cls += " right";
          else if(q.answers[i] === oi) cls += " wrong";
        } else if(q.answers[i] === oi) cls += " chosen";
        var b = el("button", cls);
        b.disabled = true;
        b.innerHTML = '<span class="k">'+LETTERS[oi]+'</span><span>'+esc(opt)+'</span>';
        opts.appendChild(b);
      });
      box.appendChild(opts);
    } else {
      box.appendChild(el("div","yours","<b>You wrote:</b> "+esc(q.answers[i]||"(nothing)")));
    }

    if((qq.why || qq.concept) && !(r.unmarked && isMcq)){
      var e2 = el("div","expl");
      if(qq.concept) e2.appendChild(el("div","explc", "<b>" + codeHtml(qq.concept) + "</b>"));
      whyInto(e2, qq.why);
      e2.style.marginTop = "9px";
      box.appendChild(e2);
    }

    /* The marker's working, for the written answers. Shown in full rather than as a
       verdict alone: a mark you cannot see the reasoning behind is a mark you cannot
       tell is wrong. */
    var mk = q.marked && q.marked[i];
    if(!isMcq && mk && !mk.unmarked){
      var mb = el("div","mark" + (mk.correct ? " ok" : " no"));
      if(mk.verdict) mb.appendChild(el("p","mv", esc(mk.verdict)));
      if(mk.required && mk.required.length){
        var ul = el("ul","reqs");
        mk.required.forEach(function(rq, ri){
          var got = mk.met[ri];
          var li = el("li", got ? "y" : "n");
          /* The words from your own answer the marker used to decide. Without them a
             mark is an assertion; with them you can see whether it read you right. */
          var quote = mk.evidence && mk.evidence[ri];
          li.innerHTML = '<span class="rk">' + (got ? "✓" : "✕") + '</span>'
                       + '<span>' + esc(rq)
                       + (quote ? '<i class="rev-ev">you wrote: “' + esc(quote) + '”</i>' : '')
                       + '</span>';
          ul.appendChild(li);
        });
        mb.appendChild(ul);
      }
      if(!mk.confident){
        var warn = el("p","mwarn","This one was close to the line. If you think the mark is wrong, change it.");
        mb.appendChild(warn);
      }
      var over = el("div","row"); over.style.marginTop = "8px";
      over.appendChild(btn("act ghost tiny", mk.correct ? "I didn't get this" : "I did get this", function(){
        q.marks[i] = !q.marks[i];
        q.marked[i] = Object.assign({}, mk, {correct: q.marks[i], overridden: true,
          verdict: q.marks[i] ? "You marked this right yourself." : "You marked this wrong yourself."});
        q.overrides = (q.overrides || 0) + 1;
        relogAfterOverride(q, grade(q), q.overrides);
        quizSave(); render();
      }));
      mb.appendChild(over);
      box.appendChild(mb);
    }
    else if(!isMcq && q.marks[i] === undefined){
      var sm = el("div","selfmark");
      sm.appendChild(btn("act ghost","I got this", function(){ q.marks[i]=true; quizSave(); render(); }));
      sm.appendChild(btn("act ghost","I missed it", function(){ q.marks[i]=false; quizSave(); render(); }));
      box.appendChild(sm);
    }

    /* What the marker taught about this specific question. */
    var teach = (mk && mk.teach) || (q.debrief && q.debrief[i]) || "";
    if(teach){
      var tb = el("div","teach");
      tb.appendChild(el("div","lbl", missed ? "Why you missed it" : "Worth knowing"));
      tb.appendChild(el("p", null, esc(teach)));
      box.appendChild(tb);
    }
    root.appendChild(box);
  });

  var foot = el("div","row");
  foot.appendChild(btn("act big","Done", function(){
    quizClear(wk(), q.day, q.slot);
    QUIZ=null; TAB="home"; render();
  }));
  foot.appendChild(btn("act ghost", "Practise this again", function(){
    startQuiz(q.day, q.slot, true);
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
    MANUAL=null; TAB="tonight";
    maybeCelebrate(wk());
    save("Logged "+m.score+"/"+(m.max||12));
  }));
  r.appendChild(btn("act ghost","Cancel", function(){ MANUAL=null; TAB="tonight"; render(); }));
  c.appendChild(r);
  root.appendChild(c);
}

/* ---------- the celebration ----------
   Finishing a course for the week is the only milestone in here that is worth a noise,
   so it gets one: the Lottie in the middle of the screen and confetti across the page.
   It fires once per course per week — the marker on the week grid is what remains. */
var LOTTIE = null, PARTY = false;

function loadLottie(){
  if(window.lottie) return Promise.resolve(window.lottie);
  if(LOTTIE) return LOTTIE;
  /* Served from the app, not a CDN: this is a PWA and the celebration should still
     happen on a bad connection or with no connection at all. 168 KB, loaded the first
     time a course is finished and never again. */
  LOTTIE = new Promise(function(res, rej){
    var t = document.createElement("script");
    t.src = "lottie.min.js";
    t.onload = function(){ res(window.lottie); };
    t.onerror = function(){ LOTTIE = null; rej(); };
    document.head.appendChild(t);
  });
  return LOTTIE;
}

/* Paper across the whole page, independent of the Lottie so the celebration still
   reads as one even when the CDN is unreachable. */
function paperStorm(host){
  var COLS = ["#6C4DF6","#F2B705","#26C281","#FF6B6B","#3AA0FF","#FF8FD1"];
  var n = Math.min(120, Math.round(window.innerWidth / 4));
  for(var i = 0; i < n; i++){
    var b = document.createElement("i");
    b.className = "conf";
    var size = 6 + Math.random() * 7;
    b.style.cssText =
      "left:" + (Math.random() * 100) + "vw;" +
      "width:" + size + "px;height:" + (size * (0.4 + Math.random())) + "px;" +
      "background:" + COLS[i % COLS.length] + ";" +
      "animation-delay:" + (Math.random() * 0.6).toFixed(2) + "s;" +
      "animation-duration:" + (2.2 + Math.random() * 1.8).toFixed(2) + "s;" +
      "--spin:" + Math.round(360 + Math.random() * 900) + "deg;" +
      "--drift:" + Math.round(-140 + Math.random() * 280) + "px;" +
      (Math.random() < 0.35 ? "border-radius:50%;" : "");
    host.appendChild(b);
  }
}

function courseParty(course, w, tally){
  if(PARTY) return;
  PARTY = true;

  var ov = el("div","party");
  ov.innerHTML =
    '<div class="pbox">'
  +   '<div class="plot" id="plotbox"></div>'
  +   '<div class="lbl">Week ' + w + ' · finished</div>'
  +   '<h2>' + esc(NAMES[course] || course) + '</h2>'
  +   '<p class="muted">' + (tally.max
        ? 'Every session for this course is scored. ' + tally.got + ' out of ' + tally.max + '.'
        : 'Every session for this course is scored.') + '</p>'
  + '</div>';
  document.body.appendChild(ov);
  paperStorm(ov);
  celebrate();   /* the canvas burst as well, so the page itself reacts */

  var close = function(){
    if(!ov.parentNode) return;
    ov.classList.add("out");
    setTimeout(function(){ if(ov.parentNode) ov.remove(); PARTY = false; }, 260);
  };
  ov.onclick = close;
  setTimeout(close, 4200);

  loadLottie().then(function(lot){
    var host = document.getElementById("plotbox");
    if(!host || !ov.parentNode) return;
    var anim = lot.loadAnimation({
      container: host, renderer: "svg", loop: false, autoplay: true,
      path: "confetti.json"
    });
    ov.addEventListener("click", function(){ try{ anim.destroy(); }catch(e){} });
  }).catch(function(){
    /* If the player will not load, take its 230 px back rather than leaving a hole. */
    var host = document.getElementById("plotbox");
    if(host) host.style.display = "none";
  });
}

/* The flame, full screen, when a streak lands.
   Deliberately quicker and quieter than the course confetti: a streak happens often and
   a four-second interruption every morning would become something to dismiss rather
   than something to enjoy. */
function fireParty(n, what){
  if(PARTY) return;
  PARTY = true;

  var ov = el("div","party fire");
  ov.innerHTML =
    '<div class="pbox">'
  +   '<div class="plot" id="firebox"></div>'
  +   '<div class="lbl">' + esc(what || "streak") + '</div>'
  +   '<h2>' + n + ' day' + (n === 1 ? "" : "s") + ' running</h2>'
  +   '<p class="muted">Come back tomorrow and it is ' + (n + 1) + '.</p>'
  + '</div>';
  document.body.appendChild(ov);

  var close = function(){
    if(!ov.parentNode) return;
    ov.classList.add("out");
    setTimeout(function(){ if(ov.parentNode) ov.remove(); PARTY = false; }, 260);
  };
  ov.onclick = close;
  setTimeout(close, 3000);

  loadLottie().then(function(lot){
    var host = document.getElementById("firebox");
    if(!host || !ov.parentNode) return;
    var anim = lot.loadAnimation({
      container: host, renderer: "svg", loop: true, autoplay: true,
      path: "fire.json"
    });
    ov.addEventListener("click", function(){ try{ anim.destroy(); }catch(e){} });
  }).catch(function(){
    var host = document.getElementById("firebox");
    if(host) host.style.display = "none";
  });
}
/* The small version: the flame in the stats row catches for a moment. Used where a
   full-screen takeover would be too much — every ordinary day of a streak. */
function litStreak(){
  setTimeout(function(){
    var s = document.getElementById("streakstat");
    if(!s) return;
    s.classList.add("lit");
    setTimeout(function(){ s.classList.remove("lit"); }, 1000);
  }, 120);
}

/* Called after every score is written. */
function maybeCelebrate(w){
  var due = newlyFinished(w);
  if(!due.length) return;
  var course = due[0];
  var tally = courseTally(ME, w, course);
  due.forEach(function(c){ markCelebrated(w, c); });
  setTimeout(function(){ courseParty(course, w, tally); }, 260);
}

/* ============================================================================
   DRILLS
   ============================================================================

   The evening check is the spine of the week and it is graded work: one sitting, a
   cold score, and it decides whether the week advances. That is the right shape for
   an hour at 21:00 and the wrong shape for five minutes on a bus.

   So this is the other thing. Ten multiple-choice questions from a separate bank of
   1260, drawn from the weeks you have actually studied and weighted towards what you
   have been getting wrong. Instant feedback on every question, because the point is to
   learn the idea now rather than to measure you. Its own score, its own streak, and
   nothing it does touches the marks that count — you can sit it four times before
   breakfast without moving a single grade.

   It is not enforced. There is no penalty for a day you skip; the streak simply starts
   again, which is the only pressure that belongs on something optional.             */

var DRILLBANK = {};      /* week -> the published bank for that week */
var DRILLLOAD = {};      /* week -> true while in flight */
var DRILL = null;        /* the sitting in progress */
var DRILLSEEN = "miva_drillseen_v1";   /* per-device, for variety only */
var DRILLN = 10;

/* ---------- what has been sat ---------- */
function drillKey(d){ return ME + "|drill|" + d; }
function drillDay(d){ return S.scores[drillKey(d)] || null; }
function drillToday(){ var t = today(); t.setHours(0,0,0,0); return drillDay(ymd(t)); }

/* Every drill day, newest first. */
function drillDays(){
  if(!ME) return [];
  var pre = ME + "|drill|", out = [];
  Object.keys(S.scores).forEach(function(k){
    if(k.indexOf(pre) !== 0) return;
    var v = S.scores[k];
    if(v && typeof v.n === "number") out.push({on: k.slice(pre.length), n: v.n, of: v.of || DRILLN, missed: v.missed || []});
  });
  out.sort(function(a, b){ return a.on < b.on ? 1 : -1; });
  return out;
}
/* Consecutive days ending today or yesterday. Unlike the study streak this one counts
   Sundays: a drill is five minutes and there is no reason a Sunday should break it. */
function drillStreak(){
  var days = {};
  drillDays().forEach(function(d){ days[d.on] = true; });
  var d = today(); d.setHours(0,0,0,0);
  if(!days[ymd(d)]) d.setDate(d.getDate() - 1);
  var n = 0, guard = 0;
  while(guard++ < 400 && days[ymd(d)]){ n++; d.setDate(d.getDate() - 1); }
  return n;
}
function drillRecent(days){
  var cut = today(); cut.setHours(0,0,0,0); cut.setDate(cut.getDate() - (days - 1));
  var lim = ymd(cut), got = 0, of = 0, sat = 0;
  drillDays().forEach(function(d){
    if(d.on < lim) return;
    got += d.n; of += d.of; sat++;
  });
  return {got: got, of: of, sat: sat, ratio: of ? got / of : null};
}
function drillTotal(){
  var got = 0, of = 0;
  drillDays().forEach(function(d){ got += d.n; of += d.of; });
  return {got: got, of: of, ratio: of ? got / of : null};
}
/* Concepts the drills themselves keep catching, most recent first.

   Windowed on purpose. A list that never forgets is a list that only ever grows, and a
   topic you sorted out in week 3 would still be sitting there in week 11 telling you
   you are bad at it. Only the last `days` drill days count, so the way to leave this
   list is to stop missing the thing. */
function drillWeak(days){
  var seen = {}, out = [], n = 0, lim = days || 21;
  drillDays().forEach(function(d){
    if(n++ >= lim) return;
    (d.missed || []).forEach(function(c){
      var k = String(c).trim();
      if(!k || seen[k]) return;
      seen[k] = true; out.push(k);
    });
  });
  return out;
}

/* ---------- the bank ---------- */
function ensureDrills(w){
  if(!w || w < 1 || w > 12 || DRILLBANK[w] || DRILLLOAD[w]) return;
  DRILLLOAD[w] = true;
  fetch("/api/drills?n=" + w).then(function(r){ return r.ok ? r.json() : null; })
    .then(function(d){
      DRILLLOAD[w] = false;
      if(d && d.courses){ DRILLBANK[w] = d; render(); }
    })
    .catch(function(){ DRILLLOAD[w] = false; });
}
/* The weeks a drill may draw from: everything you have sat something in, plus the week
   the calendar is on. Drilling week 9 in week 2 would be testing you on material you
   have not been taught, which is not difficulty, it is noise. */
function drillWeeks(){
  var set = {}, cal = weekInfo().n;
  if(cal >= 1 && cal <= 12) set[cal] = true;
  for(var w = 1; w <= 12; w++){
    if(ME && slotsFor(w).some(function(x){ return getScore(ME, w, x.day, x.slot); })) set[w] = true;
  }
  var out = Object.keys(set).map(Number).sort(function(a, b){ return a - b; });
  return out.length ? out : [1];
}
function drillReady(){
  return drillWeeks().some(function(w){ return !!DRILLBANK[w]; });
}

/* You and your partner must never sit the same questions on the same day.

   There is no server to coordinate through and no reason to add one: the bank is
   fixed, both of you know today's date, and both of you know the roster. So the split
   is computed rather than negotiated. Every question falls on one side of a partition
   decided by a hash of its id and today's date, and you only ever draw from your side.

   Two properties matter. It is *disjoint*: two people can never be handed the same
   question on the same day, whichever order you sit them in and whether or not you are
   online. And it *rotates*: the date is in the hash, so the half of the bank you get is
   different tomorrow, and nobody is quietly locked out of half the material for a term.

   Alone, there is no partition — half a bank for no reason is just less practice. */
function hash32(str){
  var h = 2166136261;
  for(var i = 0; i < str.length; i++){
    h ^= str.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h >>> 0;
}
/* Sorted ids, so both devices agree on who is 0 and who is 1 without asking. */
function myLane(){
  var ids = S.people.map(function(p){ return p.id; }).sort();
  if(ids.length < 2) return {i: 0, of: 1};
  var i = ids.indexOf(ME);
  return {i: i < 0 ? 0 : i, of: ids.length};
}
function inMyLane(id, on){
  var lane = myLane();
  if(lane.of < 2) return true;
  return hash32(id + "|" + on) % lane.of === lane.i;
}

function seenMap(){
  try{ return JSON.parse(localStorage.getItem(DRILLSEEN) || "{}") || {}; }catch(e){ return {}; }
}
function markSeen(ids){
  try{
    var m = seenMap(), now = Date.now();
    ids.forEach(function(id){ m[id] = now; });
    /* Keep the map from growing without bound — a fortnight of history is all the
       variety rule ever reads. */
    var cut = now - 14 * 86400000;
    Object.keys(m).forEach(function(k){ if(m[k] < cut) delete m[k]; });
    localStorage.setItem(DRILLSEEN, JSON.stringify(m));
  }catch(e){}
}

/* Loose matching, because the bank and the checks were written from the same summaries
   by different hands: "Direct substitution" and "Substituting directly into a
   polynomial" are the same weakness and should pull the same questions. */
function conceptEcho(a, b){
  var norm = function(s){
    return String(s || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/)
      .filter(function(w){ return w.length > 3 && ["with","from","that","this","into","when","what","which","their","using","the"].indexOf(w) < 0; });
  };
  var x = norm(a), y = norm(b);
  if(!x.length || !y.length) return false;
  var hit = 0;
  x.forEach(function(w){ if(y.indexOf(w) >= 0) hit++; });
  return hit >= 2 || (hit === 1 && Math.min(x.length, y.length) <= 2);
}

/* Choose the questions.

   Weighted sampling, not a shuffle. What you are weakest at should come up more often
   without ever being the only thing that comes up: a drill that only ever asked about
   your worst course would stop telling you anything about the rest, and there is no
   faster way to make someone stop opening it. */
function drillDraw(n){
  var weeks = drillWeeks().filter(function(w){ return !!DRILLBANK[w]; });
  if(!weeks.length) return [];

  var mast = ME ? masteryFor(ME) : [];
  var acc = {}, missedBy = {};
  mast.forEach(function(m){
    acc[m.course] = m.ratio;
    missedBy[m.course] = (m.missed || []).map(function(x){ return x.name; });
  });
  var dweak = drillWeak();
  var seen = seenMap(), now = Date.now();

  var t0 = today(); t0.setHours(0,0,0,0);
  var on = ymd(t0);

  var pool = [];
  weeks.forEach(function(w){
    var cs = DRILLBANK[w].courses || {};
    Object.keys(cs).forEach(function(c){
      (cs[c] || []).forEach(function(q, i){
        if(!q || !q.options || q.options.length < 2) return;
        var id = w + ":" + c + ":" + i;
        if(!inMyLane(id, on)) return;      /* today, this one belongs to the other of you */
        var wt = 1;

        /* A course you are behind on. null means never sat — worth asking about, but
           not treated as a weakness you have demonstrated. */
        var r = acc[c];
        if(r !== null && r !== undefined){
          if(r < 0.5) wt *= 2.6;
          else if(r < 0.7) wt *= 1.9;
          else if(r < 0.83) wt *= 1.3;
          else wt *= 0.75;
        }
        /* A concept the evening checks caught. */
        if((missedBy[c] || []).some(function(m){ return conceptEcho(m, q.concept); })) wt *= 2.2;
        /* A concept the drills themselves keep catching. */
        if(dweak.some(function(m){ return conceptEcho(m, q.concept); })) wt *= 1.8;
        /* Recently asked. Not banned — a question you got wrong two days ago is worth
           asking again — just pushed down the list. */
        var last = seen[id];
        if(last){
          var age = (now - last) / 86400000;
          wt *= age < 1 ? 0.06 : (age < 3 ? 0.3 : (age < 7 ? 0.6 : 0.9));
        }
        /* This week, and the week before it, are what you are actually being taught. */
        var cal = weekInfo().n;
        if(w === cal) wt *= 1.5;
        else if(w === cal - 1) wt *= 1.2;

        pool.push({id: id, week: w, course: c, wt: wt, q: q});
      });
    });
  });
  if(!pool.length) return [];

  var out = [];
  for(var k = 0; k < n && pool.length; k++){
    /* Never the same course twice running: the drill should feel like the week, not
       like a single-subject test. */
    var lastCourse = out.length ? out[out.length - 1].course : null;
    var elig = pool.filter(function(x){ return x.course !== lastCourse; });
    if(!elig.length) elig = pool;

    var total = 0;
    elig.forEach(function(x){ total += x.wt; });
    var r = Math.random() * total, pick = elig[elig.length - 1];
    for(var i = 0; i < elig.length; i++){ r -= elig[i].wt; if(r <= 0){ pick = elig[i]; break; } }
    out.push(pick);
    pool = pool.filter(function(x){ return x.id !== pick.id; });
  }
  return out;
}

/* ---------- a sitting ---------- */
/* ---------- everything you got wrong, brought to you ----------

   The rule this follows: never point at work, hand it over.

   Catch-up used to be a paragraph saying "sit last week's seven question sets", then a
   list of ten rows you had to tap through one at a time. Both are the app telling you
   to go and find something it is already holding. It knows which questions you missed,
   because every score records the concepts it caught you on, so it can just build the
   deck.

   What goes in, in order:
     1. Every question you got wrong. All of them, across every session of that week.
     2. Then a spot-check of ones you got right, because the seven-day gap is testing
        whether it STAYED learned, and only re-asking your misses would never find the
        thing that quietly faded.
   Capped, because a deck of forty at 22:00 is a deck nobody finishes. */
var CATCHN = 15;

function weekDeck(w, opts){
  opts = opts || {};
  var wd = WEEKS[w];
  if(!wd) return null;                       /* caller decides what to say while loading */
  var missed = [], held = [];

  slotsFor(w).forEach(function(x){
    var sc = getScore(ME, w, x.day, x.slot);
    if(!sc) return;
    var chk = checkFor(wd, x.day, x.slot);
    if(!chk || !chk.questions) return;
    var wrong = {};
    (sc.wrong || []).forEach(function(c){ wrong[String(c).trim()] = true; });

    chk.questions.forEach(function(q, i){
      /* Short-answer questions are marked by the AI against your own words; they cannot
         be re-sat as a tap. Only the multiple-choice ones can come back here. */
      if(q.type !== "mcq" || !q.options) return;
      var item = {id: w + ":" + x.day + ":" + x.slot + ":" + i, week: w, course: x.course, q: q};
      if(wrong[String(q.concept || "").trim()]){ item.tag = "you missed this"; missed.push(item); }
      else held.push(item);
    });
  });

  if(!missed.length && !held.length) return [];

  /* Your misses all go in. The spot-check is sampled, so two Saturdays running do not
     ask the same "did it stay learned" questions. */
  shuffle(held);
  var room = Math.max(0, (opts.size || CATCHN) - missed.length);
  var deck = missed.concat(held.slice(0, room));
  shuffle(deck);
  deck.missedCount = missed.length;
  deck.heldCount = Math.min(room, held.length);
  return deck;
}

/* Roughly forty seconds a question: read it, answer it, read why. A bad week can put
   twenty-four in front of you and it is only fair to say so before you start. */
function deckMins(n){
  var m = Math.max(1, Math.round(n * 40 / 60));
  return "about " + m + " min";
}

function shuffle(a){
  for(var i = a.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* Did you already sit this week's catch-up? */
function catchKey(w){ return ME + "|catchup|w" + w; }
function catchDone(w){ return S.scores[catchKey(w)] || null; }

/* ---------- a deck you sit, whatever fed it ----------

   Three things now put questions in front of you: the morning drill, Saturday's
   catch-up, and the Friday review. They differ in where the questions come from and in
   what gets written down afterwards. They do not differ at all in how you sit them:
   one question, tap, find out why, next.

   So they share the runner and carry a `kind`. The alternative was three near-identical
   loops that would drift apart the first time one of them was improved. */
function startDeck(kind, picked, meta){
  if(!picked || !picked.length){ toast("Nothing to sit here yet."); return; }
  DRILL = {
    kind: kind,
    meta: meta || {},
    items: picked.map(function(p){
      var opts = p.q.options.map(function(t, i){ return {t: t, right: i === p.q.answerIndex}; });
      for(var i = opts.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1)), t = opts[i]; opts[i] = opts[j]; opts[j] = t;
      }
      return {id: p.id, week: p.week, course: p.course, tag: p.tag || "", q: p.q, opts: opts, chose: null};
    }),
    i: 0, right: 0, done: false, at: new Date().toISOString()
  };
  QUIZ = null; MANUAL = null; BUDDY = null;
  syncUrl(); render();
}

function startDrill(){
  var picked = drillDraw(DRILLN);
  if(!picked.length){ toast("The drill bank has not loaded yet."); return; }
  DRILL = {
    kind: "drill",
    items: picked.map(function(p){
      /* Shuffle the options. The bank spreads its answer letters, but a bank sat over
         and over would still teach position, and this costs nothing. */
      var opts = p.q.options.map(function(t, i){ return {t: t, right: i === p.q.answerIndex}; });
      for(var i = opts.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1)), t = opts[i]; opts[i] = opts[j]; opts[j] = t;
      }
      return {id: p.id, week: p.week, course: p.course, q: p.q, opts: opts, chose: null};
    }),
    i: 0, right: 0, done: false, at: new Date().toISOString()
  };
  markSeen(DRILL.items.map(function(x){ return x.id; }));
  TAB = "drill"; QUIZ = null; MANUAL = null; BUDDY = null;
  syncUrl(); render();
}

function answerDrill(k){
  var it = DRILL.items[DRILL.i];
  if(it.chose !== null) return;
  it.chose = k;
  if(it.opts[k].right) DRILL.right++;
  render();
}
function nextDrill(){
  if(DRILL.i < DRILL.items.length - 1){ DRILL.i++; render(); return; }
  finishDrill();
}

/* Writing the result.

   A day's record is its BEST sitting, and only the first sitting of the day creates it.
   Going again can improve the number but never invents a second day, so the streak is
   a count of days you turned up rather than of times you tapped Start. */
function finishDrill(){
  DRILL.done = true;

  /* A catch-up or a review is practice on work already graded. It records that you sat
     it and how it went, and it touches nothing else: not the cold score from last week,
     not the drill streak, not the mark total. */
  if(DRILL.kind === "catchup" || DRILL.kind === "review"){
    if(DRILL.kind === "catchup" && DRILL.meta.week){
      S.scores[catchKey(DRILL.meta.week)] =
        {n: DRILL.right, of: DRILL.items.length, at: DRILL.at};
    }
    save(false);
    render();
    return;
  }

  var t = today(); t.setHours(0,0,0,0);
  var on = ymd(t), prev = drillDay(on), before = drillStreak();

  var missed = DRILL.items.filter(function(x){ return x.chose === null || !x.opts[x.chose].right; })
    .map(function(x){ return String(x.q.concept || "").slice(0, 110); })
    .filter(Boolean).slice(0, 10);

  var rec = {
    n: prev ? Math.max(prev.n, DRILL.right) : DRILL.right,
    of: DRILLN,
    at: prev && prev.at ? prev.at : DRILL.at,
    sits: (prev && prev.sits ? prev.sits : 0) + 1,
    missed: missed
  };
  S.scores[drillKey(on)] = rec;

  var after = drillStreak();
  DRILL.gained = !prev;
  DRILL.streak = after;
  var goalsHit = sweepGoals();
  save(false);

  /* One celebration, not three. A streak milestone outranks an ordinary day, and a
     completed goal outranks both. */
  if(goalsHit.length) setTimeout(function(){ goalParty(goalsHit[0]); }, 300);
  else if(!prev && MILESTONES.indexOf(after) >= 0) setTimeout(function(){ fireParty(after, "drill streak"); }, 300);
  else if(!prev && after > before) litStreak();
}
var MILESTONES = [3, 7, 14, 21, 30, 50, 75, 100, 150, 200];

/* ---------- goals ----------
   Four kinds, and every one of them is computed live from what is already stored. No
   goal keeps a snapshot of where you were when you set it, because a snapshot is a
   thing that can be wrong, and a goal that quietly disagrees with the numbers beside it
   is worse than no goal at all.

   The app proposes; you accept, adjust the number, or send it away. */
var GOALKINDS = {
  streak: {
    icon: function(){ return FLAME; },
    label: function(g){ return "Drill " + g.target + " days running"; },
    hint: "Any day you sit a drill counts, Sundays included.",
    unit: "days", min: 3, max: 60, step: 1,
    now: function(){ return drillStreak(); },
    fmt: function(v){ return v + " day" + (v === 1 ? "" : "s"); },
    pick: function(v){ return v + " days"; },
    fire: true
  },
  acc: {
    icon: function(){ return ICO_TARGET; },
    label: function(g){ return "Hold " + g.target + "% on drills"; },
    hint: "Across every drill of the last seven days.",
    unit: "%", min: 50, max: 100, step: 5,
    now: function(){ var r = drillRecent(7); return r.ratio === null ? 0 : Math.round(r.ratio * 100); },
    fmt: function(v){ return v + "%"; },
    ready: function(){ return drillRecent(7).sat >= 2; }
  },
  week: {
    icon: function(){ return ICO_CAL; },
    label: function(g){ return "Finish " + g.target + " of this week's " + deepSlots(); },
    hint: "The first hour each night, Monday to Friday.",
    unit: "nights", min: 2, max: 6, step: 1,
    now: function(){ return ME ? deepDone(ME, wk()) : 0; },
    fmt: function(v){ return v + " of " + deepSlots(); },
    pick: function(v){ return v + " night" + (v === 1 ? "" : "s"); }
  },
  /* The only goal where a smaller number is the good one. Your weak list is whatever
     the drills of the last week caught; clearing something means going a week without
     missing it again, which is a real thing to aim at rather than an average. */
  topics: {
    icon: function(){ return ICO_BOLT; },
    label: function(g){ return "Get down to " + g.target + " weak topic" + (g.target === 1 ? "" : "s"); },
    hint: "Anything the drills caught in the last seven days. Stop missing it and it drops off.",
    unit: "topics", min: 0, max: 12, step: 1, invert: true,
    now: function(){ return drillWeak(7).length; },
    fmt: function(v){ return v + " topic" + (v === 1 ? "" : "s"); },
    ready: function(){ return drillWeak(7).length > 0; }
  },
  course: {
    icon: function(){ return ICO_BOLT; },
    label: function(g){ return "Get " + (NAMES[g.course] || g.course) + " to " + g.target + "%"; },
    hint: "Your average across every check sat in that course.",
    unit: "%", min: 50, max: 95, step: 5,
    now: function(g){
      var m = ME ? masteryFor(ME) : [];
      var f = m.filter(function(x){ return x.course === g.course; })[0];
      return (f && f.ratio !== null) ? Math.round(f.ratio * 100) : 0;
    },
    fmt: function(v){ return v + "%"; }
  }
};
function goalSlug(g){ return g.kind + (g.course ? ":" + g.course : ""); }
/* A number you are part-way through adjusting, before you have committed to it.

   This has to live outside the card that draws it. The app re-renders on its own — a
   week's bank landing, a sync finishing — and a target held in the button's closure was
   silently reset to the proposed default every time that happened, which looks exactly
   like the app refusing to take your input. */
var GOALDRAFT = {};
function goalKey(g){ return ME + "|goal|" + goalSlug(g); }
function goalFrom(slug, v){
  var bits = String(slug).split(":");
  return {kind: bits[0], course: bits[1] || null, target: v.target, done: !!v.done, off: !!v.off, at: v.at || ""};
}
function goals(){
  if(!ME) return [];
  var pre = ME + "|goal|", out = [];
  Object.keys(S.scores).forEach(function(k){
    if(k.indexOf(pre) !== 0) return;
    var g = goalFrom(k.slice(pre.length), S.scores[k]);
    if(GOALKINDS[g.kind] && !g.off) out.push(g);
  });
  return out;
}
function goalIsOff(kind, course){
  var v = S.scores[ME + "|goal|" + kind + (course ? ":" + course : "")];
  return !!(v && v.off);
}
function goalProgress(g){
  var k = GOALKINDS[g.kind];
  var now = k.now(g), met, pct;
  if(k.invert){
    /* Down from wherever you started, so the bar fills as the number falls. Starting
       point is the goal's own target plus whatever you are over it by, which keeps the
       bar honest without storing a snapshot that could go stale. */
    met = now <= g.target;
    pct = met ? 1 : Math.max(0, Math.min(1, g.target / Math.max(1, now)));
  } else {
    met = now >= g.target;
    pct = g.target ? Math.min(1, now / g.target) : 0;
  }
  /* "14 days of 7 days" is what you get from one readout doing both jobs. Once a goal is
     met the interesting number is what you are at, with the target as a footnote. */
  /* "2 topics of 1 topic" is what one readout doing three jobs produces. Each state
     gets its own sentence: climbing to a number, coming down to one, or done. */
  var text;
  if(met) text = k.fmt(now) + " · target was " + k.fmt(g.target);
  else if(k.invert) text = k.fmt(now) + " · down to " + k.fmt(g.target);
  else text = k.fmt(now) + " of " + k.fmt(g.target);
  return {now: now, pct: pct, met: met, text: text};
}
function setGoal(g){
  S.scores[goalKey(g)] = {target: g.target, done: !!g.done, at: g.at || new Date().toISOString(), off: !!g.off};
}
/* Mark anything newly reached, and hand back what just landed so it can be celebrated
   once rather than every time the page draws. */
function sweepGoals(){
  var hit = [];
  goals().forEach(function(g){
    if(g.done) return;
    if(goalProgress(g).met){ g.done = true; setGoal(g); hit.push(g); }
  });
  return hit;
}
/* What to offer. Only things that are true right now: no "get MTH 102 to 80%" before
   you have sat a single MTH 102 check, and no accuracy target before there are drills
   to average. */
function goalIdeas(){
  var have = {};
  goals().forEach(function(g){ have[goalSlug(g)] = true; });
  var out = [];
  var offer = function(kind, course, target){
    var slug = kind + (course ? ":" + course : "");
    if(have[slug] || goalIsOff(kind, course)) return;
    var k = GOALKINDS[kind];
    if(k.ready && !k.ready()) return;
    var draft = GOALDRAFT[slug];
    out.push({kind: kind, course: course, target: (typeof draft === "number") ? draft : target});
  };

  /* Order matters: only three are shown at a time, and dismissing one brings the next
     up. Most concrete first — a named list of topics you can actually go and fix beats
     a percentage — with the streak leading because it is the one that gets you to open
     the page tomorrow. */
  var st = drillStreak();
  offer("streak", null, st >= 7 ? Math.min(60, (Math.floor(st / 7) + 1) * 7) : 7);

  var wk7 = drillWeak(7).length;
  if(wk7 > 1) offer("topics", null, Math.max(0, Math.floor(wk7 / 2)));

  var m = ME ? masteryFor(ME) : [];
  var sat = m.filter(function(x){ return x.ratio !== null; });
  if(sat.length){
    var worst = sat[0];
    var pc = Math.round(worst.ratio * 100);
    offer("course", worst.course, Math.min(95, Math.max(60, Math.ceil((pc + 10) / 5) * 5)));
  }
  if(ME && deepDone(ME, wk()) < deepSlots() && !onRunway()) offer("week", null, deepSlots());

  var r = drillRecent(7);
    /* Eight points above where you are, and never above 90: a target you cannot plausibly
     hit this week is not a goal, it is a reason to stop looking at the page. */
  var base = r.ratio === null ? 80 : Math.min(90, Math.max(60, Math.ceil((r.ratio * 100 + 8) / 5) * 5));
  offer("acc", null, base);

  return out.slice(0, 3);
}

function goalParty(g){
  var k = GOALKINDS[g.kind];
  if(k.fire){ fireParty(GOALKINDS.streak.now(), "goal reached"); return; }
  if(PARTY) return;
  PARTY = true;
  var ov = el("div","party");
  ov.innerHTML = '<div class="pbox"><div class="plot" id="plotbox"></div>'
    + '<div class="lbl">Goal reached</div><h2>' + esc(k.label(g)) + '</h2>'
    + '<p class="muted">' + esc(k.hint) + '</p></div>';
  document.body.appendChild(ov);
  paperStorm(ov);
  celebrate();
  var close = function(){
    if(!ov.parentNode) return;
    ov.classList.add("out");
    setTimeout(function(){ if(ov.parentNode) ov.remove(); PARTY = false; }, 260);
  };
  ov.onclick = close;
  setTimeout(close, 3800);
  loadLottie().then(function(lot){
    var host = document.getElementById("plotbox");
    if(!host || !ov.parentNode) return;
    var anim = lot.loadAnimation({container: host, renderer: "svg", loop: false, autoplay: true, path: "confetti.json"});
    ov.addEventListener("click", function(){ try{ anim.destroy(); }catch(e){} });
  }).catch(function(){
    var host = document.getElementById("plotbox");
    if(host) host.style.display = "none";
  });
}

/* ---------- the drills page ---------- */
function viewDrill(root){
  drillWeeks().forEach(ensureDrills);

  if(DRILL && !DRILL.done){ drillRunner(root); return; }
  if(DRILL && DRILL.done){ drillResult(root); return; }

  var st = drillStreak(), tdy = drillToday(), all = drillTotal(), r7 = drillRecent(7);

  var stats = el("div","stats");
  var s1 = el("div","stat flame");
  s1.id = "streakstat";
  s1.innerHTML = '<div class="si">'+FLAME+'</div><div class="v">'+st+'</div><div class="k">drill streak</div>';
  stats.appendChild(s1);
  var s2 = el("div","stat drill");
  s2.innerHTML = '<div class="si">'+ICO_TARGET+'</div>'
    + (r7.ratio === null
        ? '<div class="v none">0</div>'
        : '<div class="v">' + Math.round(r7.ratio*100) + '<span style="font-size:15px;color:var(--ink3)">%</span></div>')
    + '<div class="k">last 7 days</div>';
  stats.appendChild(s2);
  var s3 = el("div","stat marks");
  s3.innerHTML = '<div class="si">'+ICO_STAR+'</div><div class="v">'+all.got+'</div><div class="k">drills right</div>';
  stats.appendChild(s3);
  root.appendChild(stats);

  /* the start card */
  var c = el("div","card deepc");
  c.appendChild(el("div","lbl", tdy ? "Today · already sat" : "Today's drill"));
  c.appendChild(el("h2", null, tdy ? tdy.n + " out of " + tdy.of : DRILLN + " quick questions"));
  var weeks = drillWeeks();
  c.appendChild(el("p","muted", tdy
    ? "Your best today. Going again can raise it, and cannot lower it — the streak is already yours."
    : "Multiple choice, straight after each answer you find out why. Nothing here touches your marks."));

  var meta = el("div","drillmeta");
  meta.appendChild(el("span", null, "drawn from week" + (weeks.length > 1 ? "s " : " ")
    + (weeks.length > 3 ? weeks[0] + "–" + weeks[weeks.length-1] : weeks.join(", "))));
  if(st > 0) meta.appendChild(el("span","hot", FLAME + " " + st + " day" + (st===1?"":"s")));
  c.appendChild(meta);

  var row = el("div","row");
  var go = btn("act big", drillReady() ? (tdy ? "Go again" : "Start the drill") : "Loading the bank…", startDrill);
  go.disabled = !drillReady();
  row.appendChild(go);
  c.appendChild(row);
  root.appendChild(c);

  goalsSection(root);
  drillHistory(root);
}

function goalsSection(root){
  var live = goals(), ideas = goalIdeas();
  var c = el("div","card");
  c.appendChild(el("div","lbl","Goals"));

  if(!live.length && !ideas.length){
    c.appendChild(el("p","muted","Nothing to aim at yet. Sit a drill or two and this fills itself in."));
    root.appendChild(c);
    return;
  }
  if(!live.length) c.appendChild(el("p","muted","Nothing set. Below are the ones worth setting, going by where you actually are."));

  live.forEach(function(g){
    var k = GOALKINDS[g.kind], pr = goalProgress(g);
    var g1 = el("div","goal" + (pr.met ? " won" : ""));
    var top = el("div","gtop");
    top.appendChild(el("span","gi", k.icon()));
    top.appendChild(el("span","gl", esc(k.label(g))));
    if(pr.met) top.appendChild(el("span","gdone","done"));
    g1.appendChild(top);

    var barw = el("div","gbar");
    var fill = el("div","gfill" + (pr.met ? " met" : ""));
    fill.style.width = Math.round(pr.pct * 100) + "%";
    barw.appendChild(fill);
    g1.appendChild(barw);

    var ft = el("div","gfoot");
    ft.appendChild(el("span","gnum", esc(pr.text)));
    var acts = el("div","gacts");
    var mv = function(by){
      g.target = Math.max(k.min, Math.min(k.max, g.target + by));
      /* Raising the bar past where you are re-arms the celebration for the new one. */
      if(g.done && g.target > pr.now) g.done = false;
      setGoal(g); save(false);
    };
    var down = btn("gstep","−", function(){ mv(-k.step); });
    down.setAttribute("aria-label","Lower the target");
    var up = btn("gstep","+", function(){ mv(k.step); });
    up.setAttribute("aria-label","Raise the target");
    acts.appendChild(down);
    acts.appendChild(up);
    var drop = btn("gstep drop", "\u00d7", function(){
      g.off = true; setGoal(g); save(pr.met ? "Goal cleared" : "Goal dropped");
    });
    drop.setAttribute("aria-label","Remove this goal");
    acts.appendChild(drop);
    ft.appendChild(acts);
    g1.appendChild(ft);
    c.appendChild(g1);
  });

  ideas.forEach(function(g){
    var k = GOALKINDS[g.kind];
    var box = el("div","gidea");
    var top = el("div","gtop");
    top.appendChild(el("span","gi", k.icon()));
    top.appendChild(el("span","gl", esc(k.label(g))));
    box.appendChild(top);
    box.appendChild(el("p","ghint", esc(k.hint)));
    var row = el("div","gid2");
    var slug = goalSlug(g);
    var pick = k.pick || k.fmt;
    var num = el("span","gtarget", pick(g.target));
    var nudge = function(by){
      g.target = Math.max(k.min, Math.min(k.max, g.target + by));
      GOALDRAFT[slug] = g.target;
      num.textContent = pick(g.target);
    };
    var tweak = el("div","gtweak");
    var minus = btn("gstep","−", function(){ nudge(-k.step); });
    minus.setAttribute("aria-label","Lower the target");
    var plus = btn("gstep","+", function(){ nudge(k.step); });
    plus.setAttribute("aria-label","Raise the target");
    tweak.appendChild(minus);
    tweak.appendChild(num);
    tweak.appendChild(plus);
    row.appendChild(tweak);
    var acts = el("div","gacts");
    acts.appendChild(btn("act tiny", "Set it", function(){
      delete GOALDRAFT[slug];
      setGoal({kind:g.kind, course:g.course, target:g.target, done:false, off:false});
      sweepGoals();
      save("Goal set");
    }));
    acts.appendChild(btn("act tiny ghost", "Not now", function(){
      delete GOALDRAFT[slug];
      S.scores[ME + "|goal|" + slug] = {target: g.target, done: false, off: true, at: new Date().toISOString()};
      save(false);
    }));
    row.appendChild(acts);
    box.appendChild(row);
    c.appendChild(box);
  });
  root.appendChild(c);
}

function drillHistory(root){
  var days = drillDays().slice(0, 14);
  if(!days.length) return;
  var c = el("div","card");
  c.appendChild(el("div","lbl","The last fortnight"));
  var bars = el("div","dhist");
  bars.style.setProperty("--dhn", String(days.length));
  days.slice().reverse().forEach(function(d){
    var col = el("div","dhcol");
    var b = el("div","dhb" + (d.n / d.of >= 0.83 ? " g" : (d.n / d.of >= 0.5 ? " o" : " b")));
    b.style.height = Math.max(8, Math.round((d.n / d.of) * 46)) + "px";
    b.title = d.on + " · " + d.n + "/" + d.of;
    col.appendChild(el("div","dhv", String(d.n)));
    col.appendChild(b);
    col.appendChild(el("div","dhd", d.on.slice(8)));
    bars.appendChild(col);
  });
  c.appendChild(bars);

  var weak = drillWeak().slice(0, 5);
  if(weak.length){
    c.appendChild(el("div","lbl2","Kept catching you"));
    var ul = el("ul","misslist");
    weak.forEach(function(w){ ul.appendChild(el("li", null, esc(w))); });
    c.appendChild(ul);
  }
  root.appendChild(c);
}

/* One question at a time, answered by tapping, explained immediately. */
function drillRunner(root){
  var it = DRILL.items[DRILL.i], n = DRILL.items.length;
  var answered = it.chose !== null;

  var head = el("div","drhead");
  head.appendChild(el("span","drn",
    (DRILL.kind === "catchup" ? "catch-up " : (DRILL.kind === "review" ? "review " : ""))
    + (DRILL.i + 1) + " of " + n));
  var bar = el("div","drbar");
  var fill = el("div","drfill");
  fill.style.width = Math.round(((DRILL.i + (answered ? 1 : 0)) / n) * 100) + "%";
  bar.appendChild(fill);
  head.appendChild(bar);
  head.appendChild(el("span","drr", DRILL.right + " right"));
  root.appendChild(head);

  var c = el("div","qcard");
  var eye = el("div","qeyebrow", esc((NAMES[it.course] || it.course) + " · week " + it.week));
  if(it.tag) eye.appendChild(el("span","qtag", esc(it.tag)));
  c.appendChild(eye);
  var qt = el("div","qt", codeHtml(it.q.q));
  c.appendChild(qt);

  var opts = el("div","opts");
  it.opts.forEach(function(o, k){
    var cls = "opt";
    if(answered){
      if(o.right) cls += " right";
      else if(k === it.chose) cls += " wrong";
    }
    var b = el("button", cls);
    b.innerHTML = '<span class="k">' + "ABCD".charAt(k) + '</span><span class="ot">' + codeHtml(o.t) + '</span>';
    if(answered) b.disabled = true;
    else b.onclick = function(){ answerDrill(k); };
    opts.appendChild(b);
  });
  c.appendChild(opts);

  if(answered){
    var right = it.opts[it.chose].right;
    var why = el("div","drwhy" + (right ? " ok" : ""));
    why.appendChild(el("div","drv", right ? "Right" : "Not this one"));
    if(it.q.concept) why.appendChild(el("div","drc", codeHtml(it.q.concept)));
    whyInto(why, it.q.why);
    c.appendChild(why);
    makeSelectable(why);
  }
  root.appendChild(c);

  /* Sticky, not at the foot of the page. Answering a question adds a paragraph of
     explanation below it, which on a phone pushes Next off the bottom of the screen —
     so a ten-question drill becomes ten scrolls you did not ask for. */
  var foot = el("div","deckfoot drfoot");
  if(answered){
    foot.appendChild(btn("act big", DRILL.i < n - 1 ? "Next" : "Finish", nextDrill));
  } else {
    var skip = btn("act ghost", "Skip", function(){
      it.chose = -1;
      if(DRILL.i < n - 1){ DRILL.i++; } else { finishDrill(); }
      render();
    });
    foot.appendChild(skip);
  }
  root.appendChild(foot);
}

/* The end of a catch-up or a review. Same shape as a drill's, different words: nothing
   here moved a grade, and what it found is a list for Sunday. */
function deckResult(root, title){
  var n = DRILL.items.length, got = DRILL.right, pc = Math.round((got / n) * 100);
  var c = el("div","card " + (pc >= 83 ? "goodc" : (pc >= 50 ? "" : "badc")));
  c.appendChild(el("div","lbl", esc(title)));
  var big = el("div","drscore"); big.id = "deckscore";
  big.innerHTML = got + '<span class="of">/' + n + '</span>';
  c.appendChild(big);
  var stuck = DRILL.items.filter(function(x){ return x.tag && (x.chose === null || x.chose === -1 || !x.opts[x.chose].right); });
  var recovered = DRILL.items.filter(function(x){ return x.tag && x.chose !== null && x.chose !== -1 && x.opts[x.chose].right; });
  c.appendChild(el("p","muted",
    recovered.length
      ? "You got " + recovered.length + " of the " + (recovered.length + stuck.length)
        + " you had missed. " + (stuck.length ? stuck.length + " still catching you." : "None still catching you.")
      : "Nothing here changed a grade. It changed what you know."));
  var row = el("div","row");
  row.appendChild(btn("act big","Done", function(){ DRILL = null; render(); }));
  row.appendChild(btn("act ghost","Go again", function(){
    startDeck(DRILL.kind, DRILL.items.map(function(x){ return {id:x.id, week:x.week, course:x.course, tag:x.tag, q:x.q}; }), DRILL.meta);
  }));
  c.appendChild(row);
  root.appendChild(c);
  missedList(root, DRILL.items);
}

/* Every one you got wrong, with the answer. Shared by the drill and the decks. */
function missedList(root, items){
  var missed = items.filter(function(x){ return x.chose === null || x.chose === -1 || !x.opts[x.chose].right; });
  if(!missed.length) return;
  var m = el("div","card");
  m.appendChild(el("div","lbl", missed.length + " to look at"));
  missed.forEach(function(x){
    var b = el("div","drmiss");
    b.appendChild(el("div","drc", esc((NAMES[x.course] || x.course) + " · ") + codeHtml(x.q.concept || "")));
    b.appendChild(el("div","drq", codeHtml(x.q.q)));
    var ans = x.opts.filter(function(o){ return o.right; })[0];
    b.appendChild(el("div","dra", "<b>Answer</b> " + codeHtml(ans ? ans.t : "")));
    whyInto(b, x.q.why);
    makeSelectable(b);
    m.appendChild(b);
  });
  root.appendChild(m);
}

function drillResult(root){
  var n = DRILL.items.length, got = DRILL.right, pc = Math.round((got / n) * 100);
  var c = el("div","card " + (pc >= 83 ? "goodc" : (pc >= 50 ? "" : "badc")));
  c.appendChild(el("div","lbl","Drill done"));
  var big = el("div","drscore");
  big.id = "drillscore";
  big.innerHTML = got + '<span class="of">/' + n + '</span>';
  c.appendChild(big);
  c.appendChild(el("p","muted", pc >= 83
    ? "That is the level. Nothing here moved your marks — it moved what you know."
    : (pc >= 50 ? "Middling. The ones below are the ones to look at."
                : "A rough one, and that is what this is for. Nothing was graded.")));
  if(DRILL.gained){
    var s = el("div","drstreak");
    s.innerHTML = FLAME + '<b>' + DRILL.streak + ' day' + (DRILL.streak === 1 ? "" : "s") + ' running</b>';
    c.appendChild(s);
  }
  var row = el("div","row");
  row.appendChild(btn("act big","Go again", startDrill));
  row.appendChild(btn("act ghost","Done", function(){ DRILL = null; render(); }));
  c.appendChild(row);
  root.appendChild(c);

  missedList(root, DRILL.items);
  goalsSection(root);
}

/* ---------- the certifications page ---------- */
function viewCerts(root){
  var n = certCount(), g = certGrade(n);

  var top = el("div","card deepc");
  top.appendChild(el("div","lbl","MIVA-COS 111 · 1 unit"));
  top.appendChild(el("h2",null,"Technical Certification"));
  top.appendChild(el("p","muted","Earn real certifications on someone else's platform, then upload them all at once. The LMS progress bar counts three pages and none of them is the work."));

  var stats = el("div","stats");
  var mk = function(cls, icon, v, k){
    var d = el("div","stat " + cls);
    d.innerHTML = '<div class="si">'+icon+'</div><div class="v">'+v+'</div><div class="k">'+k+'</div>';
    return d;
  };
  stats.appendChild(mk("marks", ICO_STAR, n, "earned"));
  stats.appendChild(mk(n ? "week" : "flame", ICO_TARGET, n ? "yes" : "no", "minimum met"));
  stats.appendChild(mk("drill", ICO_BOLT, esc(g.label), "grade effect"));
  top.appendChild(stats);
  top.appendChild(el("p","muted", esc(g.say)));
  root.appendChild(top);

  /* the list */
  var c = el("div","card");
  c.appendChild(el("div","lbl","Recommended for BSc Computer Science"));
  c.appendChild(el("p","muted","Tick one when you hold the certificate. Anything outside this list still counts."));

  var body = el("div");
  var draw = function(){
    body.innerHTML = "";
    CERTS.concat(CERTEXTRA).forEach(function(x){
      var on = certDone(x.id), extra = x.id.indexOf("extra") === 0;
      var row = el("div","certrow" + (on ? " on" : "") + (extra ? " extra" : ""));
      /* The whole row is the target, not the 21px box. A tick you have to aim at is a
         tick you mis-tap, and the box on its own is well under a thumb. */
      var hit = btn("certhit", "", function(){ certSet(x.id, !on); certSave(); draw(); });
      hit.setAttribute("aria-pressed", on ? "true" : "false");
      hit.setAttribute("aria-label", (on ? "Untick " : "Tick ") + x.name);
      hit.appendChild(el("span","rwtick" + (on ? " on" : ""), on ? "\u2713" : ""));

      var mid = el("div","certmid");
      mid.appendChild(el("div","certn", esc(x.name)));
      var sub = x.vendor + (x.note ? " · " + x.note : "") + (on && certOn(x.id) ? " · earned " + certOn(x.id) : "");
      mid.appendChild(el("div","certv", esc(sub)));
      hit.appendChild(mid);
      row.appendChild(hit);

      if(x.href){
        var a = el("a","chip","Open \u2197");
        a.href = x.href; a.target = "_blank"; a.rel = "noopener";
        a.style.textDecoration = "none";
        row.appendChild(a);
      }
      body.appendChild(row);
    });
  };
  draw();
  c.appendChild(body);
  root.appendChild(c);

  /* What the grade rules actually say. Quoted, because the obvious question is "is
     three an A?" and the honest answer is that nobody published a number. */
  var r = el("div","card");
  r.appendChild(el("div","lbl","How it is graded"));
  var rq = el("blockquote","certquote");
  rq.appendChild(el("p", null, "Minimum Completion (1 certification): Pass grade (C). Additional Certifications: Grade improvements (B or A)."));
  rq.appendChild(el("cite", null, "Micro-Credential Student Handbook, page 5"));
  r.appendChild(rq);
  stepList(r, [
    "One certificate is a C. That is the whole minimum",
    "Two or more is where B and A live. No page anywhere says which number is which",
    "Off the recommended list is fine, as long as the vendor is an approved partner and you clear it with the lecturer first"
  ]);
  root.appendChild(r);

  /* the two things that are not a certificate */
  var w = el("div","card");
  w.appendChild(el("div","lbl","Then, and only when you are finished"));
  var steps = [
    {id:"reflection", label:"Write the reflection",
     detail:"300 to 500 words: what you learned and why it matters to your studies and career."},
    {id:"merged", label:"Merge every certificate into one PDF",
     detail:"They ask for a single file. Multiple uploads are allowed but must all go in the one submission."}
  ];
  var body2 = el("div");
  var draw2 = function(){
    body2.innerHTML = "";
    steps.forEach(function(x){
      var on = certDone(x.id);
      var row = el("div","certrow" + (on ? " on" : ""));
      var hit = btn("certhit", "", function(){ certSet(x.id, !on); certSave(); draw2(); });
      hit.setAttribute("aria-pressed", on ? "true" : "false");
      hit.setAttribute("aria-label", (on ? "Untick " : "Tick ") + x.label);
      hit.appendChild(el("span","rwtick" + (on ? " on" : ""), on ? "\u2713" : ""));
      var mid = el("div","certmid");
      mid.appendChild(el("div","certn", esc(x.label)));
      mid.appendChild(el("div","certv", esc(x.detail)));
      hit.appendChild(mid);
      row.appendChild(hit);
      body2.appendChild(row);
    });
  };
  draw2();
  w.appendChild(body2);
  root.appendChild(w);

  /* the one-shot submission, and the warning it deserves */
  var sub = el("div","card badc");
  sub.appendChild(el("div","lbl","The submission"));
  sub.appendChild(el("h2",null,"One shot, no edits"));
  var quote = el("blockquote","certquote");
  quote.appendChild(el("p", null, "You have only one opportunity to submit. Once submitted, your response cannot be edited, modified, or replaced."));
  quote.appendChild(el("cite", null, "MIVA-COS 111 submission instructions"));
  sub.appendChild(quote);
  stepList(sub, [
    "Do not submit until you have earned every certificate you intend to earn",
    "You may work across both semesters. There is no deadline this session",
    "Upload one merged PDF. The form carries an indemnity declaration",
    "A copy is emailed to you automatically"
  ]);

  var sdone = certDone("submitted");
  var row = el("div","row");
  if(sdone){
    row.appendChild(el("span","sc g","Submitted " + (certOn("submitted") || "")));
    row.appendChild(btn("act ghost","Not submitted after all", function(){
      certSet("submitted", false); certSave(); render();
    }));
  } else {
    var a = el("a","act big","Open the upload form \u2197");
    a.href = CERTLINKS.upload; a.target = "_blank"; a.rel = "noopener";
    a.style.textDecoration = "none";
    row.appendChild(a);
    var mark = btn("act ghost","I have submitted", function(){
      certSet("submitted", true); certSave(); render();
    });
    if(!n) mark.disabled = true;
    row.appendChild(mark);
  }
  sub.appendChild(row);
  if(!n && !sdone) sub.appendChild(el("p","muted","Nothing ticked above yet, so there is nothing to submit."));
  root.appendChild(sub);

  /* the course itself */
  var l = el("div","card");
  l.appendChild(el("div","lbl","On the LMS"));
  var links = el("div","row gapa");
  [["The course", CERTLINKS.course], ["Orientation", CERTLINKS.orientation],
   ["Full recommended list", CERTLINKS.list], ["Student handbook", CERTLINKS.handbook],
   ["Step-by-step walkthrough", CERTLINKS.walkthrough]].forEach(function(p){
    var a = el("a","chip", esc(p[0]) + " \u2197");
    a.href = p[1]; a.target = "_blank"; a.rel = "noopener";
    a.style.textDecoration = "none";
    links.appendChild(a);
  });
  l.appendChild(links);
  root.appendChild(l);
}

/* ---------- the week picker ----------
   A native <select> could not say the two things that matter here: which week the
   calendar is actually on, and that the runway is over. So this is a real listbox.

   On a phone it opens as a bottom sheet, because a thirteen-row menu hanging off a
   control in the top-right corner is a menu you read with your thumb over it. On a
   pointer device it is a popover under the button, which is what a mouse expects.
   Either way the same list, the same keys, the same markup. */
var WKMENU = null;

function weekOptions(){
  var cal = weekInfo(), loaded = loadedWeeks(), out = [];
  out.push({
    v: "runway",
    label: "Runway",
    badge: cal.n === 0 ? "now" : "over",
    sub: cal.n === 0
      ? cal.daysToStart + " day" + (cal.daysToStart === 1 ? "" : "s") + " until week 1"
      : "Ended when week 1 opened",
    off: cal.n !== 0
  });
  for(var i = 1; i <= 12; i++){
    out.push({
      v: i,
      label: "Week " + i,
      badge: cal.n === i ? "now" : "",
      sub: loaded.indexOf(i) >= 0 ? "" : "not published yet",
      off: false
    });
  }
  return out;
}

function pickWeek(v){
  QUIZ = null; MANUAL = null;
  /* A day you picked belongs to the week you picked it in. Carrying Thursday across
     into another week is the bug this whole day model exists to remove. */
  VIEWDAY = null;
  if(v === "runway"){ VIEWWEEK = 0; }
  else { VIEWWEEK = v; ensureWeek(v); }
  syncUrl(); render();
}

function closeWeekMenu(focusBack){
  if(!WKMENU) return;
  var m = WKMENU; WKMENU = null;
  /* The chevron points up while the menu is open, and it is aria-expanded that turns
     it. Only the open and close functions may set it: leaving that to the click
     handler meant closing by Escape or by tapping outside never turned it back. */
  if(m.anchor) m.anchor.setAttribute("aria-expanded", "false");
  document.removeEventListener("keydown", m.onKey, true);
  if(m.scrim) m.scrim.remove();
  m.box.classList.add("out");
  setTimeout(function(){ if(m.box.parentNode) m.box.remove(); }, 180);
  if(focusBack && m.anchor && document.contains(m.anchor)) m.anchor.focus();
}

/* Under the button, and nudged back on screen if it would hang off the edge. */
function placeWeekMenu(box, anchor){
  if(!box || !anchor || box.classList.contains("assheet")) return;
  var r = anchor.getBoundingClientRect();
  box.style.top = Math.round(r.bottom + 8) + "px";
  var w = box.offsetWidth || 264;
  box.style.left = Math.round(Math.max(10, Math.min(window.innerWidth - w - 10, r.right - w))) + "px";
}

function openWeekMenu(anchor){
  if(WKMENU){ closeWeekMenu(true); return; }
  if(anchor) anchor.setAttribute("aria-expanded", "true");
  var touch = !(window.matchMedia && window.matchMedia("(hover:hover)").matches);
  var opts = weekOptions();
  var cur = onRunway() ? "runway" : wk();

  var scrim = el("div","wkscrim");
  var box = el("div","wkmenu" + (touch ? " assheet" : ""));
  box.setAttribute("role","listbox");
  box.setAttribute("aria-label","Which week to show");

  if(touch) box.appendChild(el("div","grab"));
  var head = el("div","wkmhead","Show me");
  box.appendChild(head);

  var list = el("div","wkmlist");
  var rows = [];
  opts.forEach(function(o, i){
    var row = el("button","wkrow" + (o.v === cur ? " on" : "") + (o.off ? " off" : ""));
    row.setAttribute("role","option");
    row.setAttribute("aria-selected", o.v === cur ? "true" : "false");
    if(o.off) row.setAttribute("aria-disabled","true");
    row.innerHTML =
        '<span class="wkck">' + (o.v === cur ? "✓" : "") + '</span>'
      + '<span class="wkl"><b>' + esc(o.label) + '</b>'
      + (o.sub ? '<i>' + esc(o.sub) + '</i>' : '') + '</span>'
      + (o.badge ? '<span class="wkb ' + o.badge + '">' + esc(o.badge) + '</span>' : '');
    if(!o.off){
      row.onclick = function(){ closeWeekMenu(false); pickWeek(o.v); };
      rows.push(row);
    } else {
      row.tabIndex = -1;
      row.onclick = function(e){ e.preventDefault(); };
    }
    list.appendChild(row);
  });
  box.appendChild(list);

  scrim.onclick = function(){ closeWeekMenu(true); };
  document.body.appendChild(scrim);
  document.body.appendChild(box);

  if(!touch){
    placeWeekMenu(box, anchor);
  } else {
    dismissable(box, list, function(){ closeWeekMenu(true); });
  }

  /* Open on the row you are already on, so the current week is under your thumb and
     the arrow keys start from somewhere sensible. */
  var here = rows.filter(function(r2){ return r2.classList.contains("on"); })[0] || rows[0];
  if(here){
    here.focus({preventScroll:true});
    here.scrollIntoView({block:"nearest"});
  }

  var onKey = function(e){
    if(!WKMENU) return;
    var idx = rows.indexOf(document.activeElement);
    if(e.key === "Escape"){ e.preventDefault(); closeWeekMenu(true); return; }
    if(e.key === "ArrowDown" || e.key === "ArrowUp"){
      e.preventDefault();
      var n = idx < 0 ? 0 : idx + (e.key === "ArrowDown" ? 1 : -1);
      n = Math.max(0, Math.min(rows.length - 1, n));
      rows[n].focus(); rows[n].scrollIntoView({block:"nearest"});
      return;
    }
    if(e.key === "Home"){ e.preventDefault(); rows[0].focus(); rows[0].scrollIntoView({block:"nearest"}); return; }
    if(e.key === "End"){ e.preventDefault(); var l = rows.length-1; rows[l].focus(); rows[l].scrollIntoView({block:"nearest"}); return; }
    if(e.key === "Tab"){ e.preventDefault(); }        /* the menu is modal while it is open */
  };
  document.addEventListener("keydown", onKey, true);

  WKMENU = {box:box, scrim:scrim, anchor:anchor, onKey:onKey};
}

/* ---------- keeping your place ----------
   Every navigation used to end with window.scrollTo(0,0), so opening a study guide from
   a card halfway down the week and coming back put you at the top of the page, hunting
   for the row you had just tapped.

   Each screen now remembers where it was left. The position is saved when you navigate
   away and restored when you come back; a screen you have never been to has nothing
   stored and so opens at the top, which is what it did before.

   Two screens deliberately opt out, by returning null: the question decks. There you
   always want the top of the next question, never wherever you happened to be standing
   when you answered the last one. */
var SCROLLS = {}, SCROLLKEY = null, SETTLE = 0;

/* Positions are recorded from actual scrolling, never from a render. That distinction
   matters: a view whose content arrives over the network renders twice, and the first
   render is short, so reading the scroll position back at render time would file a 0
   over the place you were actually standing. */
/* performance.now(), not Date.now(): monotonic, and immune to the clock being changed
   under it. */
function nowMs(){
  try{ return performance.now(); }catch(e){ return +new Date(); }
}
function onScroll(){
  if(!SCROLLKEY || nowMs() < SETTLE) return;
  SCROLLS[SCROLLKEY] = window.pageYOffset || document.documentElement.scrollTop || 0;
}
window.addEventListener("scroll", onScroll, {passive:true});

function viewKey(){
  var w = VIEWWEEK || wk();
  if(TAB === "quiz"){
    if(!QUIZ) return "quiz";
    return QUIZ.submitted ? "quiz-result:" + QUIZ.day + ":" + QUIZ.slot : null;
  }
  if(TAB === "exam"){
    if(EXQUIZ && !EXQUIZ.submitted) return null;
    if(EXQUIZ) return "exam-result:" + EXQUIZ.course;
    if(EXVIEW) return "exam:" + EXVIEW.course + ":" + (EXVIEW.mode || "guide");
    return "exam";
  }
  /* A drill runner is a fresh screen every tap; restoring a scroll into one would put
     you halfway down question 4. */
  if(TAB === "drill")   return (DRILL && !DRILL.done) ? null : "drill";
  /* Each night of a week keeps its own place. */
  if(TAB === "tonight") return "tonight:" + w + ":" + dayIdx();
  if(TAB === "guide")   return "guide:" + ((GUIDEVIEW && GUIDEVIEW.course) || "") + ":" + w;
  if(TAB === "session") return "session:" + ((SESSION && SESSION.day) || "") + ":" + w;
  if(TAB === "manual")  return null;
  return TAB + ":" + w;
}

function applyScroll(){
  var k = viewKey();
  var y = (k && SCROLLS[k]) || 0;
  /* Our own scrolling must not be mistaken for yours. */
  SETTLE = nowMs() + 240;
  SCROLLKEY = k;
  window.scrollTo(0, y);
  if(y > 0){
    /* The page may still be growing — a font, an image, a card that has not finished.
       Put it back once more after layout, then leave it alone. */
    requestAnimationFrame(function(){ window.scrollTo(0, y); });
    setTimeout(function(){ window.scrollTo(0, y); }, 80);
  }
}

/* ---------- shell ---------- */
function render(){
  var root = document.getElementById("root");
  SCROLLKEY = null;          /* stop recording while the DOM is swapped out */
  clearSelPill();
  root.innerHTML = "";

  var wi = weekInfo();
  var bar = el("div","bar");
  var bin = el("div","barin");
  var brand = el("div","brand");
  brand.appendChild(el("h1",null,"Kaizen"));

  if(GATE === "open" && ME && findPerson(ME)){
    brand.appendChild(el("div","spacer"));
    var st = streak();
    if(st > 0) brand.appendChild(el("span","chip flame", FLAME+"<span>"+st+"</span>"));
    if(aheadOfCalendar()) brand.appendChild(el("span","chip","ahead"));
    if(SYNCING) brand.appendChild(el("span","chip","saving…"));
    else if(STORAGE === "none" || STORAGE === "error") brand.appendChild(el("span","chip","local"));

    /* The trigger. It says where you are and, when that is not where the calendar is,
       nothing else — the "now" badge only appears when the two agree, so its absence is
       itself the signal that you are looking at another week. */
    var cal = weekInfo(), here = onRunway(), curW = wk();
    var selw = el("span","wkwrap");
    var trig = el("button","wksel");
    trig.id = "wkbtn";
    trig.setAttribute("aria-haspopup","listbox");
    trig.setAttribute("aria-expanded","false");
    trig.title = "Which week you are looking at";
    trig.innerHTML = '<span class="wkv">' + (here ? "Runway" : "Week " + curW) + '</span>'
      + ((here ? cal.n === 0 : cal.n === curW) ? '<span class="wkb now">now</span>' : '');
    trig.onclick = function(e){
      e.stopPropagation();
      openWeekMenu(trig);
    };
    selw.appendChild(trig);
    brand.appendChild(selw);

    /* A cog, not a name. The name here used to sign you out on one tap, which is far
       too easy to do by accident when it sits beside the week selector. Switching
       people now lives behind Settings, and Home says who you are instead. */
    var cog = btn("chip cog"+(TAB==="data"?" on":""), COG, function(){
      QUIZ=null; MANUAL=null; TAB="data"; syncUrl(); render();
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
    /* Exam prep is end-of-semester work. Showing it from week 1 puts a hundred
       questions per course in front of you every night for three months, when the
       thing that matters tonight is tonight's check. It appears in week 12 and stays
       for revision and exam week; before that it lives in Settings. */
    var showExam = weekInfo().n >= 12 || TAB === "exam";
    /* The URL keys stay as they were, so old links and the home-screen shortcuts keep
       working; only what you read has changed. */
    var TABSET = [["home","Home"],["tonight","Study"],["drill","Drills"],["sunday","Weekend class"],["progress","Stats"],["certs","Certs"]];
    if(showExam) TABSET.push(["exam","Exam"]);
    TABSET.forEach(function(t){
      tabs.appendChild(btn(TAB===t[0]?"on":"", t[1], function(){
        QUIZ=null; MANUAL=null; if(t[0]!=="exam"){ EXVIEW=null; EXQUIZ=null; }
        /* Leaving the tab abandons a half-finished drill rather than freezing it —
           nothing was graded, and coming back to question 4 of a drill you walked away
           from three days ago is worse than starting a fresh one. */
        if(t[0]!=="drill") DRILL=null;
        TAB=t[0]; syncUrl(); render();
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
    SCROLLKEY = null; window.scrollTo(0, 0);
    return;
  }
  if(!ME || !findPerson(ME)){
    viewSignIn(wrap);
    root.appendChild(wrap);
    if(TOAST) root.appendChild(el("div","toast", esc(TOAST)));
    SCROLLKEY = null; window.scrollTo(0, 0);
    return;
  }
  if(TAB==="home") viewHome(wrap);
  else if(TAB==="tonight") viewTonight(wrap);
  else if(TAB==="week") viewWeek(wrap);
  else if(TAB==="sunday") viewSunday(wrap);
  else if(TAB==="progress") viewProgress(wrap);
  else if(TAB==="exam") viewExam(wrap);
  else if(TAB==="guide") viewGuide(wrap);
  else if(TAB==="session") viewSession(wrap);
  else if(TAB==="data") viewData(wrap);
  else if(TAB==="drill") viewDrill(wrap);
  else if(TAB==="certs") viewCerts(wrap);
  else if(TAB==="quiz") viewQuiz(wrap);
  else if(TAB==="manual") viewManual(wrap);
  root.appendChild(wrap);

  /* Kizito sits bottom-right and the drill's Next button is full width down there.
     A drill is a one-tap-per-question rhythm; a teddy in the way of the tap is the
     same mistake as during a check, so he steps out for both. */
  if(TAB !== "quiz" && !(TAB === "drill" && DRILL && !DRILL.done)) buddyButton(root);
  if(BUDDY) buddyPanel(root);
  if(TOAST) root.appendChild(el("div","toast", esc(TOAST)));

  applyScroll();
  armHello();

  /* The menu lives on <body>, but its anchor was just thrown away and rebuilt. Point it
     at the new button rather than closing: a background refresh — the LMS index landing,
     a sync finishing — used to dismiss the menu under your thumb, which on a slow
     connection is exactly when it would happen. */
  if(WKMENU){
    var nb = document.getElementById("wkbtn");
    if(nb){
      WKMENU.anchor = nb;
      nb.setAttribute("aria-expanded", "true");
      placeWeekMenu(WKMENU.box, nb);
    } else {
      closeWeekMenu(false);
    }
  }
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
var TABS_URL = {home:1, tonight:1, drill:1, certs:1, sunday:1, progress:1, exam:1, data:1, week:1, guide:1, session:1};

function readUrl(){
  var q;
  try{ q = new URLSearchParams(window.location.search); }catch(e){ return; }
  var t = q.get("tab");
  if(t && TABS_URL[t]) TAB = t;
  var wRaw = q.get("week");
  if(wRaw === "runway") VIEWWEEK = 0;
  var w = parseInt(wRaw, 10);
  if(w >= 1 && w <= 12) VIEWWEEK = w;
  var c = q.get("course");
  var dy = q.get("day");
  if(dy && TAB === "session" && GRID.some(function(x){ return x.day === dy; }))
    SESSION = {day: dy, week: (w>=1&&w<=12)?w:null, from:"home"};
  /* Which night you are reading survives a reload and a Back, the same as which week. */
  if(dy === "wknd") VIEWDAY = -1;
  else if(dy && TAB !== "session"){
    var at = GRID.map(function(x){ return x.day; }).indexOf(dy);
    if(at >= 0) VIEWDAY = at;
  }
  if(c && /^[A-Z]{3}_\d{3}$/.test(c)){
    if(TAB === "exam")  EXVIEW = {course:c, mode:"guide"};
    if(TAB === "guide") GUIDEVIEW = {course:c, week: (w>=1&&w<=12)?w:null, from:"tonight"};
  }
}

function syncUrl(replace){
  try{
    var q = new URLSearchParams();
    var t = (TAB === "quiz" || TAB === "manual") ? "tonight" : TAB;
    if(TABS_URL[t] && t !== "home") q.set("tab", t);
    if(VIEWWEEK === 0) q.set("week", "runway");
    else if(VIEWWEEK) q.set("week", String(VIEWWEEK));
    if(t === "guide" && GUIDEVIEW && GUIDEVIEW.course) q.set("course", GUIDEVIEW.course);
    if(t === "session" && SESSION && SESSION.day) q.set("day", SESSION.day);
    else if(t === "tonight" && VIEWDAY !== null && VIEWDAY !== undefined)
      q.set("day", VIEWDAY === -1 ? "wknd" : GRID[VIEWDAY].day);
    if(t === "exam" && EXVIEW && EXVIEW.course) q.set("course", EXVIEW.course);
    var s2 = q.toString();
    var next = window.location.pathname + (s2 ? "?" + s2 : "");
    if(next === window.location.pathname + window.location.search) return;
    window.history[replace ? "replaceState" : "pushState"]({tab:t, week:VIEWWEEK}, "", next);
  }catch(e){ /* an old browser just loses the niceness, not the app */ }
}

window.addEventListener("popstate", function(){
  QUIZ = null; MANUAL = null; BUDDY = null;
  /* Back must land on the URL you are going to, not on that URL plus whatever week and
     day happen to be left in memory. readUrl only ever sets these when the URL names
     them, so they are cleared first. */
  VIEWWEEK = null; VIEWDAY = null; DRILL = null;
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
  loadLms();
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
    return;
  }
  /* Leaving with a tick still inside its debounce would have kept it on this device
     until the next thing you saved. Send it now instead. */
  if(document.visibilityState === "hidden" && RWSYNC){
    clearTimeout(RWSYNC); RWSYNC = null;
    push();
  }
});

/* ---------- a handle for tests ----------
   Everything above is closed inside this function, which is how it should be: nothing
   on the page can reach in and move a score. But a browser test that can only see
   pixels ends up asserting on wording and spacing, and then breaks every time a label
   is reworded — so it gets one read-only window onto what the app believes.

   Read-only in the sense that matters: these are the same functions the views call, and
   there is no setter here. Nothing the app does depends on this object existing. */
window.KAIZEN = {
  code: codeHtml,
  deepSlots: deepSlots, slots: slotsFor,
  lane: myLane,
  laneOf: function(id, on){ return hash32(id + "|" + on) % 2; },
  /* Test hook: does a roster of this size partition at all? */
  lanePartitions: function(n){ return n >= 2; },
  render: render,
  streak: streak, marks: totalMarks,
  drillStreak: drillStreak, drillToday: drillToday, drillTotal: drillTotal,
  drillWeeks: drillWeeks, drillReady: drillReady, draw: drillDraw,
  goals: goals, goalProgress: goalProgress, goalIdeas: goalIdeas,
  weak7: function(){ return drillWeak(7); },
  day: function(){ return dayIdx(); }, week: function(){ return wk(); },
  drill: function(){ return DRILL; },
  scores: function(){ return S.scores; }
};

})();
