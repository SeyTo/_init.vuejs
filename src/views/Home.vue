<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
  }
};
</script>

<template lang="pug">
div
  | Home works!!
</template>

<style lang="scss" scoped>
</style>
