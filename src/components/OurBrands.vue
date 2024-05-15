<template>
  <div class="main-container py-14">
    <h2 class="title mb-10">Our Brands</h2>
    <div class="flex flex-wrap justify-center gap-y-7 -mx-4">
      <div v-for="index in 4" :key="index" class="flex-25 min-w-60 px-4">
        <img src="@/assets/img/our-brands/brands.svg" alt="Our Brands" class="max-w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
