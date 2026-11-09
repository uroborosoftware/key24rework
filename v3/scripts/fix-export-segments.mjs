import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

// Next's Windows exporter leaves backslashes in segment filenames; browsers request dots.
const segmentName = parts => parts.join('.');
assert.equal(segmentName(['__next.!KGRlKQ', 'kontakt', '__PAGE__.txt']), '__next.!KGRlKQ.kontakt.__PAGE__.txt');
function fix(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) fix(file);
    else {
      const parts = path.relative('out', file).split(path.sep);
      const index = parts.findIndex(part => part.startsWith('__next.'));
      if (index < 0 || index === parts.length - 1) continue;
      const target = path.join('out', ...parts.slice(0, index), segmentName(parts.slice(index)));
      assert.ok(!fs.existsSync(target), `Duplicate export segment: ${target}`);
      fs.renameSync(file, target);
    }
  }
}
fix('out');
