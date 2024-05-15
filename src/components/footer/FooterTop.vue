<template>
  <div class="relative pt-20 pb-24 overflow-hidden">
    <div class="main-container relative z-10">
      <div class="flex flex-wrap gap-y-8 -mx-4">
        <div class="flex-33 min-w-80 px-4">
          <h2 class="footer-title">About Shop</h2>
          <p class="text-sm">
            Step into our shop section and uncover a world of curated treasures. From unique gifts
            to essential home finds, each item is selected with care.
          </p>
        </div>
        <div class="flex-33 min-w-80 px-4">
          <h2 class="footer-title">Categories</h2>
          <ul class="flex flex-wrap items-center gap-5">
            <li v-for="(badge, index) in badges" :key="index">
              <BadgesComponent :title="badge" />
            </li>
          </ul>
        </div>
        <div class="flex-33 min-w-80 px-4">
          <h2 class="footer-title">Newsletter</h2>
          <p class="text-sm mb-5">Stay in the loop with our newsletter.</p>
          <div>
            <input
              type="email"
              placeholder="Your email"
              class="py-3 px-4 outline-none text-gray-cod bg-white bg-opacity-40 placeholder:text-gray-dusty"
            />
            <button
              class="bg-gray-cod text-gray-alto py-3 px-5 hover:bg-gray-alto hover:text-gray-cod transition duration-300"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
    <img
      src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      class="absolute left-0 top-0 w-full h-full object-cover object-center"
    />
  </div>
</template>

<script setup lang="ts">
import BadgesComponent from '@/components/BadgesComponent.vue'

const badges: string[] = ['clock', 'bracelets', 'belts', 'jewelry', 'cufflinks']
</script>

<style scoped></style>
