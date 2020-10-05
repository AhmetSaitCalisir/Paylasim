<template>
<div id="PaylasimYap">
    <h1>PAYLAŞIM SAYFASI</h1>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <form @submit.prevent="Paylas">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                            Paylaşımınız
                            <span class="badge badge-primary">{{paylasimim.yazi.length}}/126</span>
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" maxlength="126" v-model="paylasimim.yazi"></textarea>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-outline-success btn-block">PAYLAŞ</button>
                    </div>
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
    name: "PaylasimYap",
    data() {
        return {
            paylasimim: {
                yazi: "",
                begeniSay: 0,
                begenenler: [],
            },
        };
    },
    methods: {
        ...mapActions(["paylasim"]),
        Paylas() {
            this.paylasim(this.paylasimim);
        },
    },
};
</script>
