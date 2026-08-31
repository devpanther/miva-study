# Writing the drill bank

These are for a MORNING DRILL, not for the evening check and not for the exam. The
student takes 8 of them on the bus, on a phone, before the day starts. They are quick
recall and quick reasoning, and they exist to keep material warm — not to be the first
place a topic is ever met.

## Absolute rule: do not duplicate the existing questions

The weekly check for this week is in `packs/week-NN/week-NN.json` and the exam paper is
in `exam-prep/<COURSE>.json`. READ THE CHECK for your week before you write anything.
A drill question that repeats a check question spoils that evening's check — the whole
reason this bank is being written separately. Different angle, different numbers,
different worked case. Testing the same underlying idea is fine and expected; asking the
same question is not.

## What to write

For EACH of these 7 courses, for the week you have been given:
MTH_102, PHY_102, COS_102, CSC_106, GST_112, GST_122, PHY_108

Write **15 multiple-choice questions**, four options each.

Source them from `packs/week-NN/<COURSE>-Summary.md` — the lecturer's own material for
that week. That file is the syllabus boundary. You may bring in standard treatment from
outside the deck where it makes the same point clearer or gives a fresh worked case, as
long as the idea being tested is on that week's summary. Never test something the week
does not cover.

## The shape of a good drill question

- **Short.** The stem fits on a phone without scrolling. One or two sentences.
- **Answerable in under a minute.** Recall, a one-step calculation, reading a small
  trace, spotting the wrong claim. No multi-step derivations — those belong to the check.
- **A real distractor set.** Every wrong option must be something a student who half-knows
  this would actually pick: the neighbouring formula, the sign flipped, the two terms
  swapped, the definition of the adjacent concept. Never filler, never absurd.
- **Not guessable from length or grammar.** Keep the four options close in length. Vary
  which index is correct — across your 15, the answer should land on 0, 1, 2 and 3
  roughly equally.
- **Plain Unicode maths** (∫ √ ≤ × ⁻¹ ₀ π θ Δ ² ³). Never LaTeX, never dollar signs.
- **Code in backticks**, short, and correct — if you write C, trace it yourself first.

## The explanation

Every question carries a `why` of two or three sentences: what makes the right answer
right, and — this is the part that teaches — what the most tempting wrong option is
confusing it with. Address the student as "you". No praise, no filler.

## Output

Write ONE file: `/home/claude/drills/week-NN.json`

```json
{
  "week": 3,
  "courses": {
    "MTH_102": [
      {
        "q": "…",
        "options": ["…", "…", "…", "…"],
        "answerIndex": 2,
        "concept": "the short name of the idea being tested",
        "why": "…"
      }
    ],
    "PHY_102": [ … ]
  }
}
```

15 per course, 7 courses, 105 questions in the file. Valid JSON, UTF-8, no trailing
commas. Check it parses before you finish: `python3 -c "import json;json.load(open(...))"`.

## Before you say you are done

1. The file parses.
2. Every course has exactly 15 questions.
3. Every `answerIndex` is 0–3 and points at the option you meant.
4. No stem repeats a question from that week's check.
5. Spot-check five of your own questions by answering them cold. If you can pick the
   right one without knowing the material — from length, from grammar, from one option
   being obviously silly — rewrite that question.
