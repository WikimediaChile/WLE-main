<template>
<div>
  <app-header/>
  <section class="features-icons bg-light text-center" id="participa">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2>¿Cómo <strong>participar</strong>?</h2>
        </div>
        <app-section icon="user" scale="4">
          <h4 slot="titulo">Crea un usuario en Commons</h4> Para participar debes crearte un usuario en Wikimedia Commons
          <br />
          <a href="https://commons.wikimedia.org/w/index.php?title=Special:CreateAccount&uselang=es" class="btn btn-primary">Crear tu cuenta</a>
          <p>
            <span class="advertencia">Debes <strong><u>confirmar tu correo en Wikimedia Commons</u></strong> para poder contactarnos si resultas ganador</span>
          </p>
        </app-section>

        <app-section icon="search" scale="4">
          <h4 slot="titulo">Encuentra el espacio natural</h4> Encuentra el espacio natural que deseas subir al concurso
          <br />
          <router-link :to="{ name: 'Listado' }" activeClass="active" class="btn btn-primary">Listado</router-link>
        </app-section>

        <app-section icon="upload" scale="4">
          <h4 slot="titulo">Sube la imagen</h4> Sube la imagen a Wikimedia Commons
        </app-section>
      </div>
    </div>
  </section>
  <section class="features-icons bg-light text-center" id="premios">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2><strong>Premios</strong></h2>
        </div>
        <app-section>
          <img slot="foto" src="/static/ipad.jpg" alt="ipad" class="img-thumbnail">
          <h4 slot="titulo">iPad 2018<span class="lugar"> / 1er. lugar</span></h4>
        </app-section>

        <app-section>
          <img slot="foto" src="/static/polaroid.jpg" alt="polaroid" class="img-thumbnail">
          <h4 slot="titulo">Cámara Polaroid<span class="lugar"> / 2do. lugar</span></h4>
        </app-section>

        <app-section>
          <img slot="foto" src="/static/kindle.jpg" alt="kindle" class="img-thumbnail">
          <h4 slot="titulo">Kindle<span class="lugar"> / 3er. lugar</span></h4>
        </app-section>
        <div class="col-12 text-center">
          <h5><span class="advertencia">Las imágenes son referenciales. Los premios pueden ser modificados en razón de su disponibilidad.</span></h5>
        </div>
      </div>
    </div>
  </section>
  <section class="showcase">
      <div class="container-fluid p-0">
        <app-foto imagen="https://upload.wikimedia.org/wikipedia/commons/7/7b/Laguna_Quillelhue%2C_Puesco_-_Flickr_-_Pato_Novoa.jpg">
            <h2 name="titulo">Las fotos de paisajes</h2>
            Las fotografías de paisajes son importantes para preservar el valor natural de nuestros entornos.
        </app-foto>
        <app-foto :derecha="true" imagen="https://upload.wikimedia.org/wikipedia/commons/6/6f/Valle_de_la_Luna%2C_Atacama.jpg">
            <h2 name="titulo">Fotografías únicas</h2>
            Intenta capturar esa imagen única que transmita la fuerza y emotividad del lugar
        </app-foto>
        <app-foto imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Vista_del_Cerro_Drag%C3%B3n_desde_la_carretera_que_conecta_a_Iquique_con_Alto_Hospicio..jpg/1280px-Vista_del_Cerro_Drag%C3%B3n_desde_la_carretera_que_conecta_a_Iquique_con_Alto_Hospicio..jpg">
            <h2 name="titulo">Encuentra santuarios y zonas protegidas</h2>
            En ocasiones, las zonas protegidas no están muy lejos de donde te encuentras...
        </app-foto>
      </div>
    </section>
</div>
</template>

<script>
import Header from '../layout/Header.vue';
import Section from './main/Section.vue';
import Foto from './main/Foto.vue';

export default {
  components: {
    AppHeader: Header,
    AppSection: Section,
    AppFoto: Foto,
  }
}
</script>

<style scoped>
img {
  padding-left: 10px;
}
</style>
