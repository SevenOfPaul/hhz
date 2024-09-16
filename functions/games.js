
export function onRequest({request,env}) {
  env.hhz.put("l0",JSON.stringify("你好，1"))
  env.hhz.put("k2",JSON.stringify("你好，1"))
  return new Response(JSON.stringify(context.env.hhz.get("ki")));
  }