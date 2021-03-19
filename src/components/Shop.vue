<template>
  <div id="shop">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <p>{{itemId}}</p>
        <p>{{itemName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      items: [
        {
          itemId: 1001,
          itemType: 'avatar',
          itemName: 'Cat',
          itemImage: '../src/assets/logo.png'
        },
        {
          itemId: 1002,
          itemType: 'avatar',
          itemName: 'Dog',
          itemImage: '../src/assets/logo.png'
        },
        {
          itemId: 1003,
          itemType: 'avatar',
          itemName: 'Mouse',
          itemImage: '../src/assets/logo.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>