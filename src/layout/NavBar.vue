<template lang="html">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light" id="mainNav">
       <div class="container">
        <router-link :to="{ name: 'Main' }" class="navbar-brand">Wiki Loves Earth 2018</router-link>
        <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="isOpen = !isOpen">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse" id="navbarResponsive" :class="{collapse: isOpen}">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{ path: '/', hash: 'participa' }"  activeClass="active" class="nav-link">Participar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ path: '/', hash: 'premios' }"  activeClass="active" class="nav-link">Premios</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Listado' }" activeClass="active" class="nav-link">Listado</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'FAQ' }" activeClass="active" class="nav-link">Preguntas frecuentes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Acerca' }" activeClass="active" class="nav-link">Acerca de...</router-link>
                    </li>
                </ul>
            </div>
       </div>
     </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    }
  },
  watch: {
    '$route': 'change'
  },
  methods: {
    change() {
      this.isOpen = !this.isOpen;
      return this.isOpen;
    }
  }
}
</script>

<style lang="css">
</style>
