<template lang="html">
    <section class="features-icons bg-light" id="que-es">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h3>Listado de área protegidas participantes</h3>
                </div>
                <div class="col-12">
                    <div class="form-group row">
                        <label for="regiones" class="col-sm-2 col-form-label">Región</label>
                        <div class="col-sm-8">
                            <select class="form-control" @change="buscar" v-model="region">
                                <option v-for="region in regiones">{{ region }}</option>
                            </select>
                        </div>
                        <div class="d-none d-sm-block">
                        <button class="btn btn-primary" @click="buscar">Buscar</button>
                    </div>
                    </div>
                </div>
                <div class="col-12">
                    <app-ficha v-for="(ficha, index) in fichas" :ficha="ficha" :key="ficha.index"></app-ficha>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Ficha from './listado/Ficha.vue';
export default {
  data() {
    return {
      regiones: [],
      region: '',
      fichas: []
    }
  },
  components: {
    AppFicha: Ficha
  },
  watch: {
    '$route': 'doSearch'
  },
  mounted() {
    this.$http.get('region').then((response) => response.body).then(data => {
      this.regiones = data
    })
    if (!!this.$route.params.region) {
      this.doSearch();
    }

  },
  methods: {
    buscar() {
      this.$router.push({
        name: 'Regiones',
        params: {
          region: this.region
        }
      })
    },
    doSearch() {
      this.fichas = [];
      if (!!this.$route.params.region) {
        this.region = this.$route.params.region;
        this.$http.get('region/' + this.region).then((response) => response.body).then(data => {
          this.fichas = data
        });
      }
    }
  }
}
</script>
