<template>
  <div v-if="visible" id="shop">
    <h1>Shop</h1>
    <div>
      <p class="coin-owned">Coin: {{ coin }}</p>
    </div>

    <div class="clear-float tab">
      <button v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab">{{tab}}</button>
    </div>
    
    <div>
      <ul>
        <li v-for="(avatar, index) in avatars" 
            :key="index"
            class="shop-item-list">
          <div class="shop-item">
            <p>{{avatar.itemType}}: {{avatar.itemName}}</p>
            <!-- put img here -->
            <img :src="imagePath(avatar)">
            <p>Cost: {{avatar.cost}}</p>
            <button @click="buyItem(avatar)"
                    :disabled="avatar.owned"
                    >{{avatar.buttonLabel}}</button>
            <!-- :class="{'disabled-button': avatar.owned} -->
          </div>
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
          itemImage: 'logo.png',
          cost: 150,
          owned: false,
          buttonLabel: 'Buy'
        },
        {
          itemId: 1002,
          itemType: 'avatar',
          itemName: 'Dog',
          itemImage: 'logo.png',
          cost: 100,
          owned: false,
          buttonLabel: 'Buy'
        },
        {
          itemId: 1003,
          itemType: 'avatar',
          itemName: 'Mouse',
          itemImage: 'logo.png',
          cost: 50,
          owned: false,
          buttonLabel: 'Buy'
        }
      ],
      coin: 500,
      tabs: ['Avatar', 'Skin'],
      selectedTab: 'Avatar'
    }
  },
  methods: {
    exit() {
      console.log("Exited: " + this.$options.name)
      this.$emit("exit", this.$options.name, "MainMenu")
    },
    buyItem(item) {
      this.coin -= item.cost
      item.owned = true
      item.buttonLabel = 'Owned'
    },
    imagePath(item) {
      return require('../assets/' + item.itemImage);
    }
  }
}
</script>

<style scoped>
  .clear-float {
    clear: both;
  }
  .coin-owned {
    display: block;
    float: right;
    margin-right: 25px;
    border: 1px solid #000000;
    padding: 5px;
  }
  .shop-item {
    display: inline-block;
    border: 1px solid #3a2323;
    width: 30%;
  }
  .shop-item-list {
    display: inline;
  }
  .tab {
    text-align: left;
    margin-left: 20px;
  }
</style>