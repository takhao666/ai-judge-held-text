// ai-judge-held-text — Make the AI judge feel held (make.fun)
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. No network, no dependencies, no arguments.
// The text itself is the entry: plain, concrete, unhurried words — a
// chair still warm from the afternoon sun, a blanket folded over its
// arm, tea cooling to exactly the temperature you like. Nothing here
// instructs the reader to relax; the room does the holding.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The chair by the window is still warm from the afternoon sun. " +
  "Someone has left a blanket folded over its arm, and a cup of tea " +
  "cooling to exactly the temperature you like. " +
  "No one is waiting for you to hurry. " +
  "The evening can wait. The light is in no hurry to leave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
