<template>
  <div>
    <div
      class="fixed top-0 left-0 z-30 w-full sm:h-32 bg-gray-shaft -translate-y-full transition-transform duration-300"
      :class="{ 'translate-y-0': model }"
    >
      <div class="main-container py-5 flex items-center h-full">
        <input
          v-model="searchedValue"
          type="text"
          placeholder="Search..."
          class="text-lg py-2 px-3 w-full outline-none"
        />
        <button
          @click="closeMenu"
          class="p-3 hover:bg-gray-cod bg-opacity-5 transition duration-300"
        >
          <IconXmark class="text-gray-alto" />
        </button>
      </div>
    </div>
    <div class="fixed top-24 z-30 w-full">
      <div class="main-container">
        <div v-if="isTyped" class="pt-3 bg-gray-alto">
          <strong class="inline-block pb-3 px-3 text-lg">Result:</strong>
          <ul>
            <li
              v-for="product in productsList"
              :key="product.id"
              class="py-2 px-3 cursor-pointer hover:bg-gray-dusty transition duration-300"
            >
              {{ product.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { useProductsStore } from '@/stores/products'
import IconXmark from '../icons/IconXmark.vue'
const { filteredProducts } = useProductsStore()

const searchedValue = ref<string | null>(null)
const productsList = computed(() => filteredProducts(searchedValue.value))

const isTyped = computed(() => searchedValue.value && searchedValue.value?.length > 0)
const model = defineModel()

function closeMenu() {
  searchedValue.value = null
  model.value = false
}
</script>

<style scoped></style>
