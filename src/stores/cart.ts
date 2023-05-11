import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type {Product} from "@/stores/product";

export const useCart = defineStore("cart", () => {
 const cartProducts = ref<Product[]>([])
 
 function addProduct (product:Product) :void {
  
  cartProducts.value.push(product);
}
 function deleteProduct (product:Product) {
  const index = cartProducts.value.findIndex( (item) =>{
    return product.id==item.id
  }) 
  cartProducts.value.splice(index,1);
 }

 return {cartProducts, addProduct, deleteProduct}
});



