// Render a post's 4 slides to JPEG with headless Chromium (Playwright).
// Usage: node render.mjs posts/<folder>/<file>.html
import { chromium } from 'playwright';
import path from 'node:path';
const html = path.resolve(process.argv[2]);
const dir = path.dirname(html);
const browser = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
for (let i = 1; i <= 4; i++) {
  await page.goto('file://' + html + '?s=' + i);
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(dir, `slide-${i}.jpg`), type: 'jpeg', quality: 92 });
  console.log('rendered', `slide-${i}.jpg`);
}
await browser.close();
