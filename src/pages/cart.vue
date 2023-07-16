<template>
  <h2>Корзина</h2>
  <div class="cart">
    <ul>
      <li class="cart_product" v-for="product in cartProducts" :key="product.id"
      :style="{ opacity: product.deleted ? 0.5 : (product.returned ? 1 : 1) }"  >
        <input type="checkbox" v-model="cartProduct.selected" @change="cartStore.updateProduct(cartProduct)">
        {{ product.img }} {{ product.name }} - {{ product.price }}
        <button id="deleteButton" @click="deleteProduct(product)">Удалить товар</button>
        <button v-if="product.deleted" @click="returnBack(product)">Вернуть назад</button>
      </li>
    </ul>
  </div>
  <button id="totalPrice">купить</button>
</template>
  
<script setup lang="ts">
import type { Product } from "@/stores/product";
import { useCart } from "@/stores/cart";
import { computed } from "vue";
import type { CartProduct } from "@/stores/cart";

const product: Product = {
  img: "img",
  name: "Product Name",
  id: 1,
  price: 10,
  deleted: true,
};
const cartStore = useCart();
const cartProducts = computed(() => cartStore.cartProducts);

const cartProduct: CartProduct = {
  img: product.img,
  name: product.name,
  id: product.id,
  price: product.price,
  deleted: false,
  selected: false,
  returned:false,
};

cartProducts.value.push(cartProduct);
function deleteProduct(product: CartProduct | Product) { cartStore.deleteProduct(product); }

function returnBack(product: CartProduct) { cartStore.returnBack(product); }

const totalPrice: number = cartStore.cartProducts.filter(product => product.selected).reduce((total, product) => total + product.price, 0);
</script>
  
<style lang="scss" scoped>
button {
  padding: 6px 6px;
  border-radius: 5px;

}

li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart_product {
  display: inline-block;
}
</style>
