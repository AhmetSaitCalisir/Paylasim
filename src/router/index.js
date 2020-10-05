import Vue from 'vue'
import VueRouter from 'vue-router'
import fb from '../firebase/firebase.js'


import AnaSayfa from '../views/AnaSayfa.vue'
import GirisYap from '../views/GirisYap.vue'
import KayitOl from '../views/KayitOl.vue'
import PaylasimYap from '../views/PaylasimYap.vue'
import Profil from '../views/Profil.vue'
import Anket from '../views/Anket.vue'
import ProfilDuzenle from '../views/ProfilDuzenle.vue'





console.log('Router')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'AnaSayfa',
  component: AnaSayfa
}, {
  path: '/girisyap',
  name: 'GirisYap',
  component: GirisYap,
  meta: {
    girisGerekliDegil: true
  }
}, {
  path: '/kayitol',
  name: 'KayitOl',
  component: KayitOl,
  meta: {
    girisGerekliDegil: true
  }
}, {
  path: '/paylasimyap',
  name: 'PaylasimYap',
  component: PaylasimYap,
  meta: {
    girisGerekli: true
  }
}, {
  path: '/profil/:id',
  name: 'Profil',
  component: Profil
}, {
  path: '/anket',
  name: 'Anket',
  component: Anket
}, {
  path: '/profilduzenle',
  name: 'ProfilDuzenle',
  component: ProfilDuzenle,
  meta: {
    girisGerekli: true
  }
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const girisGerekliDegil = to.matched.some(record => record.meta.girisGerekliDegil)
  const girisGerekli = to.matched.some(record => record.meta.girisGerekli)
  const girisYapilmis = fb.initilaze().auth().currentUser;
  scroll(0, 0);
  if (girisGerekliDegil && girisYapilmis) {
    alert(`Zaten ${girisYapilmis.email} mail adresiyle giriş yapmış durumdasınız`)
    next('/');
  } else if (girisGerekli && !girisYapilmis) {
    alert(`Lütfen Giriş Yapın`)
    next('/girisyap');
  } else {
    next();
  }
})

export default router