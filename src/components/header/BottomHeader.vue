<template>
  <div class="bg-gray-cod py-3 sm:py-0">
    <div class="main-container flex justify-between items-center">
      <a href="#" class="relative z-50"><img src="@/assets/img/logo.svg" class="w-32" /></a>
      <div class="inline-flex gap-x-7 before-item" :class="{ 'before:translate-y-0': isOpen }">
        <div
          class="fixed top-0 left-0 z-30 w-full h-full bg-gray-cod py-24 px-7 overflow-auto -translate-x-full transition-transform duration-300 sm:translate-x-0 sm:static sm:px-0 sm:py-0"
          :class="{ 'translate-x-0': isOpen }"
        >
          <ul
            class="border-b-2 border-gray-dusty pb-14 mb-14 sm:pb-0 sm:mb-0 sm:inline-flex sm:border-none"
          >
            <li v-for="(item, index) in nav" :key="index" class="mb-10 sm:mb-0">
              <a
                href="#"
                class="text-2xl uppercase sm:inline-block sm:py-7 sm:px-5 sm:text-sm sm:hover:bg-gray-alto sm:hover:bg-opacity-10 sm:transition sm:duration-300"
                >{{ item }}</a
              >
            </li>
          </ul>
          <ul class="sm:hidden text-xl pb-14 mb-14 border-b-2 border-gray-dusty">
            <li class="inline-flex items-center gap-x-4 mb-5">
              <IconPhone class="max-w-5" /><a href="tel:+3807312456"> +380 73 123-45-67 </a>
            </li>
            <li class="mb-5">We work 7 days a week</li>
            <li>9:00 — 18:00</li>
          </ul>
          <button class="sm:hidden text-xl inline-flex items-center gap-x-4">
            <IconExit class="max-w-5" /> Log in / Registration
          </button>
        </div>
        <div class="inline-flex">
          <button class="p-4 hover:bg-gray-alto hover:bg-opacity-10 transition duration-300">
            <IconCart class="max-w-5" />
          </button>
          <button
            @click="openSearchMenu"
            class="p-4 hover:bg-gray-alto hover:bg-opacity-10 transition duration-300"
          >
            <IconSearch class="max-w-5" />
          </button>
          <button @click="handleMenuBurger" class="relative self-center z-40 w-7 h-4 sm:hidden">
            <span
              class="absolute h-px w-full left-0 top-0 transition-all duration-300 bg-white"
              :class="{ 'top-1/2': isOpen, 'rotate-45': isOpen }"
            ></span>
            <span
              class="absolute h-px w-full left-0 top-1/2 -translate-y-1/2 transition-all duration-300 bg-white"
              :class="{ 'scale-0': isOpen }"
            ></span>
            <span
              class="absolute h-px w-full left-0 bottom-0 transition-all duration-300 bg-white"
              :class="{ 'bottom-1/2': isOpen, '-rotate-45': isOpen }"
            ></span>
          </button>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <SearchSection v-model="isShown" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import IconSearch from '@/components/icons/IconSearch.vue'
import IconCart from '@/components/icons/IconCart.vue'
import IconExit from '@/components/icons/IconExit.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import SearchSection from './SearchSection.vue'

const nav: string[] = ['favorite', 'private office', 'settings']

// Burger Menu
const isOpen = ref<boolean>(false)

function handleMenuBurger(): void {
  isOpen.value = !isOpen.value
  document.body.classList.toggle('lock')
}

// Search menu
const isShown = ref<boolean>(false)

function openSearchMenu() {
  isShown.value = true
}
</script>

<style scoped></style>
