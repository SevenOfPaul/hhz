import process from "process"
import fs from "node:fs"
import path from "node:path";
export function onRequest(context) {
  const curPth=process.cwd();
  const games=fs.readFileSync(path.join(curPth,"./src/pages/games.json5"));
  return new Response(JSON.stringify(games));
  }