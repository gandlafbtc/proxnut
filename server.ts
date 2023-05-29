import { serveListener } from "https://deno.land/std@0.189.0/http/server.ts";


const listener = Deno.listen({ port: 4444 });

console.log("server listening on http://localhost:4444");

await serveListener(listener, (request) => {

    
  const body = `Your user-agent is:\n\n${request.headers.get(
    "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
});
