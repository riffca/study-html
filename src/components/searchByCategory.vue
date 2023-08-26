<template>
  <div>
    <select
      @change="emit('update:modelValue', selectedCategory)"
      v-model="selectedCategory"
    >
      <option value="Category 1">Category 1</option>
      <option value="Category 2">Category 2</option>
      <!-- другие категории сюда -->
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedCategory = ref<string>("");
const emit = defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();
</script>

<style lang="scss" scoped></style>
