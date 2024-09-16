export function onRequest(context) {

    return new Response(JSON.stringify(context.env.hhz.get("ki"))+JSON.stringify(context.env.hhz.get))
  }