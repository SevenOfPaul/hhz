export function onRequest(context) {

    return new Response(JSON.stringify(context)+JSON.stringify(context.env))
  }