<template>
  <div v-if="visible" id="shop">
    <h1>Shop</h1>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props:{
    visible: {
      type: Boolean,
      default: true
    },
    userData : {
      type: Array
    }
  },
  methods: {
    exit() {
      console.log("Exited: " + this.$options.name)
      this.$emit("exit", this.$options.name, "MainMenu")
    },
  }
}
</script>

<style scoped>

</style>