<template>
  <div v-if="visible" id="account" class="outer-container">
<!--    <NavBar></NavBar>-->
    <div class="main-content">
      <h1>Account</h1>
      <div>
          <img :src="imagePath(user.avatar)">
          <p> UserID: {{ user.userID }} </p>
<!--          </div>-->
          <p> Last Active Time: {{ user.lastActiveTime }} </p>
<!--          </div>-->
          <p> Highest Score: {{ user.accumulatedScore }} </p>
<!--          </div>-->
          <p> Coins: {{ user.coins }} </p>
      </div>
    </div>
  </div>
</template>

<script>
// import NavBar from '../components/reusable/navigationBar.vue'
import axios from "axios";
// import '../../assets/style.css'
export default {
  // components: { NavBar },
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
  },
  data(){
    return{
      ownedItemData: []
    }
  },
  async mounted() {
    //Load ownership data from database
    const url = 'http://localhost:4040/ownership/'
    const response = await axios.get(url)

    //Get relations that are related to current user only
    const currentUserID = this.user.userID
    this.ownedItemData = response.data.filter(
        function (element) {
          return element.userID.localeCompare(currentUserID) === 0
        }
    )
    console.log(response)
  },
  methods: {
    exit() {
      console.log("Exited: " + this.$options.name)
      this.$emit("exit", this.$options.name, "MainMenu")
    },
    imagePath(path) {
      return require('../assets/' + path);
    },
  }
}
</script>

<style scoped>
</style>
