import fs from 'fs';
import path from 'path';

const pagesDir = './src/pages';
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const page of pages) {
  const filePath = path.join(pagesDir, page);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/\/\s*fetchpriority="high"\s*\/>/g, 'fetchpriority="high" />');
  content = content.replace(/\/\s*loading="lazy"\s*\/>/g, 'loading="lazy" />');
  
  fs.writeFileSync(filePath, content);
}

console.log("Images fixed!");
