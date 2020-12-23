import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import io from "socket.io-client";
const socket = io();

const app = createApp(App);
app.config.globalProperties.$socket = socket;
app.use(store);
app.mount("#app");
