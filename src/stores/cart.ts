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
      };
      cartProducts.value.push(cartProduct);
    
    }
  }

    function deleteProduct(product: CartProduct | Product) {
      const index = cartProducts.value.findIndex((item) => {
        return product.id == item.id;
      });
      if (index != -1) {
        cartProducts.value[index].deleted = true;
         return true; 
      }
    } 

 /*    function deleteProduct(product: CartProduct | Product) 
{
  if (product.deleted) {
    product.opacity = 0.5;
  } else {
    product.opacity = 1;
  }
} */


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

  
};
