<template>
  <div class="main-container pt-28 pb-16">
    <h2 class="title mb-16">New Arrivals</h2>
    <div class="flex flex-wrap -mx-2 gap-y-10">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="lg:flex-25 md:flex-33 sm:flex-50 flex-100 px-2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'

import { useProductsStore } from '@/stores/products'
const { products } = useProductsStore()
</script>

<style scoped></style>
