export function onRequest(context) {
     context.env.games=[1,2,3,4,5,6]
    return new Response(JSON.stringify(context.games)+7)
  }