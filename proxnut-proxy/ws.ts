import { Elysia, ws } from 'elysia'



export const initializeWS = () => {
    //@ts-ignore
    new Elysia().onStart(()=>console.log('ws listen on 3013'))
    .use(ws())
    .ws('/ws', {
        message(ws, message) {
            console.log(message)
            ws.send(message)
        }
    })
    .listen(3013)
} 
