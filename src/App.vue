<template>
  <div id="app">
    <LoginPage v-bind:visible= "visibility.login" v-on:exit="leave"></LoginPage>
    <MainMenu v-bind:visible= "visibility.Main" v-on:exit="leave"></MainMenu>
  </div>
</template>

<style>
#app {
  text-align: center;
  margin-top: 60px;
  background-image: url("./assets/background.png");
}
</style>

<script>
import LoginPage from './components/LoginPage.vue'
import MainMenu from "./components/MainMenu";

export default {
  name: 'App',
  components: {
    LoginPage,
    MainMenu
  },
  data () {
    return {
      visibility: {
        login: true,
        Main: false
      }
    }
  },
  methods: {
    leave(location){
      console.log("Leaving: " + location)
      switch (location) {
        case "LoginPage":
          this.visibility.login = false
          this.visibility.Main = true
              break
        case "MainMenu":
          this.visibility.login = true
          this.visibility.Main = false
              break
      }
    }
  }
}
</script>