# Proxnut: a cashu proxy that asks for nuts for a right of passage


<img src="https://proxnut.com/X-bg.svg" width="112px" height="112px">

<img src="https://proxnut.com/proxnut_black.svg" width="112px" height="112px">

`Protect or monetize web resources with a Cashu ecash proxy.`

This is a work in progress. Deno does not work yet (presumably because of incompatibility issues between deno and cashu-ts). Bun seems to work fine, with exactly the same code. 

To test this, please use the code in the bun folder.

## How it works

![setup](./docs/setup.png)


## How to configure it

This proxy forwards requests only if they have a valid cashu token attached to the X-Cashu header. Configuration on mapping hosts, routes and how expensive routes are, can be made in the `config.ts` file. You can also configure the allowed mints.

### Adding protected resources
To add a host mapping, add a line to the HOST_MAP dictionary:

`HOST_MAP`: ```"<host-map-from>": {to:"<host-map-to>", fee: <fee>}```

To add a route mapping, add a line to the ROUTE_MAP dictionary:

`ROUTE_MAP`: ```"<route-map-from>": {to:"<route-map-to>", fee: <fee>}```

the fees from the host and the route will be added to calculate the final fee required to access a resource.


### Adding mints
Finally, you can add the mints that you run. Note that currently you can only use mints that you run yourself, since there is no swap out function for the proxy currently. This functionality will be introduced later as a `MODE` option.

To add a mint, add the URL of the mint to the `ALLOWED_MINTS` list if the config

`ALLOWED_MINTS`: ```["<mint-url1>","<mint-url2"....>]```

## How to run

The whole stack can be run with docker compose: 

1. `docker-compose up --build` 

this will run the applications on the following ports:

1. `frontend` on port `8080`
1. `proxnut` on port `3003`
1. `backend` on port `4444`



or you can use the manual setup:

1. install bun: 
```curl -fsSL https://bun.sh/install | bash```
1. run the proxy: ```bun run start```
1. if you haven't configured a backend yourself in the chapters above, there is a simple test server in the deno folder that is pre-configured. to run it, install deno: `curl -fsSL https://deno.land/x/install/install.sh | sh` - and then run the demo backend:  `deno run --allow-net --watch deno/server.ts`


On the demo backend, there is a unprotected resources, that routes freely (`/`) and there is a protected resource (`/test`) that asks for 1 satoshi per request.

### Example frontend
There is an example frontend in the `frontend/cashu-wallet-wc` folder, that can be run alongside the two other services. To use it, the wallet component must first be built from source:

1. `cd frontend/cashu-wallet-wc`
1. `npm i`
1. `npm run build`
1. `cp dist/lib/cashu-wallet.js .`

after that, the `index.html` can be served as a web page. for example:

1. `npm i -g http-server`
1. `http-server`
