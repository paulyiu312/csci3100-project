<template>
    <nav>
      <img src="../assets/logo.png" alt="Game logo">
      <ul>
        <li><a href="game.html">Game</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="leaderBoard.html">LeaderBoard</a></li>
        <li><a href="account.html">Account</a></li>
        <li><a href="friends.html">Friends</a></li>
        <li><a href="index.html">Logout</a></li>
      </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
img {
  width: 150px;
}

ul {
  list-style-type: none;
  width: 200px;
  margin: 0;
  padding: 0;
}

li a {
  display: block;
  color: #000;
  text-decoration: none;
  padding: 8px 16px;
}

li a:hover {
  background-color: #aaa;
  color: white;
}
</style>