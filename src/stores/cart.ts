import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type {Product} from "@/stores/product";

export const Store = defineStore("cart", () => {
 const cartProducts = ref<Product[]>([])
 function addProduct (productsArray:Product[], index:number) :void {
  let product=productsArray[index];
  cartProducts.value.push(product);
}
 function deleteProduct (productsArray:Product[], index:number) {
  cartProducts.value.splice(index,1);
 }
 return {cartProducts, addProduct, deleteProduct}
});



