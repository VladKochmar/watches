<template>
  <div class="flex flex-col lg:flex-row max-w-screen-2xl mx-auto">
    <div class="relative order-2 lg:order-1 flex-50">
      <img :src="article.imgSrc" class="max-w-full" />
      <div
        class="flex flex-col items-center w-full h-full justify-center lg:justify-normal lg:h-auto absolute bottom-0 lg:bottom-24 left-0"
      >
        <h2 v-if="article.titleTwo" class="title mb-10">{{ article.titleTwo }}</h2>
        <button
          v-if="article?.button"
          class="border-2 border-white text-lg text-center uppercase py-3 px-7 transition duration-300 hover:bg-white hover:text-black"
        >
          {{ article?.button }}
        </button>
      </div>
    </div>
    <div class="flex-50 order-1 lg:self-center lg:py-0 py-8 px-4 sm:px-8">
      <h2 class="title mb-10">{{ article.title }}</h2>
      <div v-if="article.products" class="flex gap-y-7 sm:flex-row flex-col sm:-m-3">
        <ProductCard
          v-for="product in article.products"
          :key="product.id"
          :product="product"
          class="sm:flex-33 sm:p-3"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '@/types/Article'
import ProductCard from './ProductCard.vue'
defineProps<{ article: Article }>()
</script>

<style scoped></style>
