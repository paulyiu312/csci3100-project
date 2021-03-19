<template>
  <div v-if="visible" id="account">
    <h1>Account</h1>
  </div>
</template>

<script>
export default {
  name: "Account",
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