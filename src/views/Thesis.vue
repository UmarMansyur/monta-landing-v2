<template>
  <Parent>
    <BreadCrumb/>
    <div class="container mx-auto px-4">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <p class="text-center">
          <span class="text-sm font-semibold text-green-500">#Tugas Akhir/Skripsi</span>
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 text-center pb-20">
          Syarat Pengajuan Tugas Akhir/Skripsi
        </h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <img src="/images/thesis.jpg" alt="thesis" class="w-full h-full object-cover rounded-xl shadow-xl animate-wiggle"/>
          </div>
          <div class="space-y-6 lg:space-y-3"> 
            <div class="flex">
              <span class="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                  Memprogram Tugas Akhir/Skripsi
                </h3>
                <p class="mt-1 text-gray-600 text-sm text-justify">
                  Agar mahasiswa dapat mengajukan tugas akhir/skripsi, mahasiswa harus memprogram tugas akhir/skripsi terlebih dahulu melalui SIMAT. Ketentuan minimal SKS yang harus ditempuh dapat dilihat pada akun SIMAT masing-masing mahasiswa.
                </p>
              </div>
            </div>
            <div class="flex">
              <span class="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                  Melunasi Semua Tagihan Keuangan yang ada di SIMAT
                </h3>
                <p class="mt-1 text-gray-600 text-justify text-sm">
                  Meskipun mahasiswa telah memprogram tugas akhir/skripsi, namun mahasiswa belum dapat mengajukan tugas akhir/skripsi jika masih memiliki tunggakan keuangan di SIMAT. Mahasiswa yang bersangkutan harus melunasi semua tagihan keuangan yang ada di SIMAT.
                </p>
              </div>
            </div>
            <div class="flex">
              <span class="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                  Membayar Biaya Pengajuan Tugas Akhir/Skripsi
                </h3>
                <p class="mt-1 text-gray-600 text-justify text-sm">
                  Cek periode pengajuan sesuai dengan jadwal yang telah ditentukan oleh masing-masing prodi. Lakukan pembayaran biaya pengajuan tugas akhir/skripsi dengan mengunjungi bagian administrasi keuangan pada masing-masing prodi. Besaran pembiayaan pengajuan tugas akhir/skripsi dapat dilihat pada tabel biaya pengajuan tugas akhir/skripsi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>

<script setup lang="ts">
import BreadCrumb from "../components/BreadCrumb.vue";
import Parent from "./Parent.vue";
</script>