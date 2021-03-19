<template>
  <div id="app">
    <LoginPage v-bind:visible= "visibility.Login" v-on:exit="login"></LoginPage>
    <MainMenu v-bind:guest="userTypeGuest" v-bind:user="user" v-bind:visible= "visibility.MainMenu" v-on:exit="goto"></MainMenu>
    <Game v-bind:user="user" v-bind:visible= "visibility.Game" v-on:exit="goto"></Game>
    <Shop v-bind:user="user" v-bind:visible= "visibility.Shop" v-on:exit="goto"></Shop>
    <LeaderBoard v-bind:user="user" v-bind:userData="userData" v-bind:visible= "visibility.LeaderBoard" v-on:exit="goto"></LeaderBoard>
    <Account v-bind:user="user" v-bind:userData="userData" v-bind:visible= "visibility.Account" v-on:exit="goto"></Account>
    <Friends v-bind:user="user" v-bind:userData="userData" v-bind:visible= "visibility.Friends" v-on:exit="goto"></Friends>
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
import Friends from "./components/Friends";

export default {
  name: 'App',
  components: {
    LoginPage,
    MainMenu,
    LeaderBoard,
    Shop,
    Game,
    Account,
    Friends
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
      userTypeGuest: false,
      user: {
        userID: "ChanTaiMan",
        password: "123",
        lastActiveTime: "2022-01-01-00-00",
        highestScore: 0,
        accumulatedScore: 0,
        coins: 0,
        avatar: "./assets/avatar/default.png",
        friendsID: [
          "HiHi123",
          "ABC1999"
        ]
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
        },
        {
          userID: "ChanTaiMan",
          password: "123",
          lastActiveTime: "2022-01-01-00-00",
          highestScore: 0,
          accumulatedScore: 0,
          coins: 0,
          avatar: "./assets/avatar/default.png",
          friendsID: [
            "HiHi123",
            "ABC1999"
          ]
        }
      ]
    }
  },
  methods: {
    login(inputID, inputPW){
      this.user.userID = inputID
      this.user.password = inputPW
      if (this.user.userID.localeCompare("LOGINASGUEST") === 0 && this.user.password.localeCompare("LOGINASGUEST") === 0)
        this.userTypeGuest = true
      else this.userTypeGuest = false
      console.log("Account: " + this.user.userID + " Password: " + this.user.password)
      this.goto("Login", "MainMenu")
    },
    goto(origin, destination){
      if (this.visibility[origin] != null && this.visibility[destination] != null && this.visibility[origin] !== this.visibility[destination]) {
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