<template>
<div id="anket">
    <h1>ANKET SAYFASI</h1>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            -Anket Başlığı-
                            <h6>
                                <span class="badge badge-secondary">Toplam Oy {{toplamoy}}</span>
                            </h6>
                        </h5>
                        <p class="card-text">Şöyle oldu böyle oldu ben şimdi napim?</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <template v-if="oydurum">
                                <div class="progress" data-toggle="tooltip" title="Tooltip on top">
                                    <div class="progress-bar" role="progressbar" :style="c1se">İntihar et {{anket.c1.oy}}</div>
                                </div>
                            </template>
                            <template v-else>
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">İntihar et</label>
                            </template>
                        </li>
                        <li class="list-group-item">
                            <template v-if="oydurum">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" :style="c2se">Boş ver knk {{anket.c2.oy}}</div>
                                </div>
                            </template>
                            <template v-else>
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label" for="exampleRadios2">Boş ver knk</label>
                            </template>
                        </li>
                        <li class="list-group-item">
                            <template v-if="oydurum">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" :style="c3se">Bize ne moruq {{anket.c3.oy}}</div>
                                </div>
                            </template>
                            <template v-else>
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                <label class="form-check-label" for="exampleRadios3">Bize ne moruq</label>
                            </template>
                        </li>
                    </ul>
                </div>
                <br />
                <br />
                <div class="row">
                    <div class="col">
                        <button class="btn btn-outline-primary" @click="ar1">Birinciyi arttır</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-outline-primary" @click="ar2">İkinciyi arttır</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-outline-primary" @click="ar3">Üçüncüyü arttır</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">Birinci cevap: {{anket.c1.oy}}</div>
                    <div class="col">İkinci cevap: {{anket.c2.oy}}</div>
                    <div class="col">Üçüncü cevap: {{anket.c3.oy}}</div>
                </div>
            </div>
            <div class="col-4">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="oydurum" />
                <label class="form-check-label" for="exampleCheck1">Kullanıcı Oy Vermiş</label>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div v-for="i in oyadet" :key="i">
                    {{i}}
                    <textarea class="form-control" rows="2" v-model="oylar[i-1]"></textarea>
                </div>
                <button class="btn btn-outline-success" @click="ekle">Şık ekle</button>
            </div>
            <div class="col-4">
                Şıklar:
                <ul>
                    <li v-for="sk in oylar" :key="sk">{{sk}}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "anket",
    data() {
        return {
            anket: {
                c1: {
                    durum: false,
                    oy: 0,
                },
                c3: {
                    durum: false,
                    oy: 0,
                },
                c2: {
                    durum: false,
                    oy: 0,
                },
            },
            oydurum: false,
            oyadet: 2,
            oylar: [],
        };
    },
    methods: {
        ar1() {
            this.anket.c1.oy++;
        },
        ar2() {
            this.anket.c2.oy++;
        },
        ar3() {
            this.anket.c3.oy++;
        },
        ekle() {
            this.oyadet++;
        },
    },
    computed: {
        toplamoy() {
            return this.anket.c1.oy + this.anket.c2.oy + this.anket.c3.oy;
        },
        c1se() {
            const oran = (this.anket.c1.oy * 100) / this.toplamoy;
            return `width: ${oran}%`;
        },
        c2se() {
            const oran = (this.anket.c2.oy * 100) / this.toplamoy;
            return `width: ${oran}%`;
        },
        c3se() {
            const oran = (this.anket.c3.oy * 100) / this.toplamoy;
            return `width: ${oran}%`;
        },
    },
};
</script>
