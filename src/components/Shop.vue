<template>
  <div v-if="visible" id="shop">
    <h1>Shop</h1>

    <div>
      <div class="user-info">
        <img :src="imagePath('logo.png')" >
        UserID: 12345
      </div>
      
      <div class="user-coin">
        Coin: {{ coin }}
      </div>
    </div>

    <div class="clear-float tab">
      <button v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab">{{tab}}</button>
    </div>
    
    <!-- List of avatar items -->
    <div v-show="selectedTab === 'Avatar'">
      <ul>
        <li v-for="(avatar, index) in avatars" 
            :key="index"
            class="shop-item-list">
          <div class="shop-item">
            <p>{{avatar.itemType}}: {{avatar.itemName}}</p>
            <img :src="imagePath(avatar.itemImage)" class="item-image">
            <p>Cost: {{avatar.cost}}</p>
            <button @click="buyItem(avatar)"
                    :disabled="avatar.owned || coin < avatar.cost"
                    >{{ buyButtonLabel(avatar) }}</button>
            <!-- :class="{'disabled-button': avatar.owned} -->
          </div>
        </li>
      </ul>
    </div>

    <!-- List of skin items -->
    <div v-show="selectedTab === 'Skin'">
      <ul>
        <li v-for="(skin, index) in skins" 
            :key="index"
            class="shop-item-list">
          <div class="shop-item">
            <p>{{skin.itemType}}: {{skin.itemName}}</p>
            <img :src="imagePath(skin.itemImage)" class="item-image">
            <p>Cost: {{skin.cost}}</p>
            <button @click="buyItem(skin)"
                    :disabled="skin.owned || coin < skin.cost"
                    >{{ buyButtonLabel(skin) }}</button>
            <!-- :class="{'disabled-button': skin.owned} -->
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
          itemType: 'Avatar',
          itemName: 'Cat',
          itemImage: 'cat.png',
          cost: 150,
          owned: false,
          buttonLabel: 'Buy'
        },
        {
          itemId: 1002,
          itemType: 'Avatar',
          itemName: 'Dog',
          itemImage: 'dog.png',
          cost: 100,
          owned: false,
          buttonLabel: 'Buy'
        },
        {
          itemId: 1003,
          itemType: 'Avatar',
          itemName: 'Mouse',
          itemImage: 'mouse.png',
          cost: 50,
          owned: false,
          buttonLabel: 'Buy'
        }
      ],
      skins: [
        {
          itemId: 2001,
          itemType: 'Skin',
          itemName: 'Knight',
          itemImage: 'logo.png',
          cost: 50,
          owned: false,
          buttonLabel: 'Buy'
        },
        {
          itemId: 2002,
          itemType: 'Skin',
          itemName: 'Magician',
          itemImage: 'logo.png',
          cost: 100,
          owned: false,
          buttonLabel: 'Buy'
        },
        {
          itemId: 2003,
          itemType: 'Skin',
          itemName: 'Warrior',
          itemImage: 'logo.png',
          cost: 150,
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
    },
    imagePath(path) {
      return require('../assets/' + path);
    },
    buyButtonLabel(item) {
      if (item.owned == true) {
        return 'Owned'
      }
      else if (this.coin < item.cost) {
        return 'Not enough coins'
      }
      else {
        return 'Buy'
      }
    }
  }
}
</script>

<style scoped>
  .clear-float {
    clear: both;
  }
  .user-info {
    border: 1px solid #000000;
    float: left;
    margin-left: 25px;
  }
  .user-info img {
    width: 50px;
  }
  .user-coin {
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
  .tab button:hover {
    background-color: #ddd;
    cursor: pointer;
  }
  .item-image {
    height: 200px;
  }
</style>