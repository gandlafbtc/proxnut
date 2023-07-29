import { serveListener } from "https://deno.land/std@0.189.0/http/server.ts";


const listener = Deno.listen({ port: 4444 });

console.log("server listening on http://localhost:4444");

const TEST = new URLPattern({ pathname: "/test" });
const TEST_NOFEE = new URLPattern({ pathname: "/test_nofee" });
const ONE = new URLPattern({ pathname: "/1" });
const TWO = new URLPattern({ pathname: "/2" });
const THREE = new URLPattern({ pathname: "/3" });

await serveListener(listener, (request) => {
  
  const test = TEST.exec(request.url);
  const test_nofee = TEST_NOFEE.exec(request.url);
  const one = ONE.exec(request.url);
  const two = TWO.exec(request.url);
  const three = THREE.exec(request.url);

  if (test) {
    return new Response(`very secret`);
  }

  if (test_nofee) {
    return new Response(`not secret and free`);
  }

  if (one) {
    const res = new Response(`We can use proxnut to add a simple paywall for requests to any backend.`, {headers: {'Content-Type': 'text/plain'}});
    return res 
  }

  if (two) {
    const data ={title: 'proxnut allows you to proxy any request', detail: 'also structured data, such as json'}
    const res = new Response(JSON.stringify(data),{headers: {'Content-Type': 'application/json'}})
    
    return res
  }
    
if (three) {
  const bytes = Deno.readFileSync("nut.jpeg");
  const res = new Response(bytes, {headers: {'Content-Type': 'image/jpeg'}})
  return res
}

  const body = `Your user-agent is:\n\n${request.headers.get(
    "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
});
