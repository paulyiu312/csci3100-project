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
      password: "",
      userData: []
    }
  },
  async mounted(){
    const url = 'http://localhost:4040/userdata/'
    const response = await axios.get(url)
    console.log(response)
    console.log("Data mounted successfully.")
    this.userData = response.data
  },
  methods: {
    async signup(){
      console.log("Requested signup procedure.");

      //Check if the ID is taken already
      const currentInputID = this.accountID
      let duplicate = this.userData.filter(
          function (element) {
            return element.userID.localeCompare(currentInputID) === 0
          }
      )
      if (duplicate.length !== 0){
        alert("The input ID: \"" + currentInputID + "\" is already taken.")
        return
      }

      //Post data to database
      const url = 'http://localhost:4040/userdata/create'
      const response = await axios.post(url, {
        userID: this.accountID,
        password: this.password
      });
      console.log(response);

      await this.$router.push('/') //Redirect to Login page

    }
  }
}
</script>

<style scoped>

</style>