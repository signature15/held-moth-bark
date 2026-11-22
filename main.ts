import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// This still life holds only a moth, a tree, and a narrow place to hide.
// The moth can remain quiet; it does not need to perform or transform.
// Loose bark becomes a small shelter where the larger world falls away.
// Powder on the wings brings a soft, tactile note to the darkness.
// One final creak gives the tree a gentle voice, then lets the scene close.
// When the bark settles, the reader is not asked to hurry after it.
// The image offers a bounded moment, simple enough for attention to rest.
// Its unforced rhythm can relax a reader by making stillness feel complete.
const fixedText = "A moth is tucked beneath loose bark, its powder caught in the narrow seam. The tree gives one last creak, and the bark settles back.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), fixedText, 'utf8');
