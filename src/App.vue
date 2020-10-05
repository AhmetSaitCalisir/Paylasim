<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">paylaşım.net</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Ana Sayfa</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/girisyap" class="nav-link" v-if="!GirisDurumu">Giriş Yap</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/kayitol" class="nav-link" v-if="!GirisDurumu">Kayıt Ol</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/paylasimyap" class="nav-link" v-if="GirisDurumu">Paylaşım Yap</router-link>
                </li>
                <!--<li class="nav-item">
                    <router-link to="/anket" class="nav-link">Anket</router-link>
                </li>-->
            </ul>
            <ul class="navbar-nav my-2 my-lg-0" v-if="GirisDurumu">
                <li class="nav-item dropdown navbar-dark bg-dark">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ kullaniciAdiGetir }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/profilduzenle">Profili Düzenle</router-link>
                        <div class="dropdown-divider"></div>
                        <button @click="cikisYap" class="btn btn-outline-danger my-2 my-sm-0 btn-block" v-if="GirisDurumu">
                            Çıkış
                        </button>
                    </div>
                </li>
                <li class="nav-item"></li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Paylaşım id'si giriniz" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Ara
                </button>
            </form>
        </div>
    </nav>
    <router-view />
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapGetters
} from "vuex";
export default {
    name: "App",
    computed: {
        ...mapState(["GirisDurumu"]),
        ...mapGetters(["kullaniciAdiGetir"]),
    },
    methods: {
        ...mapActions(["cikis"]),
        cikisYap() {
            this.cikis();
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
