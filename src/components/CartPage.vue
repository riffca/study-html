<template>
    <h1>Корзина</h1>
<div class="cart">

</div>
<ul id="cart-products">
  <!-- Здесь будут отображаться продукты в корзине -->
</ul>
<button>очистить корзину</button>
<button>купить</button>
 </template>



<script setup lang="ts">
import type { Product } from '@/stores/product';
import { useCart } from "@/stores/cart";
import { computed } from 'vue';



</script>

<style lang="scss" scoped>
button {
  padding: 6px 6px;
  border-radius:5px;
margin-top:50%;
}
.cart{

  padding:5px;
}
</style>