<template>
<div id="AnaSayfa">
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <h1>ANA SAYFA</h1>
            </div>
            <div class="col-4"></div>
        </div>
        <div class="row" v-for="paylasim in paylasimGetir" :key="paylasim.id">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ paylasim.email }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            {{ paylasim.tarih }}
                        </h6>
                        <p class="card-text">{{ paylasim.yazi }}</p>
                        <p class="card-text">
                            Beğenen kişi sayısı {{ paylasim.begeniSay }}
                        </p>
                        <a href @click.prevent="Profile(paylasim.uid)" class="card-link">Profili Görüntüle</a>
                        <br />
                        <div class="begeni" v-if="GirisDurumu">
                            <button class="btn btn-outline-success" style="margin-right: 5px" @click="Begen(paylasim.id)">
                                Beğen
                            </button>
                            <button class="btn btn-outline-danger" style="margin-letf: 5px" @click="Begenme(paylasim.id)">
                                Beğenme
                            </button>
                        </div>
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
    mapGetters,
    mapState,
    mapActions
} from "vuex";
export default {
    name: "AnaSayfa",
    computed: {
        ...mapGetters(["paylasimGetir"]),
        ...mapState(["GirisDurumu"]),
    },
    methods: {
        Profile(uid) {
            this.$router.replace(`/profil/${uid}`);
        },
        ...mapActions(["begeni"]),
        Begen(id) {
            let veri = {};
            veri.pid = id;
            this.begeni(veri);
        },
        Begenme(id) {
            alert(id + " Beğenilmedi");
        },
    },
};
</script>
