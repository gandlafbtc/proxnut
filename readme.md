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

This proxy forwards requests only if they have a valid cashu token attached to the X-Cashu header. Configuration on mapping routes and how expensive routes are, can be made in the `dashboard`. You can also configure the allowed mints there.

- **Route Mapping**: Define how requests are routed and the associated fees.
- **Mints**: Add mints you run. Note: Currently, you can only use mints you run yourself due to the absence of a swap-out function for the proxy.

For detailed configuration instructions, check the [technical documentation](https://github.com/gandlafbtc/proxnut/wiki/).

## 🚀 Usage

Run the entire stack with Docker Compose or manually. The provided demo backend offers both unprotected and protected resources for testing.


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

### Adding protected resources

Access the dashboard at: http://localhost:5515 . Here you can add a route that the proxy should forward. Make sure to include the local network host in the route you wish to route to!

> from: `/some/route` ---> to: `http://localhost:4444/1` | fee: 1


### Adding mints
Finally, you can add the mints that you allow. 

To add a mint, head to the dashboard at http://localhost:5515 and add a mint.

### Integrate into frontend

here is an example on how to integrate proxnut into your frontend with the proxnut-wallet web component:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>PROXNUT dummy</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- 1. Import all necessary components -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/@proxnut/wallet-comp@0.2.0/dist/lib/@proxnut/wallet-comp.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@proxnut/cashu-request@0.1.6/cashuRequest.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@proxnut/cashu-request@0.1.6/cashuGoto.js"></script>

</head>
<body>
    <div style="position: absolute; right: 10px;">
        <proxnut-wallet minturl="https://8333.space:3338"></proxnut-wallet>
    </div>
    <!-- 2. Add call the functions from your html interactive -->
    <button onclick="goto()" style="color: black; cursor: pointer;">
        follow link
    </button>
    <button onclick="request()" style="color: black; cursor: pointer;">
        make an async request
    </button>
</body>
</html>

<script>

 const successUnlock = async (response, e) => {
    const contents = await response.text();
    const data = await response.json();
    alert(data)
 }

const goto = () =>{
    // cashuGoto will redirect to a new page, with cashu tokens attached as a query param
    cashuGoto(1, 'localhost:3003/protected',()=>{alert('no nuts!')})
    
}
const request = () => {
    // cashuRequest will redirect to a new page with the cashu token in the X-cashu header
    cashuRequest(1, 'localhost:3003/api/protected', successUnlock, ()=>{alert('no nuts!')});
}
</script>
```



## 🤝 Contributing

We welcome contributions! If you'd like to contribute to ProxNut, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss the proposed change.

## 📜 License

ProxNut is licensed under the MIT License. See the `LICENSE` file for more details.


---

For support, inquiries, or feedback, visit [ProxNut.com](https://proxnut.com), send us a message on [Telegram](https://t.me/+RqnidzaUl-tkMDRl) or open an [issue](https://github.com/gandlafbtc/proxnut/issues/new) on our GitHub Repository.

---
