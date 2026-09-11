import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const sourceUrl = process.argv[2] ?? 'http://127.0.0.1:4173/';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'taiwan-rework-shareholder-plan';
const basePath = `/${repositoryName}`;
const outputDirectory = path.resolve('docs');

const response = await fetch(sourceUrl);

if (!response.ok) {
  throw new Error(`Unable to fetch ${sourceUrl}: ${response.status}`);
}

let html = await response.text();

// GitHub Pages only needs the server-rendered markup and styles. Removing the
// runtime scripts keeps this financial overview fully static and portable.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, '')
  .replaceAll('href="/_next/', `href="${basePath}/_next/`)
  .replaceAll('href="/favicon.svg"', `href="${basePath}/favicon.svg"`)
  .replace('<head>', `<head><base href="${basePath}/">`);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(path.resolve('dist/client/_next'), path.join(outputDirectory, '_next'), {
  recursive: true,
});
await cp(path.resolve('dist/client/favicon.svg'), path.join(outputDirectory, 'favicon.svg'));
await writeFile(path.join(outputDirectory, 'index.html'), html);
await writeFile(path.join(outputDirectory, '.nojekyll'), '');

console.log(`GitHub Pages snapshot written to ${outputDirectory}`);
