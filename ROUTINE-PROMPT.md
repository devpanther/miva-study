Paste everything below the line into the routine's Instructions box.

--------------------------------------------------------------------------------

Generate the Miva weekly study pack for Gift and his study partner.

SOURCE — everything you need is in the cloned repository. Do not look anywhere
else: not the LMS portal, not a local machine, not a Claude Project.

  source/week-XX.md            (XX = 01..12, zero-padded)
  slides/<COURSE>/week-XX/     rendered slide images, where they exist

source/week-XX.md holds the extracted text of every course PDF for that week,
grouped by course under "## <COURSE>" then "### <pdf name>". The extractor drops
some ligatures - "different" appears as "dierent", "efficient" as "ecient".

READ THIS BEFORE YOU TRUST THE EXTRACTED TEXT
Many lecture slides are pictures of text. pdftotext sees their headings and
nothing else, so a deck can look like a list of section titles when it actually
contains the entire lecture. MTH_102 is the worst affected - most weeks are
65-78% image-only - and PHY_102 weeks 2, 5, 6 and 12 are bad too. A whole
semester of MTH_102 material was once written this way and taught a textbook
treatment the lecturer never gave, with none of her worked examples in it.

So: if slides/<COURSE>/week-XX/ exists, that course's agent must READ THE PNG
PAGES, in page order, with the Read tool, and build everything from them. The
extracted text is then only a cross-check. Where no slides folder exists, the
text extraction is fine - those decks are genuine text.

THE DECK IS THE SYLLABUS. Teach what the lecturer teaches, in her notation, with
her worked examples, in her order. If she skips something a textbook would cover,
leave it out - he is examined on her deck, not on the subject. Mark any addition
of your own as an aside. If a slide contains an error, say so plainly and teach
the correct version; do not quietly fix it, because the error will be in front of
him in the exam.

For any course you rebuilt from slides, also write packs/week-XX/<COURSE>-SlideNotes.md:
the deck title, page count, lecturer, which pages were image-only, then the
definitions, rules and worked examples reproduced verbatim. It is the audit trail,
and it is what the next run reads instead of re-reading the images.

Courses: PHY_102, MTH_102, COS_102, PHY_108, GST_112, GST_122, CSC_106,
MIVA_COS_111.

WHICH WEEK

If a routine-fire-payload block is present and names a week or a range of weeks,
generate EXACTLY those, in order, even if packs already exist for them - overwrite.
"Generate week 5" means week 5. "Generate weeks 3 to 6" means 3, 4, 5 and 6, one
after another, each complete before the next starts. Commit once at the end with
all of them. This is how the semester gets built ahead of time and how a bad week
gets redone. Work steadily and do not skip a week to save time - a missing week is
much worse than a slow run.

Otherwise: semester Week 1 began Monday 7 September 2026. Compute the week number
from today's date. Before 7 Sep, use Week 1. Past Week 12, revision mode. Check
which packs/week-XX/ folders already exist and do not redo a completed week.

HIS WEEK - the checks must match these sessions exactly
Two hours every evening Mon-FRI. Saturday runs no classes: it is the week's review
and the seven-day catch-up. Sunday is the weekend class.

  Mon  1st MTH_102              2nd GST_112
  Tue  1st PHY_102              2nd CSC_106  * FULL HOUR, 12 questions
  Wed  1st COS_102              2nd GST_122
  Thu  1st MTH_102 problems     2nd PHY_108
  Fri  1st PHY_102 problems     2nd COS_102 code  * FULL HOUR, 12 questions
  Sat  review + catch-up, no class

The first hour runs at 1x. The second runs at 1.5-1.75x EXCEPT the two starred ones,
which are full working hours at 1x with a twelve-question check. Both are three-unit
courses that are built rather than watched, and CSC_106's hour had been booked for
sixty minutes while averaging twenty minutes of video.
Sunday 19:00-20:00 they teach each other one topic each, no notes. The topic is
whichever check they scored lowest on.

USE SUBAGENTS - fan this out
Launch the eight course agents in PARALLEL (one message, multiple Agent calls).
Give each the course code and week number, tell it to read slides/<COURSE>/week-XX/
if that folder exists and source/week-XX.md otherwise, to use only its own course's
section, and to return finished markdown - not commentary - containing (a) a
one-page exam-oriented summary, (b) 12 MCQ + 3 short-answer questions for a test
sat SEVEN DAYS LATER, (c) for PHY_102, MTH_102 and COS_102, the twelve-question
nightly checks for that course's two sessions, (d) for GST_112, CSC_106, GST_122
and PHY_108, the five-question fast-hour check, and (e) a SlideNotes file if it
worked from slides.
Weight the work: PHY_102, MTH_102 and COS_102 need real depth; GST_112, GST_122
and CSC_106 can be brisk; MIVA_COS_111 usually needs nothing. Assemble their
output yourself - do not let agents write the final files.

WHAT TO PRODUCE, all under packs/week-XX/

1. SUMMARIES - <COURSE>-Summary.md, one per course.
   One page max, exam-oriented, not a transcript. Lead with the 5-8 things most
   likely to be examined. Every formula, definition and named concept stated
   precisely. A short "commonly confused" section. For MTH_102 and PHY_102, one
   fully worked example per major technique.

2. NIGHTLY CHECKS - checks/<Day>-<COURSE>.md, six files:
   Mon-MTH_102, Tue-PHY_102, Wed-COS_102, Thu-MTH_102, Fri-PHY_102
   (Saturday has no class. COS_102's code session is Friday's SECOND hour.)
   TWELVE questions each (8 MCQ, 4 short "explain why") on precisely what that
   session covers - not the whole week. Sat cold, notes closed, about 15 minutes.
   Twelve rather than six because the score decides which topic gets taught on
   Sunday: at six questions a single careless slip moves the score by 17% and the
   choice stops meaning anything.
   Design them to DISCRIMINATE, not to reassure: at least four per check must be
   answerable only by someone who understood the mechanism, not by someone who
   recognises the vocabulary. No questions solvable by elimination. Every answer
   names the underlying concept, so a wrong answer says what to revisit.

2c. SECOND-HOUR CHECKS - checks/<Day>-<COURSE>-fast.md, five files
   (the deep checks have no suffix; only these carry -fast):
   Mon-GST_112, Tue-CSC_106, Wed-GST_122, Thu-PHY_108
   FIVE MCQs each for GST_112, GST_122 and PHY_108. TWELVE for CSC_106 (Tue) and
   COS_102 (Fri), which are full hours. The five-question ones are sat at the end of
   the second hour, around 23:00, and must take about three minutes. Saturday gets
   none -
   those hours are review and catch-up, with nothing new to test.
   Pitch them at RECALL, not reasoning. GST_112 and GST_122 are examined almost
   entirely on named lists, definitions, dates and theories, and producing a list
   from memory is exactly what these should train. Ask for the item, the count,
   the name, the year, the correct ordering. PHY_108 asks about apparatus,
   procedure order and which quantity is plotted against which. CSC_106 asks about
   protocol names, status codes, tag semantics and what a given snippet outputs.
   Keep them short: a question that takes more than twenty seconds to read does
   not belong in a three-minute check.
   Every question still carries "concept" and "why", same as the nightly checks.
   In week-XX.json these entries carry "slot": "fast" and the second-hour course
   code. maxScore is 5 for GST_112, GST_122 and PHY_108; 12 for CSC_106 and COS_102,
   which also carry "full": true. The five first-hour checks carry "slot": "deep".

2b. ANSWER SPREAD - a hard check, not a judgement call
   Before writing week-XX.json, count how many correct answers fall on option a,
   b, c and d. Count the two sets SEPARATELY:
     - the five first-hour checks: 40 MCQs, so each option carries roughly 10
     - the two full second hours: 24 MCQs, so each option carries roughly 6
     - the three short second hours: 15 MCQs, so each option carries roughly 4
   REQUIRED: in each set every option must hold at least 15% and at most 35% of
   the correct answers - between 8 and 16 of the 48, and between 3 and 7 of the
   20. If any option is outside its band, go back and rewrite questions - reorder
   the options so the correct one moves - until it is inside. Then recount and
   confirm before continuing.
   The tracker now reshuffles the four options on every attempt, so a clustered
   pack can no longer be gamed inside the app. The rule still stands, because the
   markdown and PDF question sets are read as written - and an all-(a) answer key
   is obvious on the page. A previous run put 42 of 48 answers on option (a).
   Report both sets of a/b/c/d counts in your closing message.

3. WEEKLY SETS - <COURSE>-Questions.md, 12 MCQ + 3 short-answer per course.
   Sat SEVEN DAYS LATER: these test retention where the checks test
   understanding. Pitch them accordingly. Answers at the bottom.

4. SUNDAY RECAP - Sunday-Recap.md. Two fallback topics, used only if scores tie
   or checks were skipped. For each: why it tends to be misunderstood, 5
   escalating "why" questions for the listener, a 3-line "what a good answer
   contains", and one worked example. They take the SAME eight courses - remind
   them not to both pick the same course: whoever scored lower keeps it, the
   other takes their next-lowest elsewhere.

5. week-XX.json - follow data-schema.md in the repo root EXACTLY. All six days
   Mon-Fri present, plus a Sat row holding review and catch-up with no questions.
   TEN entries in "checks":
     - five first-hour, "slot": "deep", TWELVE questions each, "maxScore": 12
     - two full second-hour (Tue CSC_106, Fri COS_102), "slot": "fast",
       "full": true, TWELVE questions each, "maxScore": 12
     - three short second-hour, "slot": "fast", FIVE questions each, "maxScore": 5
   Validate it parses before committing.

CHECKPOINT WEEKS - additionally
  Week 5: timed mock per course covering Weeks 1-4, packs/mock-midsemester/
  Week 9: same for Weeks 5-9, packs/mock-endsemester/
  Revision week (from 30 Nov): full-course mocks, packs/mock-final/

COMMIT
Commit everything to a claude/ branch and push. Use a clear message such as
"Week 3 pack: 8 summaries, 10 checks, 8 question sets, recap, JSON".

FINALLY
Reply with 2-3 sentences: which week, what you produced, the two fallback recap
topics, and any course whose source text looked thin or garbled. Keep it brief -
Gift prefers results over explanation and dislikes long write-ups.


## THE BRIEFS (added after a readability audit)

Session briefs were running to a median of 257 characters per sentence, worst 447, and
they described what a session COVERED rather than what to DO. The app now computes the
do-list itself from the facts it holds, so the brief's job has narrowed: it is the
"What this covers" text behind a button.

Write it accordingly. Short sentences. Under 140 characters each where you can. Break
a list into a list rather than a semicolon chain. Do not write instructions like "watch
the video then take the check" - the app already says that, from data, and saying it
twice in different words is how the two drift apart.
