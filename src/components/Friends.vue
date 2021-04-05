<template>
  <div v-if="visible" id="manageFriend">
    <h1>Friends</h1>
    <label v-for="(ID, index) in user.friendsID" v-bind:key="index">
      {{index + 1}} {{ID}}<br>
    </label><br>
    <label v-if="user.friendsID.length <= 0">There is currently no one in your friend list<br></label>
    <ScrollableTable ref="table" v-bind:visible = true v-bind:maxEntry = 500 v-bind:arrayData = searchData></ScrollableTable>
    <br>
    <input v-model = "inputString" v-on:input="updateArray(inputString)" id="inputID" placeholder="Enter User ID here"><br><br>
    <button type="button" id="buttonAdd" v-on:click="add(inputString)">Add Friend</button>
    <button type="button" id="buttonRemove" v-on:click="remove(inputString)">Remove Friend</button>
    <br><br>
    <button type="button" v-on:click="exit()">Go Back</button>
  </div>
</template>

<script>
import ScrollableTable from './reusable/ScrollableTable.vue'
export default {
  name: "Friends",
  components:{
    ScrollableTable
  },
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
  data(){
    return{
      inputString: "",
      searchData: []
    }
  },
  methods: {
    exit() {
      console.log("Exited: " + this.$options.name)
      this.$emit("exit", this.$options.name, "MainMenu")
    },
    add(input){
      // Check if input is the same as ID of current user
      // Note that empty string would be be true
      if(this.user.userID.localeCompare(input) === 0){
        console.log("User ID: " + input + " is the user's current ID.")
        return
      }
      // Check if input can already be found in user.friendID
      let duplicate = this.user.friendsID.filter(
          function (element) {
            return element.localeCompare(input) === 0
          }
      )
      if (duplicate.length > 0){
        console.log("User ID: " + input + " is found in current user's friend list.")
        return
      }
      // Check if input exists in userData or not
      let validEntry = this.userData.filter(
          function (element) {
            return element.userID.localeCompare(input) === 0
          }
      )
      if (validEntry.length > 0) {
        console.log("User ID: " + input + " is added as friends.")
        this.user.friendsID.push(validEntry[0].userID)
        this.inputString = ""
        this.display()
      }
      else alert("User ID: " + input + " is invalid!")
    },
    remove(input){
      // Check if input is the same as ID of current user
      if(this.user.userID.localeCompare(input) === 0){
        console.log("You cannot not unfriend yourself.")
        return
      }
      // Check if user.friendsID is empty or not
      if (this.user.friendsID.length <= 0) {
        console.log("This user has no friend.")
        return
      }
      // Check if input exists in user.friendsID or not
      let validEntry = this.user.friendsID.filter(
          function (element){
            return element.localeCompare(input) === 0
          }
      )
      if (validEntry.length > 0) {
        console.log("User ID: " + input + " is removed from friend list.")
        this.user.friendsID.splice(this.user.friendsID.indexOf(validEntry[0]), 1)
        this.inputString = ""
        this.display()
      }
      else alert("User ID: " + input + " not found!")
    },
    display(){
      console.log("Current user: " + this.user.userID)
      console.log("Current user: " + this.user.password)
      console.log("Current user: " + this.user.coins)
      console.log(this.user.friendsID.length)
      this.user.friendsID.forEach(function (element){console.log(element)})
    },
    updateArray(input){
      //Get array of elements with input as sub string, if empty string then empty array???
      let currentUserID = this.user.userID
      this.searchData = this.userData.filter(
          function (element) {
            return element.userID.localeCompare(currentUserID) !== 0 && element.userID.indexOf(input) >= 0
          }
      )
      //Resort the elements of child array
      let tableScroll = this.$refs.table
      tableScroll.sortArray(this.searchData)
    }
  }
}
</script>

<style scoped>

</style>