<template>
  <div v-if="visible" id="manageFriend">
    <h1>Friends</h1>
    <button type="button" v-on:click="exit()">Go Back</button>
  </div>
</template>

<script>
export default {
  name: "Friends",
  props:{
    visible: {
      type: Boolean,
      default: true
    },
    user:{
      default: {
        userID: "",
        password: "",
        lastActiveTime: "",
        highestScore: 0,
        accumulatedScore: 0,
        coins: 0,
        avatar: "./assets/avatar/default.png",
        friendsID: []
      }
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