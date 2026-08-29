# MIVA 100L 2nd Semester — study data

Data repo for the weekly study automation and (later) the web platform.
Everything the Friday routine needs is in here, so it depends on no local
machine and no Claude Project.

```
source/week-01.md .. week-12.md   extracted text of all 205 course PDFs
packs/week-XX/                    generated pack for that week
  <COURSE>-Summary.md             one page, exam-oriented
  <COURSE>-Questions.md           12 MCQ + 3 short, sat a week LATER
  checks/<Day>-<COURSE>.md        12 questions, sat right after that session
  Sunday-Recap.md                 two fallback teaching topics
  week-XX.json                    machine-readable — see data-schema.md
packs/mock-midsemester/           Week 5 checkpoint: one timed paper per course
                                  over Weeks 1–4, plus a sitting/marking guide
data-schema.md                    the JSON contract
ROUTINE-PROMPT.md                 paste this into the routine form
```

Weeks 01–05 are generated and verified. Every check is 12 questions with
`maxScore` 12. Weeks 1–2 were originally generated at 6 and have since been
regenerated at 12, so the value is now uniform across the semester.

## The schedule this serves

Two hours every evening Mon–Sat: a deep hour at 1x, then a fast hour at 1.5–1.75x.

| Day | Deep hour (1x) | Fast hour (1.5–1.75x) |
|-----|----------------|------------------------|
| Mon | MTH 102 | GST 112 |
| Tue | PHY 102 | CSC 106 |
| Wed | COS 102 | GST 122 |
| Thu | MTH 102 problems | PHY 108 |
| Fri | PHY 102 problems | Review |
| Sat | COS 102 code | Catch-up |

Sunday 19:00–20:00: recap. One hour, two topics, one each — whichever check
each person scored lowest on. Same eight courses, so never both the same course.

Semester Week 1 opens Mon 7 Sep 2026. Twelve teaching weeks.

## Note on the source text

Extracted with `pdftotext -layout`. Some ligatures are dropped: "different"
appears as "dierent", "efficient" as "ecient". Readable in context.
