<template>
  <div class="flex flex-col lg:flex-row max-w-screen-2xl mx-auto">
    <div class="flex-50 self-center flex flex-col items-center lg:py-0 py-8 px-5">
      <h2 class="title mb-10">{{ article.title }}</h2>
      <p v-if="article?.text" class="text-sm text-center max-w-470 mb-14">{{ article?.text }}</p>
      <button
        v-if="article?.button"
        class="border-2 border-white text-lg text-center uppercase py-3 px-7 transition duration-300 hover:bg-white hover:text-black"
      >
        {{ article?.button }}
      </button>
    </div>
    <div class="flex-50">
      <img :src="article.imgSrc" class="max-w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '@/types/Article'
defineProps<{ article: Article }>()
</script>

<style scoped></style>
