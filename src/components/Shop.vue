<template>
  <div v-if="visible" id="shop">
    <h1>Shop</h1>
    <div>
      <p class="coin-owned">Coin: {{ coin }}</p>
    </div>

    <div>
      <ul>
        <li v-for="(avatar, index) in avatars" :key="index">
          <div>
            <p>ID: {{avatar.itemId}} | Type: {{avatar.itemType}}</p>
            <p>{{avatar.itemName}}</p>
            <p>Cost: {{avatar.cost}}</p>
          </div>
          <button @click="buyItem(avatar)">Buy</button>
        </li>
      </ul>
    </div>

    <button type="button" id="buttonID" v-on:click="exit()">Go Back</button>
  </div>

</template>

<script>
export default {
  props:{
    visible: {
      type: Boolean,
      default: true
    },
    userData : {
      type: Array
    }
  },
  name: "Shop",
  data() {
    return {
      avatars: [
        {
          itemId: 1001,
          itemType: 'avatar',
          itemName: 'Cat',
          itemImage: './assets/logo.png',
          cost: 150
        },
        {
          itemId: 1002,
          itemType: 'avatar',
          itemName: 'Dog',
          itemImage: '../assets/logo.png',
          cost: 100
        },
        {
          itemId: 1003,
          itemType: 'avatar',
          itemName: 'Mouse',
          itemImage: '../assets/logo.png',
          cost: 50
        }
      ],
      coin: 500
    }
  },
  methods: {
    exit() {
      console.log("Exited: " + this.$options.name)
      this.$emit("exit", this.$options.name, "MainMenu")
    },
    buyItem(item) {
      this.coin -= item.cost
    }
  }
}
</script>

<style scoped>
  .coin-owned {
    float: right;
    margin-right: 25px;
    border: 1px solid #000000;
    padding: 5px;
  }
</style>