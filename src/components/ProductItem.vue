<template>
  <div class="product-item">

    <img src="https://cdn.icon-icons.com/icons2/2785/PNG/512/shopping_cart_add_icon_177407.png" alt="Добавить в корзину"
      width="30" height="30" @click="addToCart(product)">
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/product';
import { useCart } from "@/stores/cart";

const cartStore = useCart();
function addToCart(product: Product) {
  cartStore.addProduct(product);
}
;
</script>
  
<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>