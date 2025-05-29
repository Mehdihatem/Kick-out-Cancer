const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const srcCssDir = path.join(__dirname, '../out/_next/static/css');
const destCssDir = path.join(__dirname, '../out/css');

// 1. Créer le dossier css s'il n'existe pas
fs.ensureDirSync(destCssDir);

// 2. Copier tous les fichiers CSS
glob.sync(path.join(srcCssDir, '*.css')).forEach(file => {
  const fileName = path.basename(file);
  fs.copyFileSync(file, path.join(destCssDir, fileName));
});

// 3. Réécrire les chemins dans tous les fichiers HTML
const htmlFiles = glob.sync(path.join(__dirname, '../out/**/*.html'));
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\/_next\/static\/css\//g, '/css/');
  fs.writeFileSync(file, content, 'utf8');
});

console.log('✅ Fichiers CSS copiés dans /css et chemins réécrits dans les HTML.'); 