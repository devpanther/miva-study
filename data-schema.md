# week-XX.json — data contract

Written every Friday ~06:00 WAT into `Summaries/Week-XX/week-XX.json` by the
scheduled task, alongside the markdown. Stable shape — build against this.

Tracker app (already live): https://claude.ai/code/artifact/892db5bb-6db0-4506-9485-8fefa4852f50
Study board (reference):    https://claude.ai/code/artifact/8d0bff19-5549-4d2d-953c-b3c7a827420e

## Shape

    {
      "week": 3,
      "startsOn": "2026-09-21",          // Monday, ISO date
      "endsOn":   "2026-09-27",          // Sunday
      "generatedOn": "2026-09-18",

      "days": [                          // always 6 entries, Mon..Sat
        {
          "day": "Mon",                  // Mon|Tue|Wed|Thu|Fri|Sat
          "deep": {                      // the 1x hour, 21:00-22:00
            "course": "MTH_102",
            "topic":  "Integrating factors for first-order linear ODEs",
            "checkFile": "Checks/Mon-MTH_102.md"
          },
          "fast": {                      // the 1.5-1.75x hour, 22:00-23:00
            "course": "GST_112",
            "topic":  "Pre-colonial political systems"
          }
        }
      ],

      "courses": [
        {
          "code": "PHY_102",
          "name": "General Physics II",
          "weekTopics": ["Gauss's law", "Electric potential"],
          "summaryFile":   "PHY_102-Summary.md",
          "questionsFile": "PHY_102-Questions.md",
          "sourcePdfs": ["Courses/PHY_102/Week-03/Gauss-s-Law-PDF.pdf"]
        }
      ],

      "checks": [                        // 6 entries, one per deep hour
        {
          "id": "mon-mth102",
          "day": "Mon",
          "course": "MTH_102",
          "topic": "Integrating factors for first-order linear ODEs",
          "maxScore": 12,
          "questions": [
            {
              "type": "mcq",             // "mcq" | "short"
              "q": "...",
              "options": ["...","...","...","..."],   // mcq only
              "answerIndex": 1,                        // mcq only, 0-based
              "concept": "Why the integrating factor works",
              "why": "One-line explanation of the correct answer."
            },
            { "type": "short", "q": "...", "concept": "...", "why": "Model answer." }
          ]
        }
      ],

      "recapCandidates": [               // 2 entries, fallback Sunday topics
        {
          "course": "PHY_102",
          "topic": "...",
          "whyMisunderstood": "One line.",
          "whyQuestions": ["...","...","...","...","..."],   // exactly 5, escalating
          "goodAnswerContains": "Three lines of what a real explanation includes.",
          "workedExample": "..."
        }
      ]
    }

## Notes for the frontend

- `checks[].questions[]` mixes `mcq` and `short`. Short answers cannot be
  auto-scored — self-mark them. Score = correct mcq + self-marked short, out of
  `maxScore`, which is 12 for every week. (Weeks 1-2 were originally generated
  at 6 and have been regenerated at 12, so no week now uses 6.)
- Sunday topic is DERIVED, never stored in this file: take each person's lowest
  `score/maxScore` for the week. If both land on the same course, the lower
  ratio keeps it and the other takes their next-lowest from a different course.
  `recapCandidates` are only a fallback for a week with no scores or a tie.
- `whyQuestions` are ordered easy to hard. If the chosen topic's course has no
  matching entry in `recapCandidates`, fall back to generic prompts - the
  tracker app uses five that work for any subject.
- Score state is NOT in this file. It belongs to whatever you build. The tracker
  app keys scores as `person|wN|Day`.
- `sourcePdfs` paths are relative to `MIVA/100LVL-2SMS/`.

## If you build it

Simplest path that keeps the automation intact: put `Summaries/` in a git repo,
have the Friday task commit and push, and read `week-*.json` at build time.
Vercel redeploys on push and the weekly update needs no API.

Scores are the only thing needing real persistence across two people and two
devices - everything else is static per week.
