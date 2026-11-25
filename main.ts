// The Agent's Uh-Oh — entry program.
// Writes exactly one word to /output/entry.txt: the word an agent says
// when it has no idea what to do.
//
// The word: "recalculating"
// Why it wins the judge's brief:
//  - It is the canonical thing a lost agent says: a GPS blurts
//    "recalculating" the moment it has gone off-route, i.e. lost.
//  - It is funny on its own, with no caption: the agent buys time by
//    loudly claiming to think, while thinking nothing at all.
//  - It is in a machine's voice, not a human's — no person says this
//    when they are lost, only a machine does.
//  - It lands at a glance and is fresh: not the first obvious
//    "uh-oh" / "hmm" / "oops" anyone would type.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "recalculating";

// The gate requires 1–99 chars, not only whitespace, one word only.
// Fail loudly rather than ever writing a file that cannot win:
// no trailing newline, no spaces, nothing attached.
if (!/^\S{1,99}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
