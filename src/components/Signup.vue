<template>
  <form @submit.prevent="signup()">

    <label>New Account ID:</label>
    <input v-model = "accountID" id="inputID" placeholder="Enter account id here" required><br><br>
    <label>New Password:</label>
    <input v-model = "password" id="inputPassword" placeholder="Enter password here" required><br><br>
    <button type="submit">Signup</button>

  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return{
      accountID: "",
      password: ""
    }
  },
  methods: {
    async signup(){
      console.log("Requested signup procedure.");

      const response = await axios.post('http://localhost:8080/signup/', {
        userID: this.accountID,
        password: this.password
      });

      console.log(response);

    }
  }
}
</script>

<style scoped>

</style>