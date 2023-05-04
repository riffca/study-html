<template>
  <div class="cart-icon">
    <img src="https://cdn.icon-icons.com/icons2/1392/PNG/512/cart_96642.png" alt="Корзина" width="30" height="30"/>
    <span class="cart-badge">{{ itemQty }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CartIcon",
  props: {
    itemQty: {
      type: Number as PropType<number>,
      default: 0
    }
  }
});
</script>

<style scoped>
.cart-icon {
  display: flex;
  align-items: center;
 
  margin-bottom: 30px;
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