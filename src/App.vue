<template lang="pug">
  div(id="app")
    nav-bar/
    router-view/
</template>

<style lang="scss">
</style>

<script>
import NavBar from './shared/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  mounted() {
  }
}
</script>

