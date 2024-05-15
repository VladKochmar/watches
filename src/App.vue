<script setup lang="ts">
import ArticleOneSection from './components/ArticleOneSection.vue'
import ArticleTwoSection from './components/ArticleTwoSection.vue'
import FullscreenSection from './components/FullscreenSection.vue'
import NewArrivals from './components/NewArrivals.vue'
import OurBrands from './components/OurBrands.vue'
import FooterComponent from './components/footer/FooterComponent.vue'
import HeaderComponent from './components/header/HeaderComponent.vue'

import type { Article } from './types/Article'

import { useProductsStore } from './stores/products'
const { products } = useProductsStore()

const articleOne: Article = {
  title: 'collection 2005',
  text: 'Step into timeless elegance with our exquisite collection of watches. From classic designs to contemporary styles, we offer timepieces that suit every taste and occasion. Elevate your wrist game with precision craftsmanship and unparalleled sophistication. Discover the perfect accessory to complement your style and make a statement wherever you go. Experience luxury at its finest with our curated selection of watches.',
  button: 'see collection',
  imgSrc:
    'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}

const articleTwo: Article = {
  title: 'SEASON 2000/01',
  titleTwo: 'NEW COLLECTION',
  button: 'catalog',
  imgSrc:
    'https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  products: products.slice(0, 3)
}
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-clip text-white bg-black font-basic">
    <HeaderComponent />
    <main class="flex-auto">
      <FullscreenSection />
      <ArticleTwoSection :article="articleTwo" />
      <ArticleOneSection :article="articleOne" />
      <NewArrivals />
      <OurBrands />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
