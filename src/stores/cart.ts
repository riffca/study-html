import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Product } from "@/stores/product";

export const useCart = defineStore("cart", () => {
  const cartProducts = ref<CartProduct[]>([]);

  function addProduct(product:Product): void {
    const index = cartProducts.value.findIndex((item) => {
      return product.id == item.id;
    });

    if (index === -1) {
      const cartProduct: CartProduct = {
        ...product,
        deleted: false,
        selected: true,
        opacity:0,
      };
      cartProducts.value.push(cartProduct);
    
    }
  }

    function deleteProduct(product: CartProduct | Product) {
      product.opacity = 1;
      const index = cartProducts.value.findIndex((item) => {
        return product.id == item.id;
      });
      if (index != -1) {
        cartProducts.value[index].deleted = true;
         return true; 
      }
    }


function removeProduct (product: Product) {
  const index = cartProducts.value.findIndex((item) => {
    return product.id == item.id;
  });
  if (index != -1) {
    cartProducts.value.splice(index, 1)
  }
}

function updateProduct(product:CartProduct) {
const index = cartProducts.value.findIndex((item) => {
  return product.id == item.id;
});
if (index !==-1) {
  cartProducts.value[index].selected = true;
}
}
  return { cartProducts, addProduct, deleteProduct,updateProduct, removeProduct };
});

export type CartProduct = Product & {
  deleted: boolean;
  selected: boolean;
  opacity: number;
  
};
