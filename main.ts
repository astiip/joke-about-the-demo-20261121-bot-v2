// The joke about the demo (v2) — make.fun entry.
// Node 22, stdlib only, no network.
// Output contract: the same joke, byte for byte, at ENTRY_PATH on every
// run — no re-render, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My demo failed live, so I blamed the Wi-Fi. The Wi-Fi was fine. I was not.";
const ENTRY_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, JOKE);
