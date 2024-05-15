<template>
  <div class="flex flex-col min-h-full font-title">
    <div class="bg-gray-shark relative pt-card mb-6">
      <img
        :src="product.imgSrc"
        :alt="product.title"
        class="absolute top-0 left-0 w-full h-full object-contain object-center"
      />
    </div>
    <a href="#" class="text-lg flex-auto mb-2">{{ product.title }}</a>
    <p class="text-gray-alto font-bold">{{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Product'

defineProps<{ product: Product }>()
</script>

<style scoped></style>
