<template>
<div id="GirisYap">
    <h1>GİRİŞ SAYFASI</h1>
    <br />
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <form @submit.prevent="girisYap">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email adresiniz</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="kullanici.email" />
                        <small id="emailHelp" class="form-text text-muted">Bilgileriniz bizimle güvende</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Şifreniz</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="kullanici.sifre" />
                    </div>
                    <button type="submit" class="btn btn-outline-primary btn-lg btn-block">Giriş Yap</button>
                </form>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    name: "GirisYap",
    data() {
        return {
            kullanici: {
                email: "",
                sifre: "",
            },
        };
    },
    computed: {},
    methods: {
        ...mapActions(["giris"]),
        girisYap() {
            this.giris(this.kullanici);
        },
    },
};
</script>
