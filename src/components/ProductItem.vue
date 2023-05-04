<template>
<div class="product-item">
    
      <img src="https://cdn.icon-icons.com/icons2/2785/PNG/512/shopping_cart_add_icon_177407.png" alt="Добавить в корзину" width="30" height="30" @click="addToCart(product)">
    </div>
  
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";


export default defineComponent({
  name: "ProductItem",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  methods: {
    addToCart(product: Product) {
      // какую логику добавления продукта в корзину???
    }
  }
});
</script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
  }
  </style>