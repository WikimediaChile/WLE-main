<template lang="html">
    <div class="col-lg-4">
      <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
        <div class="features-icons-icon d-flex text-centered" v-if="icon">
          <icon :name="icon" :scale="scale ? scale : 1"></icon>
        </div>
        <slot name="foto"></slot>
        <slot name="titulo"></slot>
        <p class="lead mb-0"><slot></slot></p>
      </div>
    </div>
</template>

<script>
import 'vue-awesome/icons/user';
import 'vue-awesome/icons/search';
import 'vue-awesome/icons/upload';
import Icon from 'vue-awesome/components/Icon'
export default {
  props: ['icon', 'scale'],
  components: {
    Icon
  }
}
</script>
<style scoped lang="scss">
@import '../../styles/own.scss';
svg {
    color: $primary-svg;
}
</style>
