<template>
  <div :class="'product'" v-for="(product, index) in products">
    <img
      :src="product.img"
      imgfield="img"
      style="max-width: 150px; width: 150px"
      alt=""
    />

    <p>{{ product.name }} - {{ product.price }}</p>
    <div class="product-item">
      <img
        v-if="!checkProduct(product)"
        src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_add_icon_177406.png"
        alt="Добавить в корзину"
        width="50"
        height="50"
        @click="addToCart(product)"
      />

      <!-- <img src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_success_icon_177398.png" alt="Уже в корзине"
        width="50" height="50" @click="">  --> 

      <img
        v-else
        src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_cancel_icon_177409.png"
        alt="Удалить из корзины"
        width="50"
        height="50"
        @click="deleteProduct(product)"
      />
    </div>
          
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/stores/product";
import { useCart } from "@/stores/cart";
import { computed } from "vue";
import type { CartProduct } from "@/stores/cart";

function checkProduct(product: Product) {
  return Boolean(cartStore.cartProducts.find((item) => item.id === product.id));
}

const isProductInCart = computed(() => {
  return Boolean(
    cartStore.cartProducts.find((item) => item.id === props.product.id)
  );
});

const props = defineProps<{
  products: Product[];
}>();

const cartStore = useCart();
function addToCart(product: Product) {
  cartStore.addProduct(product);
  
}

function deleteProduct(product: Product) {
  cartStore.removeProduct(product);
  localStorage.setItem('cartStore', JSON.stringify(cartStore.removeProduct(product)));
}

</script>

<style lang="scss" scoped>
.product {
  display: flex;
flex-wrap: wrap;
height: 100%;
gap: 50px;
text-align: center;
align-items:center;
justify-content: center;
padding: 10px;
margin: 10px 5px 10px 5px;
}

</style>
