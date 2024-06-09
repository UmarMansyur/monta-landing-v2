<template>
  <Parent>
    <BreadCrumb/>
    <section class="container mx-auto px-3">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="flex justify-center items-start">
          <img src="/images/kp.png" alt="Practical Work" class="w-auto h-auto object-cover" />
        </div>
        <div class="my-auto">
          <h2 class="font-bold text-2xl">Apa itu Kerja Praktek?</h2>
          <p class="mt-4 text-gray-500 text-justify">
            Kerja Praktek adalah salah satu mata kuliah yang wajib diikuti oleh
            mahasiswa Program Studi Teknik Informatika, Sipil dan Industri. Mata
            kuliah ini bertujuan untuk memberikan pengalaman kerja di dunia
            industri kepada mahasiswa.
          </p>
          <p class="mt-4 text-gray-500 text-justify">
            Pilih tempat kerja praktek yang sesuai dengan minat dan bakat Anda. Jangan hanya meminjam nama perusahaan, tetapi manfaatkan kesempatan ini untuk belajar dan menambah pengalaman kerja. Jangan lupa untuk meminta surat keterangan kerja praktek dari perusahaan tempat Anda bekerja. Surat ini akan menjadi salah satu syarat kelulusan Anda.
          </p>
          <p class="mt-4 text-gray-500 text-justify">
            Kerja Praktek dilaksanakan pada semester 6 dan 7. Belajarlah dengan giat dan serius, karena kerja praktek ini akan menjadi bekal bagi Anda ketika memasuki dunia kerja. Selamat belajar dan semoga sukses!
          </p>
        </div>
      </div>
    </section>
    <section class="sm:my-4">
      <div class="container mx-auto px-3">
        <h2 class="font-bold text-2xl">Periode Pengajuan Kerja Praktek</h2>
        <p class="text-sm text-gray-400">
          Gunakan filter prodi untuk menampilkan periode pengajuan kerja praktek atau gunakan kolom pencarian untuk mencari periode pengajuan kerja praktek.
        </p>
        <div class="flex justify-between space-x-8 my-4">
          <div class="shrink-0">
            <form class="max-w-sm mx-auto">
              <label for="prodi-pengajuan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">prodi</label>
              <select id="prodi-pengajuan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:outline-none focus:border-gray-300 block w-full p-2.5">
                <option selected>Pilih Prodi</option>
                <option value="52">Informatika</option>
                <option value="51">Sipil</option>
                <option value="53">Industri</option>
              </select>
            </form>
          </div>
          <div>
            <label for="search-periode" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-periode"
                class="pt-2.5 ps-10 block w-40 sm:w-56 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-transparent focus:border-gray-300"
                placeholder="Cari ..." />
            </div>
          </div>
        </div>
        <div class="overflow-x-auto sm:rounded-lg py-1">
          <table class="w-full text-sm text-left rtl:text-right rounded-xl border">
            <thead class="text-xs uppercase bg-gray-100 dark:bg-gray-700 rounded-xl rounded-t">
              <tr>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b">Tahun Akademik</th>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b">Prodi</th>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b w-96">Keterangan</th>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b">Tanggal Pendaftaran</th>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b">Batas Pendaftaran</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" class="px-6 py-4 border-r">
                  2324 - Genap
                </td>
                <td class="px-6 py-4 border-r">
                  Informatika
                </td>
                <td class="px-6 py-4 border-r">
                  Periode 1
                </td>
                <td class="px-6 py-4 border-r">
                  12 Januari 2023
                </td>
                <td class="px-6 py-4 border-r">
                  20 Januari 2023
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination/>
        <div class="alert">
          <div class="bg-yellow-400 p-3 my-4 rounded-xl flex space-x-2 text-white items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
            </svg>
            <p class="text-white text-sm">
              Segera lakukan pendaftaran ulang kerja praktek sebelum batas pendaftaran berakhir. #<i class="font-bold">No Pain No Gain</i>
            </p>
          </div>
        </div>
        <h2 class="font-bold text-2xl">Biaya Kerja Praktek</h2>
        <p class="text-sm text-gray-400">
          Gunakan filter prodi untuk menampilkan periode pengajuan kerja praktek atau gunakan kolom pencarian untuk mencari periode pengajuan kerja praktek.
        </p>
        <div class="flex justify-between space-x-8 my-4">
          <div class="shrink-0">
            <form class="max-w-sm mx-auto">
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">prodi</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:outline-none focus:border-gray-300 block w-full p-2.5">
                <option selected>Pilih Prodi</option>
                <option value="52">Informatika</option>
                <option value="51">Sipil</option>
                <option value="53">Industri</option>
              </select>
            </form>
          </div>
          <div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search"
                class="pt-2.5 ps-10 block w-40 sm:w-56 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-transparent focus:border-gray-300"
                placeholder="Cari ..." />
            </div>
          </div>
        </div>
        <div class="overflow-x-auto sm:rounded-lg py-1">
          <table class="w-full text-sm text-left rtl:text-right rounded-xl border">
            <thead class="text-xs uppercase bg-gray-100 dark:bg-gray-700 rounded-xl rounded-t">
              <tr>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b">Tahun Akademik</th>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b">Prodi</th>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b w-96">Komponen Pembayaran</th>
                <th scope="col" class="px-6 py-4 text-sm border-r border-b text-end">Nominal</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" class="px-6 py-4 border-r">
                  2324 - Genap
                </td>
                <td class="px-6 py-4 border-r">
                  Informatika
                </td>
                <td class="px-6 py-4 border-r">
                  Registrasi Kerja Praktek
                </td>
                <td class="px-6 py-4 border-r text-end">
                  Rp. 50.000
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" class="px-6 py-4 border-r">
                  2324 - Genap
                </td>
                <td class="px-6 py-4 border-r">
                  Informatika
                </td>
                <td class="px-6 py-4 border-r">
                  Pendaftaran Ujian Kerja Praktek
                </td>
                <td class="px-6 py-4 border-r text-end">
                  Rp. 350.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination/>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-4 mb-10">
        <h2 class="font-bold text-2xl mb-10">Tahapan Pengajuan Kerja Praktek</h2>
        <ol class="items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-800">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                      </svg>

                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Memprogram Kerja Praktek
                    </h3>
                    <p class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Telah memenuhi syarat SKS
                    </p>
                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Langkah pertama adalah memprogram kerja praktek yang akan dilakukan melalui SIMAT.
                    </p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-800">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Heregistrasi Kerja Praktek
                    </h3>
                    <p class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Tempat memprogram kerja praktek
                    </p>
                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Lunasi biaya kerja praktek yang telah ditentukan. Biaya kerja praktek dapat dilihat pada tabel biaya kerja praktek.
                    </p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-800">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Melengkapi Persyaratan
                    </h3>
                    <p class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Melunasi semua pembiayaan kerja praktek
                    </p>
                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Upload persyaratan kerja praktek melalui MONTAK. Persyaratan kerja praktek dapat dilihat pada akun MONTAK masing-masing.
                    </p>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-blue-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Pengajuan Judul dan Tempat KP
                    </h3>
                    <p class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Syarat kerja praktek sudah dipenuhi
                    </p>
                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Pengajuan judul dan tempat kerja praktek dapat dilakukan melalui MONTAK. Cek secara berkala status pengajuan judul dan tempat kerja praktek.
                    </p>
                </div>
            </li>
        </ol>
      </div>
    </section>
    <section class="bg-[#181230] py-10">
      <div class="container mx-auto px-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 class="font-bold text-2xl text-white">Persyaratan Kerja Praktek</h2>
            <p class="mt-4 text-gray-500">
              Persyaratan Kerja Praktek adalah sebagai berikut:
            </p>
            <ul class="mt-4 text-gray-500 list-disc pl-5">
              <li>Surat Permohonan Kerja Praktek</li>
              <li>Surat Keterangan Kerja Praktek dari Perusahaan</li>
              <li>Surat Keterangan Selesai Kerja Praktek</li>
              <li>Surat Penilaian Kerja Praktek</li>
            </ul>
          </div>
          <div>
            <h2 class="font-bold text-2xl text-white">Pengajuan Kerja Praktek</h2>
            <p class="mt-4 text-gray-500">
              Pengajuan Kerja Praktek dilakukan secara online melalui website
              MONTAK. Mahasiswa diwajibkan untuk mengisi formulir pengajuan
              kerja praktek dan mengunggah persyaratan kerja praktek. Mahasiswa dapat mengajukan kerja praktek apabila sudah memenuhi jumlah SKS yang ditentukan serta telah <b class="text-red-600">membayar</b> biaya kerja praktek.
            </p>
            <p class="mt-4 text-gray-500">
              Setelah pengajuan kerja praktek diterima, mahasiswa akan mendapatkan
              surat tugas kerja praktek yang harus ditandatangani oleh pembimbing
              kerja praktek.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Parent>
</template>

<script setup lang="ts">
import Parent from "./Parent.vue";
import Pagination from "../components/Pagination.vue";
import BreadCrumb from "../components/BreadCrumb.vue";
</script>
