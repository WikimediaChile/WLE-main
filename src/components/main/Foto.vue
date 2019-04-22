<template lang="html">
    <div class="row">

      <div class="col-lg-6 text-white showcase-img" :class="{'order-lg-2': this.derecha}":style="fondo"></div>
      <div class="col-lg-6 my-auto showcase-text" :class="{'order-lg-1': this.derecha}">
        <slot name="titulo"></slot>
        <p class="lead mb-0"><slot></slot></p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    imagen: {
      type: String
    },
    'derecha': {
      type: Boolean
    }
  },
  computed: {
    fondo() {
      return 'background-image: url(' + this.imagen + ')';
    }
  }
}
</script>

<style lang="css">
</style>
