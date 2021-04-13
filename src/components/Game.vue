<template>
  <div v-if="visible" id="game">
    <h1>Game</h1>
    <div class="game-area">
      <canvas id="myCanvas" width="600" height="400" style="border:1px solid #d3d3d3;">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <p>
        <span v-show="started && ended">Game ended, </span>Coins earned: {{coinsEarned}}
      </p>
      <button v-on:click="start()" :disabled="started">{{startBtnLabel}}</button>
      <button v-on:click="restart()">Restart</button>
    </div>

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
  data() {
    return {
      started: false,
      ended: false,
      coinsEarned: 0,
      startBtnLabel: 'Start'
    }
  },
  methods: {
    exit() {
      console.log("Exited: " + this.$options.name)
      this.$emit("exit", this.$options.name, "MainMenu")
    },
    start(){
      this.started = true
      this.ended = false
      this.startBtnLabel = 'Game Started'
		},
    regenerate(){
      if (this.started == true && this.coinsEarned < 10) {
        this.coinsEarned += 1
      } else {
        this.ended = true;
      }
    },
    restart() {
      this.startBtnLabel = 'Start'
      this.started = false
      this.ended = false
      this.coinsEarned = 0
    }
  },
  mounted() {
    this.interval = setInterval(this.regenerate, 1000);
  }
}
</script>

<style scoped>
div.game-area {
  width: 600px;
  display: block;
  margin: auto;
}

</style>