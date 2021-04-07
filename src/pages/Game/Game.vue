<template>
  <div v-if="visible" id="game">
    <NavBar></NavBar>
    <div class="main-content">
      <h1>Game</h1>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import '../../assets/style.css'

export default {
  components: { NavBar },
  name: "Game",
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