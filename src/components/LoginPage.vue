<template>
  <div v-if="visible" id = "LoginPage">
    <h1> Login Page </h1>
    <div class="LoginBox">
<!--      <form action="/action_page.php">-->
        <br>
        <label>Account ID:</label>
        <input v-model = "accountID" id="inputID" placeholder="Enter account id here" required><br><br>
        <label>Password:</label>
        <input v-model = "password" id="inputPassword" placeholder="Enter password here" required><br><br>
        <button type="submit" class="button" id="buttonID" v-on:click="login(accountID, password);">Login</button>
        <br><br>
<!--      </form>-->
      <button type="submit" class="button" id="buttonPassword" v-on:click="loginGuest();">Login as guest</button>
      Forgot <a href="#"> password? </a><br>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginPage",
  props:{
    visible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      accountID: "",
      password: ""
    }
  },
  methods: {
    login(ID, PW){
      console.log("Logged in as User.")
      this.accountID = ID
      this.password = PW
      this.exit()
    },
    loginGuest(){
      console.log("Logged in as Guest.")
      this.accountID = "LOGINASGUEST"
      this.password = "LOGINASGUEST"
      this.exit()
    },
    exit(){
      this.$emit("exit", this.accountID, this.password)
    }
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