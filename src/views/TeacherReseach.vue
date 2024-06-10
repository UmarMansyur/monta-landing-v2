<template>
  <Parent>
    <BreadCrumb />
    <section class="container mx-auto py-20 px-3">
      <div>
        <h1 class="text-2xl font-bold">Topik Penelitian Dosen</h1>
        <p class="text-gray-500">
          Mahasiswa dapat memilih topik penelitian dosen sebagai topik skripsi. Harap konsultasikan dengan dosen terkait untuk mendapatkan informasi lebih lanjut.
        </p>
      </div>
      <div class="mt-5">
        <div class="flex flex-wrap justify-between gap-2 sm:gap-0 sm:space-x-8 my-4">
          <div class="shrink-0 flex space-x-3">
            <form class="max-w-sm mx-auto">
              <label for="prodi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">prodi</label>
              <select id="prodi" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:outline-none focus:border-gray-300 block w-full p-2">
                <option selected>Pilih Prodi</option>
                <option value="52">Informatika</option>
                <option value="51">Sipil</option>
                <option value="53">Industri</option>
              </select>
            </form>
            <form class="max-w-sm mx-auto">
              <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">status</label>
              <select id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:outline-none focus:border-gray-300 block w-full p-2">
                <option selected>Pilih Status</option>
                <option value="52">Belum di ambil</option>
                <option value="52">Diambil</option>
              </select>
            </form>
          </div>
          <div class="">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search"
                class="p-2 ps-10 block w-80 sm:w-56 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-transparent focus:border-gray-300"
                placeholder="Cari ..." />
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <table class="min-w-full divide-y divide-gray-200">
                <tbody class="divide-y divide-gray-200">
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-800">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img src="https://api.unira.ac.id/img/profil/dkr/5116201014_thumb.jpg?1717987377375" alt="Dosen" class="w-10 h-10 rounded-full">
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">Moh. Nazir Arifin, M.Kom</div>
                          <div class="text-xs text-gray-500">Dosen Teknik Informatika</div>
                          </div>
                      </div>
                    </td>
                    <td>
                      <div class="px-6 py-4 text-sm text-gray-500">
                        <div class="text-sm font-medium text-gray-900">Sistem Informasi</div>
                        <div class="text-xs text-gray-500">
                          Pendekatan Critical Success Factor (CSF) dalam Pengembangan Website Fakultas Universitas Madura
                        </div>
                      </div>
                    </td>
                    <td>
                     <div class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <h1 class="text-xs font-bold my-1">29 Juli 2024 05:03 WIB</h1>
                      <span class="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                        Belum di ambil
                      </span>
                     </div>
                    </td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-6 py-4 text-sm font-medium text-gray-800">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img src="https://api.unira.ac.id/img/profil/dkr/5116201014_thumb.jpg?1717987377375" alt="Dosen" class="w-10 h-10 rounded-full">
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">Moh. Nazir Arifin, M.Kom</div>
                          <div class="text-xs text-gray-500">Dosen Teknik Informatika</div>
                          </div>
                      </div>
                    </td>
                    <td>
                      <div class="px-6 py-4 text-sm text-gray-500">
                        <div class="text-sm font-medium text-gray-900">Sistem Cerdas</div>
                        <div class="text-xs text-gray-500">
                          Penerapan Tesseract 4.0 sebagai Digitalisasi Dokumen Tertulis untuk Bahasa Madura
                        </div>
                      </div>
                    </td>
                    <td>
                     <div class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <h1 class="text-xs font-bold my-1">29 Juli 2024 05:03 WIB</h1>
                      <span class="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                        Diambil
                      </span>
                     </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </section>
    <section class="bg-[#181230] py-20 px-3">
      <div class="container mx-auto px-3">
        <div>
          <span class="text-green-600 text-lg font-bold animate-pulse">#MONTAK</span>
          <h1 class="text-xl text-white">
            5 Top Penelitian <span class="text-[#FFD700]">Dosen</span> <span class="animate-pulse">🌟</span>
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3 sm:animate-marquee3">
            <div v-for="i in 5" :key="i" class="col-span-4 sm:col-span-2 md:col-span-1 bg-white p-3 rounded-lg">
              <div class="flex">
                <div class="flex-shrink-0 h-10 w-10">
                  <img src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg" alt="Dosen" class="w-10 h-10 rounded-full">
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">Moh. Nazir Arifin</div>
                  <div class="text-xs text-gray-500">Dosen Teknik Informatika</div>
                </div>
              </div>
              <div class="mt-3">
                <h1 class="text-sm font-medium text-gray-900">Sistem Informasi</h1>
                <p class="text-xs text-gray-500">
                  Pendekatan Critical Success Factor (CSF) dalam Pengembangan Website Fakultas Universitas Madura
                </p>
                <div class="flex justify-between items-center mt-2">
                  <span class="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                    Belum di ambil
                  </span>
                  <span class="text-xs font-bold">29 Juli 2024 05:03 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Parent>
</template>
<script setup lang="ts">
import BreadCrumb from '../components/BreadCrumb.vue';
import Pagination from '../components/Pagination.vue';
import Parent from './Parent.vue';
</script>