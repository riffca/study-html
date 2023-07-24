<template>
  <slot name="cart-header">
    <div class="cart-header">
      <RouterLink class="image-link" to="/cart">
        <img
          src="https://cdn.icon-icons.com/icons2/1392/PNG/512/cart_96642.png"
          alt="Корзина"
          width="30"
          height="30"
        />
      </RouterLink>
      <span class="cart-badge">{{ cartCount }}</span>
    </div>
  </slot>
</template>

<script setup lang="ts">
import type { Product } from "@/stores/product";
import { useCart } from "@/stores/cart";
import { computed } from "vue";

const cartStore = useCart();
const cartCount = computed(() => {
  return cartStore.cartProducts.length;
});
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

.cart-header {
  display: flex;
  position: fixed;
  right: 15%;
  height: 20px;
  z-index: 999;
}
.image-link {
  display:flex;
  justify-content: center;
  align-items: center;
  width:50px;
  height:50px;
}
</style>
