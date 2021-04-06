<template>
  <div v-if="visible" id="account">
    <nav-bar></nav-bar>
    <h1>Account</h1>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'

export default {
  components: { NavBar },
  name: "Account",
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
        skin: "./assets/skin/default.png",
        friendsID: []
      }
    },
    userData : {
      type: Array
    },
    ownedItemData:{
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