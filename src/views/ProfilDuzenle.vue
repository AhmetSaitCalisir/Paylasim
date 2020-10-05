<template>
<div id="profilDuzenle">
    <h1>PROFİL DÜZENLE</h1>
    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group row">
                        <label for="inputkullaniciadi" class="col-sm-3 col-form-label">Kullanıcı Adı</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="inputkullaniciadi" placeholder="crayzboy_45" v-model="yeni.kullaniciAdi" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputurl" class="col-sm-3 col-form-label">Fotoğraf url'si</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="inputurl" placeholder="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" v-model="yeni.fotoUrl" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-3"></div>
            {{ yeni.kullaniciAdi }}
            {{ yeni.fotoUrl }}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "profilDuzenle",
    data() {
        return {
            yeni: {
                kullaniciAdi: "",
                fotoUrl: "",
            },
        };
    },
};
</script>
