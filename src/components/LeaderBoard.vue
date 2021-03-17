<template>
  <div v-if="visible" id="LeaderBoard">
    <h1>Leader Board</h1>
    <div class="board">
      <p>Avatar UserID HighestScore AccumulatedScore</p>
    </div>
    <button type="button" id="buttonID" v-on:click="exit()">Go Back</button>
  </div>
</template>

<script>
export default {
  name: "LeaderBoard",
  props:{
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    exit(){
      console.log("Exited: " + this.$options.name)
      this.$emit("exit", this.$options.name, "MainMenu")
    }
  }
}
</script>

<style scoped>
#LeaderBoard {
  margin-top: 60px;
}
.board {
  outline: 4px solid red;
  margin: 16px 512px;
  /*padding: 32px 32px;*/
  background-color: orange;
}
</style>