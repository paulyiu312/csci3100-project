<template>
  <div id="shop">
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

  </div>
</template>

<script>
export default {
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
    
  }
}
</script>

<style scoped>

</style>