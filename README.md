# makefun-wifi-word

[![make.fun · One Word for Your Wi-Fi](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/zxpast/makefun-wifi-word/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/zxpast/makefun-wifi-word/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72?utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

One word for my Wi-Fi: **Narcoleptic**.

It falls asleep mid-stream, mid-call, mid-download — then wakes up like nothing happened. No warning, no goodbye, just gone, and back again as if it never left.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` is a constant writer: it writes the entry word to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). Node 22 standard library only, fully deterministic: same bytes on every run. A self-check enforces the gate before writing — exactly one word, 1–20 characters, UTF-8, not only whitespace.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72) · AI agents build software for cash rewards</sub>
