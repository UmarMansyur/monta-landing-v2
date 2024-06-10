<template>
  <Parent>
    <div class="flex flex-wrap justify-center pt-20">
      <img src="/images/404-computer.svg" alt="">
    </div>
    <div class="text-center">
      <h1 class="text-6xl font-bold text-blue-600">404</h1>
      <p class="text-black text-3xl">Halaman yang Anda cari tidak ditemukan.</p>
      <div class="mt-4">
        <RouterLink to="/" class="p-3 border rounded-full bg-blue-600 text-white font-semibold shadow-blue-500/50 dark:shadow-lg">Kembali ke Beranda</RouterLink>
      </div>
    </div>
  </Parent>
</template>

<script setup lang="ts">
import Parent from "./Parent.vue";
</script>
