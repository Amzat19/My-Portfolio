#!/usr/bin/env node
/**
 * Post-build fix for static export.
 *
 * Next 16 writes per-segment prefetch payloads as nested folders
 *   out/work/thegigs/__next.work/$d$slug/__PAGE__.txt
 * but the client router requests a flat, dot-joined filename
 *   /work/thegigs/__next.work.$d$slug.__PAGE__.txt
 * With no Next server to translate between the two, those prefetches 404.
 * This script writes a flat copy next to each nested payload.
 */
import { copyFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve(import.meta.dirname, "..", "out");
let count = 0;

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("__next.")) {
      await flatten(full, dir, [entry.name]);
    } else if (entry.name !== "_next") {
      await walk(full);
    }
  }
}

/** Copies every file under `segmentDir` to `routeDir/<a>.<b>.<file>`. */
async function flatten(segmentDir, routeDir, parts) {
  for (const entry of await readdir(segmentDir)) {
    const full = path.join(segmentDir, entry);
    if ((await stat(full)).isDirectory()) {
      await flatten(full, routeDir, [...parts, entry]);
    } else {
      await copyFile(full, path.join(routeDir, [...parts, entry].join(".")));
      count++;
    }
  }
}

await walk(outDir);
console.log(`Flattened ${count} segment prefetch file(s).`);
