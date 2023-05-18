<template>
  <div class="cart-icon">
    <img src="https://cdn.icon-icons.com/icons2/1392/PNG/512/cart_96642.png" alt="Корзина" width="30" height="30"/>
    <span class="cart-badge">{{ cartCount}}</span>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/product';
import {useCart} from "@/stores/cart";

const CartStore = useCart();
const cartCount = CartStore.cartProducts.length;
</script>

<style lang="scss" scoped>
.cart-icon {
  display: flex;
  align-items: center;
 margin-left: 30em;
  margin-bottom: 30px;
  margin-top: 50px;
}

.cart-badge {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
  margin-left: 0.5em;
  padding: 0.25em;
  font-size: 0.8em;
  border-radius: 50%;
  background-color: red;
  color: #fff;
}
</style>