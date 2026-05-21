const fs = require('fs');

const path = 'src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Ensure lazy and Suspense are imported
if (!content.includes('import { useState, useEffect, useRef, useCallback, lazy, Suspense }')) {
  // Try to find the react import
  content = content.replace(/import { useState, useEffect, useRef, useCallback } from 'react';/, "import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';");
}

// 2. Replace all the landing page imports.
// They look like: import XYZLandingPage from './components/LandingPages/...';
content = content.replace(/import (\w+Landing(?:Page)?) from '\.\/components\/LandingPages\/([^']+)'/g, 
  "const $1 = lazy(() => import('./components/LandingPages/$2'))");

// Replace non-default exported landing pages:
const namedLandings = ['CNITAILanding', 'MarketingSalesLanding', 'LogisticsSupplyChainLanding', 'DesignCreativeLanding', 'EconomicsFinanceLanding', 'LanguagesTourismLanding', 'B2BLanding'];
namedLandings.forEach(name => {
  const rgx = new RegExp(`import { ${name} } from '\\./components/${name}';`, 'g');
  content = content.replace(rgx, `const ${name} = lazy(() => import('./components/${name}').then(module => ({ default: module.${name} })));`);
});

// Also make RIASECTest, NumerologyTest, Chatbot, Community, DocumentLibrary, UniversitySearch, ScoreCalculator lazy
const defaultLazys = ['RIASECTest', 'NumerologyTest', 'Chatbot', 'Community'];
defaultLazys.forEach(name => {
  const rgx = new RegExp(`import ${name} from '\\./components/${name}';`, 'g');
  content = content.replace(rgx, `const ${name} = lazy(() => import('./components/${name}'));`);
});

const namedLazys = ['DocumentLibrary', 'UniversitySearch', 'ScoreCalculator', 'NewsSection'];
namedLazys.forEach(name => {
  const rgx = new RegExp(`import { ${name} } from '\\./components/${name}';`, 'g');
  content = content.replace(rgx, `const ${name} = lazy(() => import('./components/${name}').then(module => ({ default: module.${name} })));`);
});

// 3. Wrap all the {activeTab === ...} inside a Suspense block.
// Wait, the easiest way is to wrap the whole `<main>` content inside Suspense?
// But `home` should probably not be lazy loaded so it renders immediately.
// We can wrap `<Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>` around the non-home routes.

// Actually, we can just wrap the inside of <main> entirely.
const suspenseReplacement = `<Suspense fallback={
          <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-medium animate-pulse">Đang tải dữ liệu...</p>
          </div>
        }>`;

if (!content.includes('<Suspense fallback=')) {
  content = content.replace('<main className="relative overflow-hidden">', `<main className="relative overflow-hidden">\n        ${suspenseReplacement}`);
  content = content.replace('</main>', '        </Suspense>\n      </main>');
}

fs.writeFileSync(path, content, 'utf8');
console.log('App.tsx refactored for code splitting successfully!');
