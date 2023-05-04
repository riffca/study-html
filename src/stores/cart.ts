import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const Store = defineStore("cart", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  computed: {
    totalItems() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
  }
  return { count, doubleCount, increment };
});



