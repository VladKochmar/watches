<template>
  <header ref="header" class="header" :class="{ '-translate-y-full': isHeaderHidden }">
    <TopHeader />
    <BottomHeader />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import BottomHeader from './BottomHeader.vue'
import TopHeader from './TopHeader.vue'

// Header Scroll
const header = ref<HTMLHeadElement | null>(null)

let lastScrollTop: number = 0
const isHeaderHidden = ref<boolean>(false)

document.addEventListener('scroll', (): void => {
  const scrollTop: number = document.documentElement.scrollTop

  if (header.value) {
    if (scrollTop > lastScrollTop) isHeaderHidden.value = true
    else isHeaderHidden.value = false
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})
</script>

<style scoped></style>
