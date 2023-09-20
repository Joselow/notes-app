import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import './assets/main.css';

import Loader from "@/components/Loader.vue";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiCheckCircle, FcAcceptDatabase, IoAddCircleSharp, IoReload, LaSignOutAltSolid, LaUserCircleSolid } from "oh-vue-icons/icons";

addIcons( IoAddCircleSharp, IoReload, BiCheckCircle, FcAcceptDatabase, LaUserCircleSolid, LaSignOutAltSolid);

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(Vue3Toasity) as ToastContainerOptions;
app.component("v-icon", OhVueIcon);
app.component("v-loader", Loader);


app.mount('#app')
