<template>
  <div
    class="inline-block bg-gray-cod text-gray-alto py-2 px-5 hover:bg-gray-alto hover:text-gray-cod transition duration-300 cursor-pointer"
  >
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped></style>
