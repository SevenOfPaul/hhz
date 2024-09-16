export function onRequest(context) {
  context.env.hhz.set("games",[""])
    return new Response(JSON.stringify(context.env.hhz.get("ki"))+JSON.stringify(context.env.hhz.get))
  }