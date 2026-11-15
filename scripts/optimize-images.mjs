#!/usr/bin/env node
/**
 * Converts source images in /images/source into responsive AVIF + WebP files
 * in /public/images. Run with `npm run images` after adding or replacing a
 * screenshot; the outputs are committed so the Netlify build stays fast.
 *
 * Widths must match IMAGE_WIDTHS in src/components/picture.tsx.
 */
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const sourceDir = path.join(root, "images", "source");
const outDir = path.join(root, "public", "images");

/** Per-image widths; anything not listed uses the wide set. */
const widthsFor = (name) => (name === "portrait" ? [320, 640] : [640, 1024, 1600]);

await mkdir(outDir, { recursive: true });

for (const file of await readdir(sourceDir)) {
  if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const input = sharp(path.join(sourceDir, file));
  const { width: sourceWidth = 0 } = await input.metadata();

  for (const width of widthsFor(name)) {
    if (width > sourceWidth) {
      console.warn(`! ${file} is ${sourceWidth}px wide; upscaling to ${width}px`);
    }
    const resized = input.clone().resize({ width });
    await resized.clone().avif({ quality: 55, effort: 6 }).toFile(path.join(outDir, `${name}-${width}.avif`));
    await resized.clone().webp({ quality: 78 }).toFile(path.join(outDir, `${name}-${width}.webp`));
    console.log(`✓ ${name}-${width}`);
  }
}
