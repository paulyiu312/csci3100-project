<template>
  <div v-if="visible" id="account" class="outer-container">
    <NavBar></NavBar>
    <div class="main-content">
      <h1>Account</h1>
      <div>
          <img :src="user.avatar">
          <p2> UserID: {{ user.userID }} </p2>
          <p2> Last Active Time: {{ user.lastActiveTime }} </p2>
          <p2> Highest Score: {{ user.accumulatedScore }} </p2>
          <p2> Coins: {{ user.coins }} </p2>
      </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import '../../assets/style.css'

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
