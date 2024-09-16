export async function onRequest({request,env}) {
  return new Response(await env.hhz.get("games"));
}