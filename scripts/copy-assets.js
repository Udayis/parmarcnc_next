const fs = require('fs-extra');
const path = require('path');

// Source and destination paths
const sourceDir = path.join(__dirname, '../../parmarCNC-main/src');
const destDir = path.join(__dirname, '../src');

// Copy components
fs.copySync(
  path.join(sourceDir, 'components'),
  path.join(destDir, 'components'),
  { overwrite: true }
);

// Copy images
fs.copySync(
  path.join(sourceDir, 'Images'),
  path.join(destDir, 'Images'),
  { overwrite: true }
);

// Copy font styles
fs.copySync(
  path.join(sourceDir, 'font_styles'),
  path.join(destDir, 'font_styles'),
  { overwrite: true }
);

console.log('Assets copied successfully!'); 