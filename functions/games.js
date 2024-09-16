
export function onRequest({request,env}) {
  env.hhz.put("l0",JSON.stringify("你好，1"))
  return new Response(JSON.stringify(env.hhz.get("l0")));
  }