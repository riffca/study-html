
<template>
  <div :class="'product' + (index + 1)" v-for="(product, index) in products">
    <img
      :src="product.img"
      imgfield="img"
      style="max-width: 150px; width: 150px"
      alt=""
    />
          <p>{{ product.name }}</p>
  </div>
</template>

<script setup lang ="ts">
import type { Product } from '@/stores/product';
const props = defineProps <{
  products:Product[]
  }>();

  
</script>

<style lnag="scss" scoped>
.product {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
  text-align: center;
  align-items: baseline;
  padding: 40px calc((100% - (350px * 2)) / 2);
}
</style>
