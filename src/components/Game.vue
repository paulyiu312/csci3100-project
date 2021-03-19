<template>
  <div v-if="visible" id="game">
    <h1>Game</h1>
  </div>
</template>

<script>
export default {
  name: "Game",
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