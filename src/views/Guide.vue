<template>
  <Parent>
    <BreadCrumb />
    <section class="my-auto">
      <div class="container mx-auto flex px-3">
        <div class="mx-auto">
          <div>
            <img src="/images/help.png" alt="book" class="w-full h-auto object-cover" />
          </div>
          <h1 class="text-lg font-medium text-center">
            Untuk melihat pedoman penggunaan aplikasi, unduh file berikut:
          </h1>
          <div class="flex justify-center mt-5">
            <a class="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg uppercase text-sm py-2 text-center flex w-36 justify-center" href="#">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              </div>
              <div class="ml-2 text-sm">
                Download
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Parent>
</template>

<script setup lang="ts">
  import BreadCrumb from '../components/BreadCrumb.vue';
import Parent from './Parent.vue';
</script>