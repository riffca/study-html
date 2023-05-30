
<template>
  <div :class="'product'" v-for="(product, index) in products">
    <img :src="product.img" imgfield="img" style="max-width: 150px; width: 150px" alt="" />
    <p>{{ product.name }}</p>
    <div class="product-item">
      <img v-if="!checkProduct(product)"
        src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_add_icon_177406.png" alt="Добавить в корзину"
        width="50" height="50" @click="addToCart(product)">

      <!-- <img src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_success_icon_177398.png" alt="Уже в корзине"
        width="50" height="50" @click="">  -->

      <img v-else src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_cancel_icon_177409.png"
        alt="Удалить из корзины" width="50" height="50" @click="deleteProduct(product)">

    </div>
  </div>
</template>

<script setup lang ="ts">
import type { Product } from '@/stores/product';
import { useCart } from "@/stores/cart";
import { computed } from 'vue';

function checkProduct(product: Product) {
  return Boolean(cartStore.cartProducts.find(item => item.id === product.id))
}

const isProductInCart = computed(() => {
  return Boolean(cartStore.cartProducts.find(item => item.id === props.product.id))
})

const props = defineProps<{
  products: Product[]
}>();

const cartStore = useCart();
function addToCart(product: Product) {
  cartStore.addProduct(product);

}

function deleteProduct(product: Product) {
  cartStore.deleteProduct(product);
}
</script>

<style lang="scss" scoped>
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
