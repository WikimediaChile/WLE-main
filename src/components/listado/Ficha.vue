<template lang="html">
    <div class="card">
        <div class="row">
            <div class="col-md-6">
                <div class="card-body">
                    <h5 class="card-title"> {{ ficha.nombre }} </h5>
                    <p class="card-text d-none d-sm-block" v-html="content"></p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card-img-bottom d-none d-sm-block" :style="fondo">
                </div>
                <div class="descripcion">
                    <small class="text-muted d-none d-sm-block">{{ ficha.regiones }} &mid; {{ ficha.provincias }} &mid; {{ ficha.superficie }} </small>
                </div>
            </div>
        </div>

        <div class="card-footer">
            <a :href="commons" class="btn btn-primary"><icon name="upload"></icon> Subir a WLE</a>
            <a :href="'https://commons.wikimedia.org/wiki/Category:'+encodeURIComponent(ficha.commons)" v-if="ficha.commons" class="btn btn-secondary"><icon name="commons"></icon> Ver más fotos</a>
            <a :href="articulo_wiki" v-if="ficha.articulo" class="btn bnt-secondary btn-outlined" target="_blank"><icon name="brands/wikipedia-w"></icon> Leer artículo en Wikipedia</a>
        </div>
    </div>
</template>

<script>
import 'vue-awesome/icons/upload';
import 'vue-awesome/icons/brands/wikipedia-w';
import Icon from 'vue-awesome/components/Icon';
import commons from '../../styles/icon.js'

export default {
  data() {
    return {
      content: ''
    }
  },
  components: {
    Icon
  },
  props: ['ficha'],
  computed: {
    fondo() {
      return 'background: url(' + this.ficha.imagen + ') center no-repeat'
    },
    commons() {
      let cat = !!this.ficha.commons ? '&categories=' + encodeURIComponent(this.ficha.commons) : '';
      return 'https://commons.wikimedia.org/wiki/Special:UploadWizard?campaign=wle-cl&descriptionlang=es&description=' + encodeURIComponent(this.ficha.nombre) + cat
    },
    articulo_wiki() {
      return 'https://es.wikipedia.org/wiki/' + this.ficha.articulo;
    }
  },
  methods: {
    fetchSummary() {
      if (!!this.ficha.articulo) {
        this.$nextTick(function() {
          this.$http.get('https://es.wikipedia.org/api/rest_v1/page/summary/' + this.ficha.articulo)
            .then(response => response.body).then(data => {
              this.content = data.extract_html
            })
        })
      } else {
        this.content = '<div class="d-none d-sm-block">Aún no existe este artículo en Wikipedia en español, ¿nos ayudas a crearlo?<br /><br /><a href="https://es.wikipedia.org/w/index.php?action=edit&title=' + encodeURIComponent(this.ficha.nombre) +
          '" class="btn btn-primary">¡Créalo!</a></div>';
      }
    }
  },
  mounted() {
    this.fetchSummary();
  },
  updated() {
    this.fetchSummary();
  }
}
</script>
