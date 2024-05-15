<template>
  <div class="hidden main-container sm:flex justify-between items-center gap-x-6 py-3">
    <ul class="inline-flex items-center gap-x-4 text-xs text-gray-dusty">
      <li class="inline-flex items-center gap-x-4">
        <IconPhone class="max-w-3" />
        <a href="tel:+3807312456"> +380 73 123-45-67 </a>
        <span class="pl-4">|</span>
      </li>
      <li>We work 7 days a week<span class="pl-4">|</span></li>
      <li>9:00 — 18:00</li>
    </ul>
    <button class="inline-flex items-center gap-x-4 text-xs text-gray-dusty">
      <IconExit class="max-w-3" /> Log in / Registration
    </button>
  </div>
</template>

<script setup lang="ts">
import IconExit from '@/components/icons/IconExit.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
</script>

<style scoped></style>
