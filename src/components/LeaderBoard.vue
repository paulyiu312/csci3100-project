<template>
  <div v-if="visible" id="LeaderBoard">
    <h1>Leader Board</h1>
<!--    <div class="board">-->
    <div class="boardScroll">
      <table style="margin-left: auto; margin-right: auto">
        <thead>
        <tr>
          <th><button class="boardElement">Rank</button></th>
          <th><button class="boardElement">Avatar</button></th>
          <th><button class="boardElement">UserID</button></th>
          <th><button class="boardElement" v-on:click="sortList(userData, 'H')">HighestScore</button></th>
          <th><button class="boardElement" v-on:click="sortList(userData, 'A')">AccumulatedScore</button></th>
        </tr>
        </thead>
        <tbody>
          <tr v-for ="(user, index) in userData" v-bind:key="user.userID">
            <td>{{index+1}}</td>
            <td>{{user.avatar}}</td>
            <td>{{user.userID}}</td>
            <td>{{user.highestScore}}</td>
            <td>{{user.accumulatedScore}}</td>
          </tr>
        </tbody>
      </table>
    </div>
<!--    </div>-->
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
    },
    userData : {
      type: Array
    }
  },
  data(){
    return {

    }
  },
  methods: {
    exit(){
      console.log("Exited: " + this.$options.name)
      this.$emit("exit", this.$options.name, "MainMenu")
    },
    sortList(list, target){
      if (target === "H") {
        list.sort(
            function (a, b) {
              return parseFloat(a.highestScore) - parseFloat(b.highestScore);
            }
        )
      } else if (target === "A"){
        list.sort(
            function (a, b) {
              return parseFloat(a.accumulatedScore) - parseFloat(b.accumulatedScore);
            }
        )
      }
    }
  }
}
</script>

<style scoped>
#LeaderBoard {
  margin-top: 60px;
}
div.board table thread tr th button.boardElement{
  position:absolute;
  top:-24px;
}
div.boardScroll {
  outline: 4px solid red;
  /*margin: 512px 512px;*/
  /*padding: 32px 32px;*/
  /*margin-top:24px;*/
  max-height: 64px;
  alignment: center;
  background-color: orange;
  overflow: scroll;
  overflow-x: hidden;
}
button.boardElement {
  border: none;
  color: black;
  /*padding: 15px 32px;*/
  text-align: center;
  text-decoration: none;
  /*display: inline-block;*/
  font-size: 16px;
  margin: 4px 2px;
  background-color: transparent;
}
</style>