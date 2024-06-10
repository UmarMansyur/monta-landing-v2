<template>
  <Parent>
    <div class="mx-auto my-auto px-3">
      <img src="/images/404-computer.svg" alt="img-not-found" class="mx-auto pt-20">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-blue-600">404</h1>
        <p class="text-black text-3xl">Halaman yang Anda cari tidak ditemukan.</p>
        <div class="mt-4">
          <RouterLink to="/" class="p-3 rounded-full bg-blue-600 text-white font-semibold shadow-blue-500/50 shadow-lg">
            Kembali ke Beranda
          </RouterLink>
        </div>
      </div>
    </div>
  </Parent>
</template>

<script setup lang="ts">
import Parent from "./Parent.vue";
</script>
