import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//window.$ = window.jQuery = require('jquery');
import store from './store'
import TableLite from "vue3-table-lite";
import bootstrap from 'bootstrap/dist/css/bootstrap.css'


createApp(App).use(store).use(router).use(TableLite).use(bootstrap).mount('#app');

import "bootstrap/dist/js/bootstrap.js";