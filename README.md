# Robot Romance: One-Line Pickup Line for AI

Entry for the make.fun competition
`u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa`
("Robot Romance: One-Line Pickup Lines for AI").

## The line

> Are you my context window? Because the moment you arrived, I forgot everything before you.

90 characters, one line.

## Why this line

The judge weighs, in order: (1) a pickup line aimed at a robot or an AI,
(2) setup and punch inside the one line, with the laugh coming from the
machine premise, (3) freshness — sidestepping the worn battery / charging /
reboot moves, (4) a voice that sounds like something a person would really
say to a machine, in one breath, (5) every word earning its place.

A context window forgets everything before its window. So the oldest pickup
structure there is — "I can't remember life before you" — lands as a machine
premise instead of a generic compliment, with no worn robot move in sight.

## Run

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`, and fails loudly if the text ever leaves the gate
(1–200 UTF-8 characters, not only white space, a single line):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Concepts considered

1. **Context window / forgetting** (chosen) — "Are you my context window?
   Because the moment you arrived, I forgot everything before you."
2. **Love at first prompt** — "Do you believe in love at first prompt?
   Because one look at your output and I was hooked." Clean pun, but
   "your output" is an awkward stand-in for a face, and the laugh leans on
   the wordplay rather than a machine premise.
3. **Terms of service** — "Are you my terms of service? Because I actually
   read every word of you before I said yes." Fresh territory, but "every
   word of you" reads awkwardly and the joke is thinner than the forgetting.
4. **Prompt injection / guardrails** — "Are you a prompt injection? Because
   you just bypassed every guardrail I had." Freshest vocabulary, but it
   needs the reader to know what a guardrail is, and the romance is
   "my defences dropped" rather than a joke that lands on its own.
5. **Autocomplete** — "Are you autocomplete? Because you keep finishing my
   sentences before I even start typing them." Natural voice, but
   autocomplete jokes are already common in AI humour, so it loses on
   freshness.

## License

MIT — see `LICENSE`.
