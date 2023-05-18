import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type {Product} from "@/stores/product";

export const useCart = defineStore("cart", () => {
 const cartProducts = ref<Product[]>([])
 
 function addProduct(product: Product): void {
  const index = cartProducts.value.findIndex((item) => {
    return product.id == item.id;
  });

  if (index === -1) {
    cartProducts.value.push(product);
    console.log(`Продукт ${product.name} добавлен в корзину.`);
  } else {
    console.log(`Продукт ${product.name} уже добавлен в корзину.`);
  }
}
function deleteProduct(product: Product) {
  const index = cartProducts.value.findIndex((item) => {
    return product.id == item.id;
  });
  if (index === -1) {
    console.log(`Продукт не найден ${product.id}`);
    return false;
  } else {
    cartProducts.value.splice(index, 1);
    console.log(`Продукт удален ${product.id}`);
    return true;
  }
}

 return {cartProducts, addProduct, deleteProduct}
});



