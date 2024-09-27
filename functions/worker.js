//----------------------Games--------------------
import raw from "./games.json" assert  {type:"json"}
async function getGames(request, env, ctx){
    const games=JSON.parse(await env.hhz.get("games"))
    let body={code:200,body:{games}}
    let response=new Response(JSON.stringify(body));
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set('Access-Control-Allow-Methods','GET, POST');
    return response
  }
  
  async function postGames(request, env, ctx){
    let reqBody=await request.json();
    console.log(reqBody);
    let body={};
        await env.hhz.put("games",JSON.stringify(reqBody.games));
      body={
       code:200,
      body:{
       message:"添加成功"
      }
     }
     const response=new Response(JSON.stringify(body));
     response.headers.set("Access-Control-Allow-Origin", "*");
     response.headers.set('Access-Control-Allow-Methods','GET, POST');
     return response;
  }
  async function postGame(request, env, ctx){
    let reqBody=request.json();
    let body={};
     let games=JSON.parse(await env.hhz.get("games"));
      if(reqBody.game){
        games.push(reqBody.game);
        await env.hhz.put("games",JSON.stringify(games));
      }
      body={
       code:200,
      body:{
       message:"添加成功"
      }
     }
     const response=new Response(JSON.stringify(body));
     response.headers.set("Access-Control-Allow-Origin", "*");
     response.headers.set('Access-Control-Allow-Methods','GET, POST');
     return response;
  }
  //---------------code-----------------
  async function getCode(request, env, ctx){
    const code=JSON.parse(await env.hhz.get("code"));
    let body={code:200,body:{code}}
    let response=new Response(JSON.stringify(body));
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set('Access-Control-Allow-Methods','GET, POST');
    return response
  }
  async function postCode(request, env, ctx){
    let reqBody=await request.json();
    let body={};
     await env.hhz.put("code",JSON.stringify(reqBody.code));
      body={
       code:200,
      body:{
       message:"修改成功"
      }
     }
    let response=new Response(JSON.stringify(body));
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set('Access-Control-Allow-Methods','GET, POST');
    return response
  }
  export default {
    async scheduled(event, env, ctx) {
      await env.hhz.put("games_backup",await env.hhz.get("games"));
      await env.hhz.put("games",JSON.stringify(raw));
    },
    async fetch(request, env, ctx) {
      if(request.method=='GET'){
        //请求
      if(request.url.indexOf("code")!==-1){
        return getCode(request, env, ctx);
      }
   return getGames(request, env, ctx);
      }else if(request.method=='POST'){
        if(request.url.indexOf("code")!==-1){
          return postCode(request, env, ctx);
        }
        if(request.url.indexOf("addGame")!==-1){
          return postGame(request, env, ctx);
        }
          return postGames(request,env,ctx);
  
      }
    },
  };