# Proxnut: a cashu proxy that asks for nuts to get right of passage


<img src="https://proxnut.com/X-bg.svg" width="112px" height="112px">

<img src="https://proxnut.com/proxnut_black.svg" style="fill:#333333;" width="112px" height="112px">

`Protect or monetize web resources with a Cashu ecash proxy. This is a work in progress.`

---

# ProxNut: Cashu Proxy for Web Requests

**ProxNut** is a Cashu proxy designed to protect or monetize web resources. Seamlessly integrate with a Cashu ecash wallet, allowing users to access protected resources using tokens.

## 🌟 Features

- **Ecash Wallet Integration**: Seamlessly top up and spend tokens.
- **Resource Protection**: Protect and monetize your web resources with ease.
- **Open-Source**: Join our community and contribute to the project.

## 🛠 Installation

While the project is still in progress, you can test it using the code in the `bun` folder. For a comprehensive installation guide, including using Docker Compose and manual setup, refer to our [technical documentation](https://github.com/gandlafbtc/proxnut/wiki/).

## 🔄 How It Works

ProxNut forwards requests only if they have a valid Cashu token attached to the X-Cashu header. Configuration options include mapping hosts, routes, setting fees, and specifying allowed mints.

![setup](./docs/setup.png)

## ⚙ Configuration

This proxy forwards requests only if they have a valid cashu token attached to the X-Cashu header. Configuration on mapping hosts, routes and how expensive routes are, can be made in the `config.ts` file. You can also configure the allowed mints.

- **Host & Route Mapping**: Define how requests are routed and the associated fees. Both host and route fees are cumulative.
- **Mints**: Add mints you run. Note: Currently, you can only use mints you run yourself due to the absence of a swap-out function for the proxy.

For detailed configuration instructions, check the [technical documentation](https://github.com/gandlafbtc/proxnut/wiki/).

## 🚀 Usage

Run the entire stack with Docker Compose or manually. The provided demo backend offers both unprotected and protected resources for testing.

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

### How to run

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

## 🌐 Example Frontend

An example frontend is provided in the `frontend/cashu-wallet-wc` folder. This frontend showcases how users can interact with ProxNut, especially in terms of wallet operations, that can be run alongside the two other services. To use it, the wallet component must first be built from source:

1. `cd frontend/cashu-wallet-wc`
1. `npm i`
1. `npm run build`
1. `cp dist/lib/cashu-wallet.js .`

after that, the `index.html` can be served as a web page. for example:

1. `npm i -g http-server`
1. `http-server`

## 🤝 Contributing

We welcome contributions! If you'd like to contribute to ProxNut, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss the proposed change.

## 📜 License

ProxNut is licensed under the MIT License. See the `LICENSE` file for more details.


---

For support, inquiries, or feedback, visit [ProxNut.com](https://proxnut.com), send us a message on [Telegram](https://t.me/+RqnidzaUl-tkMDRl) or open an [issue](https://github.com/gandlafbtc/proxnut/issues/new) on our GitHub Repository.

---
