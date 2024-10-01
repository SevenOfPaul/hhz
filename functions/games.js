import raw from "./games.json" assert  {type:"json"}
import { nanoid } from "nanoid";
import fs from "fs/promises"
async function postGames(){
raw.games=raw.games.map(r=>{r.id=nanoid();return r});
await fs.appendFile("./games_id.json",JSON.stringify(raw));

}
export default postGames;