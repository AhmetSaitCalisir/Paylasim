import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import fb from './firebase/firebase.js'

console.log('main.js')
Vue.config.productionTip = false;



let app;

fb.initilaze().auth().onAuthStateChanged(kullanici => {
  if (kullanici) {
    console.log('Giriş Yapıldı')
    store.state.GirisDurumu = true
  } else {
    console.log('Giriş Yapılmadı')
    store.state.GirisDurumu = false
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})