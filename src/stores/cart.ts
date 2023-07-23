import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Product } from "@/stores/product";

export const useCart = defineStore("cart", () => {
  const cartProducts = ref<CartProduct[]>([]);
cartProducts.value = localStorage.getItem("cartProducts") ? JSON.parse (localStorage.getItem("cartProducts") ) : []
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
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts.value));
    }
  }
  function deleteProduct(product: CartProduct | Product) {
      const index = cartProducts.value.findIndex((item) => {
        return product.id == item.id;
      });
      if (index != -1) {
        cartProducts.value[index].deleted = true;
        const cartProductsFromLocalStorage = localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : [];
        cartProductsFromLocalStorage.splice(index, 1);
        localStorage.setItem('cartProducts', JSON.stringify(cartProductsFromLocalStorage));
      }
    }
function removeProduct (product: Product) {
  const index = cartProducts.value.findIndex((item) => {
    return product.id == item.id;
  });
  if (index != -1) {
    cartProducts.value.splice(index, 1)
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts.value));
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
let totalSum = 0;
function updateSum(product:CartProduct) {
  if (product.selected) {
  totalSum += product.price;
  } else {
  totalSum -= product.price;
  }
  }

function returnBack(product:CartProduct) {
  const index = cartProducts.value.findIndex((item) => {
    return product.id == item.id;
  });
  if (index !==-1) {
    cartProducts.value[index].deleted = false;
    const cartProductsFromLocalStorage = localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : [];
    cartProductsFromLocalStorage.splice(index, 1);
    localStorage.setItem('cartProducts', JSON.stringify(cartProductsFromLocalStorage));
  } 
}


  return { cartProducts, addProduct, deleteProduct,updateProduct, removeProduct,returnBack,updateSum };
});

export type CartProduct = Product & {
  deleted: boolean;
  selected: boolean;
};
