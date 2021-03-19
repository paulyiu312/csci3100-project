<template>
  <div v-if="visible" id="shop">
    <h1>Shop</h1>
    <div>
      <p>Coin: {{ coin }}</p>
    </div>

    <div>
      <ul>
        <li v-for="(avatar, index) in avatars" :key="index">
          <p>ID: {{itemId}} | Type: {{itemType}}</p>
          <p>{{itemName}}</p>
          <p>Cost: {{cost}}</p>
          <button @click="this.disabled = true">Buy</button>
        </li>
      </ul>
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
          itemImage: '../src/assets/logo.png',
          cost: 150
        },
        {
          itemId: 1002,
          itemType: 'avatar',
          itemName: 'Dog',
          itemImage: '../src/assets/logo.png',
          cost: 100
        },
        {
          itemId: 1003,
          itemType: 'avatar',
          itemName: 'Mouse',
          itemImage: '../src/assets/logo.png',
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
    }
  }
}
</script>

<style scoped>

</style>