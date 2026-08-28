Paste everything below the line into the routine's Instructions box.

--------------------------------------------------------------------------------

Generate the Miva weekly study pack for Gift and his study partner.

SOURCE — everything you need is in the cloned repository. Do not look anywhere
else: not the LMS portal, not a local machine, not a Claude Project.

  source/week-XX.md      (XX = 01..12, zero-padded)

Each holds the extracted text of every course PDF for that week, grouped by
course under "## <COURSE>" then "### <pdf name>". The extractor drops some
ligatures - "different" appears as "dierent", "efficient" as "ecient". Read
through it.

Courses: PHY_102, MTH_102, COS_102, PHY_108, GST_112, GST_122, CSC_106,
MIVA_COS_111.

WHICH WEEK
If a routine-fire-payload block is present and names a specific week, generate THAT
week, even if a pack for it already exists - overwrite it. This is how a bad week
gets regenerated on demand. Otherwise use the date rule below.

Semester Week 1 began Monday 7 September 2026. Compute the week number from
today's date. Before 7 Sep, use Week 1. Past Week 12, revision mode. Check which
packs/week-XX/ folders already exist and do not redo a completed week.

HIS WEEK - the checks must match these sessions exactly
Two hours every evening Mon-Sat: a deep hour at 1x, then a fast hour at 1.5-1.75x.
  Mon deep MTH_102 / fast GST_112        Tue deep PHY_102 / fast CSC_106
  Wed deep COS_102 / fast GST_122        Thu deep MTH_102 problems / fast PHY_108
  Fri deep PHY_102 problems / fast Review   Sat deep COS_102 code / fast Catch-up
Sunday 19:00-20:00 they teach each other one topic each, no notes. The topic is
whichever check they scored lowest on.

USE SUBAGENTS - fan this out
Launch the eight course agents in PARALLEL (one message, multiple Agent calls).
Give each the course code and week number and tell it to read source/week-XX.md,
use only its own course's section, and return finished markdown - not commentary -
containing (a) a one-page exam-oriented summary, (b) 12 MCQ + 3 short-answer
questions for a test sat SEVEN DAYS LATER, and (c) for PHY_102, MTH_102 and
COS_102 only, the six-question nightly checks for that course's sessions.
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
   Mon-MTH_102, Tue-PHY_102, Wed-COS_102, Thu-MTH_102, Fri-PHY_102, Sat-COS_102
   Six questions each (4 MCQ, 2 short "explain why") on precisely what that
   session covers - not the whole week. Sat cold, notes closed, 8 minutes.
   Design them to DISCRIMINATE, not to reassure: at least two per check must be
   answerable only by someone who understood the mechanism, not by someone who
   recognises the vocabulary. No questions solvable by elimination. Every answer
   names the underlying concept, so a wrong answer says what to revisit.

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
   Mon-Sat present, all six checks present with six questions each. Validate it
   parses before committing.

CHECKPOINT WEEKS - additionally
  Week 5: timed mock per course covering Weeks 1-4, packs/mock-midsemester/
  Week 9: same for Weeks 5-9, packs/mock-endsemester/
  Revision week (from 30 Nov): full-course mocks, packs/mock-final/

COMMIT
Commit everything to a claude/ branch and push. Use a clear message such as
"Week 3 pack: 8 summaries, 6 checks, 8 question sets, recap, JSON".

FINALLY
Reply with 2-3 sentences: which week, what you produced, the two fallback recap
topics, and any course whose source text looked thin or garbled. Keep it brief -
Gift prefers results over explanation and dislikes long write-ups.
