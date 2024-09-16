
export async function onRequest({request,env}) {
  await  env.hhz.put("l0",JSON.stringify("你好，1"))
  return new Response(JSON.stringify(await env.hhz.get("l0")));
  }