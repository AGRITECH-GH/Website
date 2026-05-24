import fs from 'fs';
import path from 'path';

const pagesDir = './src/pages';
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx') && f !== 'Home.jsx');

const metaData = {
  'Solutions.jsx': { title: "Solutions — AgriTech Ghana", desc: "Explore our farmer advisory, traceability, logistics and market-access platform features." },
  'Marketplace.jsx': { title: "Marketplace — AgriTech Ghana", desc: "Browse verified produce, connect with trusted farmer networks and source with confidence." },
  'Impact.jsx': { title: "Our Impact — AgriTech Ghana", desc: "See how AgriTech Ghana is empowering 50,000+ smallholder farmers across Ghana." },
  'Training.jsx': { title: "Training — AgriTech Ghana", desc: "Agricultural training programmes and resources for farmers and agribusiness professionals." },
  'Team.jsx': { title: "Our Team — AgriTech Ghana", desc: "Meet the people building AgriTech Ghana's platform for sustainable food systems." },
  'News.jsx': { title: "News & Insights — AgriTech Ghana", desc: "Latest news, reports and insights from Ghana's agricultural technology sector." },
  'FAQ.jsx': { title: "FAQs — AgriTech Ghana", desc: "Frequently asked questions about the AgriTech Ghana platform and services." },
  'About.jsx': { title: "About Us — AgriTech Ghana", desc: "Learn about AgriTech Ghana's mission to digitise and empower West African agriculture." },
  'Contact.jsx': { title: "Contact Us — AgriTech Ghana", desc: "Get in touch with the AgriTech Ghana team for partnerships, support or media enquiries." }
};

for (const page of pages) {
  const filePath = path.join(pagesDir, page);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('useSEO')) {
    // Add import
    content = 'import { useSEO } from "../hooks/useSEO";\n' + content;
    
    // Find component name
    const componentMatch = content.match(/function\s+([A-Z][a-zA-Z0-9_]*)\s*\(\)/);
    if (componentMatch) {
      const compName = componentMatch[1];
      const data = metaData[page];
      if (data) {
        const hookCall = `\n  useSEO({\n    title: ${JSON.stringify(data.title)},\n    description: ${JSON.stringify(data.desc)}\n  });\n`;
        content = content.replace(`function ${compName}() {`, `function ${compName}() {${hookCall}`);
      }
    }
  }

  // Add loading="lazy" to all img tags except the first one in the hero section if it has no loading attr
  // To be safe, just add loading="lazy" to all <img that don't have loading= already.
  // We can add fetchpriority="high" to the very first image.
  
  let imgCount = 0;
  content = content.replace(/<img\s([^>]+)>/g, (match, attrs) => {
    imgCount++;
    if (!attrs.includes('loading=') && !attrs.includes('fetchpriority=')) {
      if (imgCount === 1) {
         return `<img ${attrs} fetchpriority="high" />`;
      } else {
         return `<img ${attrs} loading="lazy" />`;
      }
    }
    return match;
  });

  fs.writeFileSync(filePath, content);
}

console.log("Pages updated!");
