<template>
    <h2>Корзина</h2>
    <div class="cart">
        <ul>
            <li class="cart_product" v-for="product in cartProducts" :key="product.id" :style="{ opacity: product.opacity }">
                <input type="checkbox" v-model="cartProduct.selected" @change="cartStore.updateProduct(cartProduct)">
                {{ product.img }}  {{ product.name }} - {{ product.price }}
                <button @click="cartStore.deleteProduct(cartProduct)">Удалить товар</button>
            </li>
        </ul>
    </div>
    <button @click="cartStore.updateProduct(cartProduct)">купить</button>
 
</template>
  
<script setup lang="ts">
import type { Product } from "@/stores/product";
import { useCart} from "@/stores/cart";
import { computed } from "vue";
import type { CartProduct } from "@/stores/cart";

const product: Product = {
    img: "img",
    name: "Product Name",
    id: 1,
    price: 10,
    opacity:1,
};

function updateCart(product: CartProduct) {
  cartStore.cartProducts = cartStore.cartProducts.filter(product => product.selected);
  const totalPrice = cartStore.cartProducts.reduce((total, product) => total + product.price, 0);
  return totalPrice;
}

const cartStore = useCart();
const cartProducts = computed(() => cartStore.cartProducts);

const cartProduct: CartProduct = {
    img: product.img,
    name: product.name,
    id: product.id,
    price: product.price,
    deleted: false,
    selected: false,
    opacity:1,
};

cartProducts.value.push(cartProduct);

function deleteProduct(product: CartProduct) {
    product.opacity = 1;}

</script>
  
<style lang="scss" scoped>
button {
    padding: 6px 6px;
    border-radius: 5px;
    margin-top: 50%;
}

li {
    list-style: none;
    margin: 0;
    padding:0;

}
.cart_product{
    display:inline-block;

}
</style>
