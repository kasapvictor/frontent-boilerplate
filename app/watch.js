import * as fs from 'fs';

import { execSync } from 'child_process';


fs.watch('./src', (eventType, filename) => {
  execSync('npm run build:dev');
})
