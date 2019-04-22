<template lang="html">
  <div class="col">
    <div style="text-align: center;margin: 0 auto">
      <img :src="imagen" :style="{width: ancho+'px'}">
      <br>
      <span class="organizacion">{{ organizacion }}</span>
      <br>
      <span class="tipo">{{ tipo }}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['organizacion', 'tipo', 'imagen', 'ancho'],

}
</script>

<style lang="css">
</style>
