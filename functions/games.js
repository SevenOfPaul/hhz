export function onRequest(context) {
  context.games=[1,2,3,4,5,6]
    return new Response(JSON.stringify(context.games))
  }