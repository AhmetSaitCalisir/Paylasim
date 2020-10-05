<template>
<div id="Profil">
    <h1>PROFİL SAYFASI</h1>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <h3>{{profilMail}}</h3>
            </div>
            <div class="col-4"></div>
        </div>
        <div class="row" v-for="paylasim in profilBilgisi" :key="paylasim.id">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{paylasim.email}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{paylasim.tarih}}</h6>
                        <p class="card-text">{{paylasim.yazi}}</p>
                    </div>
                </div>
                <br />
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
export default {
    name: "Profil",
    computed: {
        profilId() {
            return this.$route.params.id;
        },
        ...mapGetters(["profilGetir"]),
        profilBilgisi() {
            return this.profilGetir(this.profilId);
        },
        profilMail() {
            let email;
            for (let key in this.profilBilgisi) {
                let value = this.profilBilgisi[key];
                email = value.email;
            }
            return email;
        },
    },
};
</script>
