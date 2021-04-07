<template>
    <nav>
      <img src="../assets/logo.png" alt="Game logo">
      <ul>
        <li><a href="game.html">Game</a></li>
        <li><a href="account.html">Account</a></li>
        <li><a href="leaderBoard.html">Leader Board</a></li>
        <li><a href="friends.html">Friends</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="index.html">Logout</a></li>
      </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
nav {
  margin: 0;
  padding: 0;
  border-right: 2px solid #eee;
  height: 100%;
  width: 200px;
  position: fixed;
  background-color: #fff;
}

nav img {
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li a {
  display: block;
  color: #000;
  text-decoration: none;
  padding: 16px 32px;
  font-size: large;
  font-family: Verdana, Arial, sans-serif;
}

li a:hover {
  background-color: #bbb;
  color: white;
}
</style>