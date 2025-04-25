import { build } from 'vite';
import { resolve } from 'path';
import fs from 'fs-extra';

async function buildExtension() {
  // Run Vite build
  await build();

  // Ensure manifest.json is in the dist directory
  const manifestPath = resolve('public', 'manifest.json');
  const distManifestPath = resolve('dist', 'manifest.json');
  
  if (fs.existsSync(manifestPath)) {
    await fs.copy(manifestPath, distManifestPath);
    console.log('✅ Manifest file copied to dist directory');
  } else {
    console.error('❌ Manifest file not found in public directory');
  }

  // Move files from dist/src to dist
  const distSrcPath = resolve('dist', 'src');
  if (fs.existsSync(distSrcPath)) {
    const files = await fs.readdir(distSrcPath);
    for (const file of files) {
      await fs.move(resolve(distSrcPath, file), resolve('dist', file), { overwrite: true });
    }
    await fs.remove(distSrcPath);
    console.log('✅ Moved files from dist/src to dist');
  }

  // Update the script path in newtab.html
  const newtabPath = resolve('dist', 'newtab.html');
  if (fs.existsSync(newtabPath)) {
    let newtabContent = await fs.readFile(newtabPath, 'utf8');
    newtabContent = newtabContent.replace(
      'src="./main.jsx"',
      'src="./newtab.js"'
    );
    await fs.writeFile(newtabPath, newtabContent);
    console.log('✅ Updated script path in newtab.html');
  }
}

buildExtension().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
}); 