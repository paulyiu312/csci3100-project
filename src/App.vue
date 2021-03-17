<template>
  <div id="app">
    <LoginPage v-bind:visible= "visibility.Login" v-on:exit="login"></LoginPage>
    <MainMenu v-bind:visible= "visibility.MainMenu" v-on:exit="goto"></MainMenu>
    <LeaderBoard v-bind:visible= "visibility.LeaderBoard" v-on:exit="goto"></LeaderBoard>
  </div>
</template>

<style>
#app {
  text-align: center;
  background-image: url("./assets/background.png");
}
</style>

<script>
import LoginPage from './components/LoginPage.vue'
import MainMenu from "./components/MainMenu";
import LeaderBoard from "./components/LeaderBoard";

export default {
  name: 'App',
  components: {
    LoginPage,
    MainMenu,
    LeaderBoard
  },
  data () {
    return {
      node: {
        Login: "Login",
        MainMenu: "MainMenu",
        Play: "Play",
        Shop: "Shop",
        LeaderBoard: "LeaderBoard",
        Account: "Account",
        Friends: "Friends"
      },
      visibility: {
        "Login": true,
        "MainMenu": false,
        "Play": false,
        "Shop": false,
        "LeaderBoard": false,
        "Account": false,
        "Friends": false
      },
      user: {
        userID: "",
        password: "",
        lastActiveTime: "",
        highestScore: 0,
        accumulatedScore: 0,
        coins: 0,
        avatar: "./assets/avatar/default.png",
        friendsID: []
      },
      userData: []
    }
  },
  methods: {
    login(inputID, inputPW){
      this.user.userID = inputID
      this.user.password = inputPW
      console.log("Account: " + this.user.userID + " Password: " + this.user.password)
      this.goto("Login", "MainMenu")
    },
    goto(origin, destination){
      if (this.visibility[origin] != null && this.visibility[destination] != null) {
        console.log("Goto: " + destination + " from " + origin)
        this.visibility[origin] = false
        this.visibility[destination] = true
      } else {
        console.log("Invalid input: (" + origin + ", " + destination + ")")
      }
    }
  }
}
</script>