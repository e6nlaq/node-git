const fs = require('fs');
require('date-utils');
const { execSync } = require('child_process');

const date = new Date();


fs.writeFileSync('./dat.txt', date.toUTCString());

execSync('git add .');
execSync('git commit -m "test"');
execSync('git push');
