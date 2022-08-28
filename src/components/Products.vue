<template>
  <div>
    Список продуктов:
    <div v-for="product in products" :key="product.id">
      {{ product.id }}
    </div>
  </div>
</template>

<script>
import productsApi from "../api/products.js";

export default {
  name: "Products",
  data() {
    return {
      products: []
    }
  },
  mounted() {
    productsApi.get().then(response => {
      this.products = response.data;
    })
  }
}
</script>

<style scoped>

</style>