import { serveListener } from "https://deno.land/std@0.189.0/http/server.ts";


const listener = Deno.listen({ port: 4444 });

console.log("server listening on http://localhost:4444");

const TEST = new URLPattern({ pathname: "/test" });
const TEST_NOFEE = new URLPattern({ pathname: "/test_nofee" });

await serveListener(listener, (request) => {
  
  const test = TEST.exec(request.url);
  const test_nofee = TEST_NOFEE.exec(request.url);

  if (test) {
    return new Response(`very secret`);
  }

  if (test_nofee) {
    return new Response(`not secret and free`);
  }
    
  const body = `Your user-agent is:\n\n${request.headers.get(
    "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
});
