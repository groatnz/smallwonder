import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const rootCNAME = join(process.cwd(), 'CNAME');
const publicCNAME = join(process.cwd(), 'public', 'CNAME');

if (existsSync(rootCNAME)) {
  copyFileSync(rootCNAME, publicCNAME);
  console.log('CNAME copied to public directory');
}

