<template>
  <div id="app">
    <LoginPage v-bind:visible= "visibility.Login" v-on:exit="login"></LoginPage>
    <MainMenu v-bind:visible= "visibility.MainMenu" v-on:exit="goto"></MainMenu>
    <Game v-bind:userData="userData" v-bind:visible= "visibility.Game" v-on:exit="goto"></Game>
    <Shop v-bind:userData="userData" v-bind:visible= "visibility.Shop" v-on:exit="goto"></Shop>
    <LeaderBoard v-bind:userData="userData" v-bind:visible= "visibility.LeaderBoard" v-on:exit="goto"></LeaderBoard>
    <Account v-bind:userData="userData" v-bind:visible= "visibility.Account" v-on:exit="goto"></Account>
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
import Shop from "./components/Shop";
import Game from "./components/Game";
import Account from "./components/Account";

export default {
  name: 'App',
  components: {
    LoginPage,
    MainMenu,
    LeaderBoard,
    Shop,
    Game,
    Account
  },
  data () {
    return {
      node: {
        Login: "Login",
        MainMenu: "MainMenu",
        Game: "Game",
        Shop: "Shop",
        LeaderBoard: "LeaderBoard",
        Account: "Account",
        Friends: "Friends"
      },
      visibility: {
        "Login": true,
        "MainMenu": false,
        "Game": false,
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
      userData: [
        {
          userID: "ABC1999",
          password: "SecretPW",
          lastActiveTime: "2021-03-19-20-30",
          highestScore: 50,
          accumulatedScore: 1000,
          coins: 25,
          avatar: "./assets/avatar/default.png",
          friendsID: []
        },
        {
          userID: "HiHi123",
          password: "GoodMorning",
          lastActiveTime: "2021-03-15-21-19",
          highestScore: 250,
          accumulatedScore: 9000,
          coins: 550,
          avatar: "./assets/avatar/default.png",
          friendsID: []
        },
        {
          userID: "Killer55",
          password: "IAmSleepy",
          lastActiveTime: "2020-12-24-15-46",
          highestScore: 5,
          accumulatedScore: 10000,
          coins: 10,
          avatar: "./assets/avatar/default.png",
          friendsID: []
        }
      ]
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