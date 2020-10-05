import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index.js";
import fb from "../firebase/firebase.js";

const Paylasimlar = fb.db().ref("Paylasimlar");
console.log("store");
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    GirisDurumu: false,
    Paylasims: {},
    isim: 'HATA'
  },
  getters: {
    paylasimGetir(state) {
      Paylasimlar.on("value", (snapshot) => {
        state.Paylasims = snapshot.val();
      });
      return state.Paylasims;
    },
    profilGetir: (state) => (profilId) => {
      Paylasimlar.orderByChild("uid")
        .equalTo(profilId)
        .on("value", (snapshot) => {
          state.Paylasims = snapshot.val();
        });
      return state.Paylasims;
    },
    kullaniciAdiGetir(state) {
      if (fb.kimlik().currentUser.displayName) {
        state.isim = fb.kimlik().currentUser.displayName
      } else {
        state.isim = fb.kimlik().currentUser.email
      }
      return state.isim
    }
  },
  mutations: {
    async girisYap(state, kullanici) {
      try {
        const val = await fb
          .initilaze()
          .auth()
          .signInWithEmailAndPassword(kullanici.email, kullanici.sifre);
        state.GirisDurumu = !!val;
        alert("Giriş Yapıldı");
        router.replace("/");
      } catch (err) {
        alert(err);
      }
    },
    async kayitOl(state, kullanici) {
      try {
        const val = await fb
          .kimlik()
          .createUserWithEmailAndPassword(kullanici.email, kullanici.sifre);
        state.GirisDurumu = !!val;
        alert("Ailemize Hoşgeldiniz");
        router.replace("/");
      } catch (err) {
        alert(err);
      }
    },
    async cikisYap(state) {
      try {
        await fb.kimlik().signOut();
        state.GirisDurumu = false;
        alert("Yine Bekleriz");
        router.replace("/");
      } catch (err) {
        alert(err);
      }
    },
    paylasimYap(state, veri) {
      try {
        const id = Paylasimlar.push().key;
        veri.id = id;
        veri.uid = fb.kimlik().currentUser.uid;
        veri.email = fb.kimlik().currentUser.email;
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();
        today = dd + "/" + mm + "/" + yyyy;
        veri.tarih = today;
        Paylasimlar.child(id).set(veri);
        alert("Paylaşımınız gerçekleşti");
        router.replace("/");
      } catch (err) {
        alert(err);
      }
    },
    begen(state, veri) {
      if (state.GirisDurumu) {
        let bpaylasim = {};
        const epaylasim = Paylasimlar.child(veri.pid);
        epaylasim.on("value", (snapshot) => {
          bpaylasim = snapshot.val();
        });
        if (bpaylasim.begeniSay == 0) {
          bpaylasim.begenenler = [];
        }
        let begenilmis = false;
        bpaylasim.begenenler.forEach((begenen) => {
          if (fb.kimlik().currentUser.uid == begenen.uid) {
            begenilmis = true;
          }
        });
        if (!begenilmis) {
          bpaylasim.begeniSay++;
          let begenen = {};
          begenen.uid = fb.kimlik().currentUser.uid;
          begenen.email = fb.kimlik().currentUser.email;
          bpaylasim.begenenler.push(begenen);
          epaylasim.set(bpaylasim);
          alert(bpaylasim.id + " Beğenildi");
        } else {
          alert("Zaten bu gönderiyi beğenmiş durumdasınız");
        }
      } else {
        alert("Paylaşım beğenmek için lütfen giriş yapın");
        router.replace("/giris");
      }
    },
  },
  actions: {
    giris({
      commit
    }, kullanici) {
      commit("girisYap", kullanici);
    },
    kayit({
      commit
    }, kullanici) {
      commit("kayitOl", kullanici);
    },
    cikis({
      commit
    }) {
      commit("cikisYap");
    },
    paylasim({
      commit
    }, veri) {
      commit("paylasimYap", veri);
    },
    begeni({
      commit
    }, veri) {
      commit("begen", veri);
    },
  },
  modules: {},
});