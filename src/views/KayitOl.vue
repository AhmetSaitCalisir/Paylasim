<template>
<div id="KayitOl">
    <h1>KAYIT SAYFASI</h1>
    <br />
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <form @submit.prevent="kayitOl">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email adresiniz</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="kullanici.email" />
                        <small id="emailHelp" class="form-text text-muted">Bilgileriniz bizimle güvende</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Şifreniz</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="kullanici.sifre" />
                    </div>
                    <button type="submit" class="btn btn-outline-success btn-lg btn-block">Kayıt Ol</button>
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
    name: "KayitOl",
    data() {
        return {
            kullanici: {
                sifre: "",
                email: "",
            },
        };
    },
    methods: {
        ...mapActions(["kayit"]),
        kayitOl() {
            this.kayit(this.kullanici);
        },
    },
};
</script>
