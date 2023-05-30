import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type {Product} from "@/stores/product";

export const useCart = defineStore("cart", () => {
  const cartProducts = ref<CartProduct[]>([]);

  function addProduct(product: CartProduct): void {
    const index = cartProducts.value.findIndex((item) => {
      return product.id == item.id;
    });

    if (index === -1) {
      const cartProduct: CartProduct = { ...product, deleted: false, selected: true };
      cartProducts.value.push(cartProduct);
      console.log(`Продукт ${product.name} добавлен в корзину.`);
    } else {
      console.log(`Продукт ${product.name} уже добавлен в корзину.`);
    }
  }

  function deleteProduct(product: CartProduct) {
    const index = cartProducts.value.findIndex((item) => {
      return product.id == item.id;
    });
    if (index === -1) {
      console.log(`Продукт не найден ${product.id}`);
      return false;
    } else {
      cartProducts.value[index].deleted = true;
      console.log(`Продукт удален ${product.id}`);
      return true;
    }
  }

  return { cartProducts, addProduct, deleteProduct };
});

export type CartProduct = Product & {

  deleted:boolean;
  selected:boolean;
};



