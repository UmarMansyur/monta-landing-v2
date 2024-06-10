<template>
  <Parent>
    <BreadCrumb />
    <section class="container mx-auto py-5">
      <div class="grid grid-cols-4">
        <div class="col-span-3">
          <h1 class="text-3xl font-bold text-blue-600">Penelitian Dosen</h1>
          <p class="text-black text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>

        </div>
        <div class="border text-start p-3 rounded-md">
          <div class="flex">
            <div class="flex-1">
              <input type="text" class="w-full border-2 border-blue-600 rounded-md p-2" placeholder="Cari penelitian dosen">
            </div>
            <div class="flex-1">
              <button class="bg-blue-600 text-white rounded-md p-2">Cari</button>
            </div>
          </div>
          <h3 class="text-blue-700 font-semibold">Kategori</h3>
          <hr>
        </div>
      </div>
    </section>
  </Parent>
</template>
<script setup lang="ts">
import BreadCrumb from '../components/BreadCrumb.vue';
import Parent from './Parent.vue';
</script>