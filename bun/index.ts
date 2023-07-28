import { CONFIG } from "./config";
import { initializeHTTP } from "./http";
import { initializeWS } from "./ws";

if (CONFIG.WEBSOCKET_MODE) {
    initializeWS()
}
else {
    initializeHTTP()
}