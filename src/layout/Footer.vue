<template lang="html">
    <footer class="footer bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <app-logo imagen="/static/wmcl.png" ancho="140" organizacion="Wikimedia Chile" tipo="Organizador" />
                <app-logo imagen="/static/sernatur.jpg" ancho="200" organizacion="Servicio Nacional de Turismo" tipo="Patrocinador" />
              </div>
            </div>
          </div>
          <br style="clear:all">
          <div class="row">
            <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul class="list-inline mb-2">
                <li class="list-inline-item">
                  <a href="https://wikimedia.cl/Wikimedia_Chile:Acerca_de">Wikimedia Chile</a>
                </li>
                <li class="list-inline-item">&sdot;</li>
                <li class="list-inline-item">
                  <a href="https://wikimedia.cl/contacto">Contacto</a>
                </li>
              </ul>
              <p class="text-muted small mb-4 mb-lg-0">CC-BY-SA 4.0. Con el <icon name="heart"/> para el mundo</p>
            </div>
            <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul class="list-inline mb-0">
                <li class="list-inline-item mr-3">
                  <a href="https://fb.com/WikimediaCL">
                      <icon name="brands/facebook" scale="2"></icon>
                  </a>
                </li>
                <li class="list-inline-item mr-3">
                  <a href="https://twitter.com/wikimedia_cl">
                    <icon name="brands/twitter" scale="2"></icon>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://instagram.com/wikimedia_cl">
                    <icon name="brands/instagram" scale="2"></icon>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.youtube.com/channel/UCBpGdUOKIvjV3Q-c8vUGEfA">
                    <icon name="brands/youtube" scale="2"></icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
</template>

<script>
import 'vue-awesome/icons/brands/facebook';
import 'vue-awesome/icons/brands/twitter';
import 'vue-awesome/icons/brands/instagram';
import 'vue-awesome/icons/brands/youtube';
import 'vue-awesome/icons/heart';
import Logo from '../components/Logos.vue';
import Icon from 'vue-awesome/components/Icon'

export default {
  components: {
    Icon,
    AppLogo: Logo
  }
}
</script>
