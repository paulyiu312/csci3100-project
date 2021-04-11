<template>
  <div v-if="visible" id = "LoginPage">
    <h1> Login Page </h1><br>
    <div class="LoginBox">
      <form v-on:submit.prevent="login()">
        <label>Account ID:</label>
        <input v-model = "accountID" id="inputID" placeholder="Enter account id here" required><br><br>
        <label>Password:</label>
        <input v-model = "password" id="inputPassword" placeholder="Enter password here" required><br><br>
        <button type="submit" class="button" id="buttonID">Login</button>
      </form>
<!--      <button type="submit" class="button" id="buttonPassword" v-on:click="loginGuest();">Login as guest</button>-->
      <br>Do not have an account? <router-link to='/signup'>Create one</router-link> now!<br>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "LoginPage",
  props:{
    visible: {
      type: Boolean,
      default: true
    },
    userData : {
      type: Array
    },
  },
  data () {
    return {
      accountID: "",
      password: ""
    }
  },
  // async mounted(){
  //   const url = 'http://localhost:4040/userdata/'
  //   const response = await axios.get(url)
  //   this.userData = response.data
  // },
  methods: {
    async login(){
      console.log("Attempt to login as user")

      //Check if the ID is taken already
      const inputID = this.accountID
      const inputPW = this.password
      let found = this.userData.find(
          function (element) {
            return element.userID.localeCompare(inputID) === 0 && element.password.localeCompare(inputPW) === 0
          }
      )
      if (found === undefined){
        alert("The input userID or password is wrong.")
        return
      }

      //Only support string
      //https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
      sessionStorage.setItem('currentUserID', found.userID)
      this.$emit("login", this.accountID)

      await this.$router.push('/account') //Redirect to Account page
    },
  }
}

</script>

<style scoped>
#LoginPage {
  margin-top: 128px;
}
div.LoginBox {
  outline: 4px solid red;
  margin: 16px 512px;
  /*padding: 32px 32px;*/
  background-color: orange;
}
div.buttons {
  text-align: right;
}
.button {
  /*border: none;*/
  color: black;
  /*padding: 16px 32px;*/
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /*font-size: 16px;*/
  margin: 0px 8px;
  /*transition-duration: 0.4s;*/
  cursor: pointer;
}
</style>