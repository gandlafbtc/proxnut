import { serveListener } from "https://deno.land/std@0.189.0/http/server.ts";


const listener = Deno.listen({ port: 4444 });

console.log("server listening on http://localhost:4444");

const BOOK_ROUTE = new URLPattern({ pathname: "/test" });

await serveListener(listener, (request) => {
  
  const match = BOOK_ROUTE.exec(request.url);

  if (match) {
    return new Response(`very secret`);
  }
    
  const body = `Your user-agent is:\n\n${request.headers.get(
    "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
});
