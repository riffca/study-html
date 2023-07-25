<template>
 <div>
    <select v-model="selectedCategory">
      <option value="">All</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <!-- другие категории сюда -->
    </select>

    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {Category} from '@/stores/product';

function searchByCategory(category: Category) {
  const filteredProducts = Product.filter((product) => {
    return product.category === category;
  });
}


</script>

<style lang="scss" scoped>

</style>