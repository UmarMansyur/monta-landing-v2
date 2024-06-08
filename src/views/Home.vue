<template>
  <TheHeader></TheHeader>
  <main id="content" class="mt-20 sm:mt-0">
    <HeroSection />
    <InformationCard />
    <section>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <p class="text-center text-green-500 font-medium">#Alur Pengajuan</p>
        <h1 class="text-center sm:text-3xl uppercase font-bold">
          Tahapan Pengajuan Judul Tugas Akhir & Kerja Praktek <br>🎖️
        </h1>
        <div class="grid sm:grid-cols-4 gap-10 py-10">
          <div class="flex flex-col gap-8 items-center justify-center">
            <div class="bg-blue-600 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-11 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>

            </div>
            <h2 class="text-xl font-bold text-black-100">Memprogram KRS KP/TA</h2>
          </div>
          <div class="flex flex-col gap-8 items-center justify-center">
            <div class="bg-yellow-300 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-11 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-black-100">
              Membayar Biaya KP/TA
            </h2>
          </div>
          <div class="flex flex-col gap-8 items-center justify-center">
            <div class="bg-green-400 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-11 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>

            </div>
            <h2 class="text-xl font-bold text-black-100">
              Heregistrasi KP/TA
            </h2>
          </div>
          <div class="flex flex-col gap-8 items-center justify-center">
            <div class="bg-red-500 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-11 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>

            </div>
            <h2 class="text-xl font-bold text-black-100">
              Verifikasi Berkas
            </h2>
          </div>
        </div>
      </div>
    </section>
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-blue-500 rounded-md p-3 text-white">
        <div class="flex space-x-3 items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-sm">
            <span class="font-bold">Info:</span> Pengajuan judul dapat dilakukan di Fakultas masing-masing.
          </p>
        </div>
      </div>
    </div>
    <section>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <p class=" text-green-500 font-medium">#Fitur</p>
        <h1 class="sm:text-3xl uppercase font-bold">
          Fitur Unggulan MONTAK
          <br>
        </h1>
        <div class="grid sm:grid-cols-2">
          <div>
            <p class="text-gray-500 mt-5">
              Selain paperless, MONTAK juga memiliki fitur-fitur unggulan yang memudahkan mahasiswa dalam melakukan
              pengajuan judul Tugas Akhir dan Kerja Praktek.
            </p>
            <div class="flex flex-col gap-10 pt-8">
              <ul>
                <li class="flex space-x-5">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="size-8 text-green-500">
                      <path fill-rule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd" />
                    </svg>

                  </div>
                  <div>
                    <h2 class="text-xl font-bold text-black-100">Pengajuan Judul TA/KP</h2>
                    <p class="text-gray-500">Pengajuan judul Tugas Akhir dan Kerja Praktek dapat dilakukan secara online
                      melalui MONTAK.</p>
                  </div>
                </li>
                <li class="flex space-x-5">
                  <div class="flex gap-2 pt-8">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-8 text-green-500">
                        <path fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-xl font-bold text-black-100">
                        Bimbingan Online TA/KP
                      </h2>
                      <p class="text-gray-500">
                        MONTAK menyediakan fitur bimbingan online untuk memudahkan mahasiswa dalam melakukan konsultasi
                        dengan
                        dosen pembimbing. Selain itu, mahasiswa juga dapat menghemat waktu dan biaya transportasi.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="flex space-x-5">
                  <div class="flex gap-2 pt-8">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-8 text-green-500">
                        <path fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-xl font-bold text-black-100">
                        Revisi Proposal TA/KP
                      </h2>
                      <p class="text-gray-500">
                        Hasil pengerjaan perbaikan yang diberikan oleh dosen penguji dan pembimbing dapat diunggah
                        kembali oleh mahasiswa melalui MONTAK.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="flex space-x-5">
                  <div class="flex gap-2 pt-8">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-8 text-green-500">
                        <path fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clip-rule="evenodd" />
                      </svg>

                    </div>
                    <div>
                      <h2 class="text-xl font-bold text-black-100">
                        Evaluasi dan Penilaian TA/KP
                      </h2>
                      <p class="text-gray-500">
                        Setiap fakultas memiliki sistem evaluasi dan penilaian yang berbeda-beda. MONTAK memudahkan
                        dalam proses evaluasi dan penilaian Tugas Akhir dan Kerja Praktek. Dosen penguji dan pembimbing
                        dapat memberikan penilaian tanpa perlu menghitung secara manual.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="shrink-0 ms-auto flex w-full justify-center py-10">
            <img src="/images/device-frame.png" alt="image" class="w-72 h-auto object-cover">
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 py-10">
      <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <p class="text-center text-green-500 font-medium">#Testimoni</p>
        <h1 class="text-center sm:text-3xl uppercase font-bold">
          Apa Kata Mereka?
          <br>
        </h1>
        <div class="grid sm:grid-cols-2 gap-10 pt-10">
          <div class="flex flex-col gap-5">
            <div class="flex gap-5 items-center">
              <div class="w-16 h-16 bg-gray-300 rounded-full p-1 flex overflow-hidden">
                <img src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg" alt="image" class="w-full h-auto rounded-full object-cover">
              </div>
              <div>
                <h2 class="text-lg font-bold">Muhammad Umar Mansyur</h2>
                <p class="text-gray-500">Mahasiswa Fakultas Teknik Informatika</p>
              </div>
            </div>
            <p class="text-gray-500">
              "MONTAK sangat membantu saya dalam melakukan pengajuan judul Tugas Akhir. Saya tidak perlu lagi datang ke kampus hanya untuk mengajukan judul. Terima kasih MONTAK!"
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex gap-5 items-center">
              <div class="w-16 h-16 bg-gray-300 rounded-full p-1">
                <img src="https://api.unira.ac.id/img/profil/dkr/7104313573_thumb.jpg?1717816213474" alt="image" class="w-full h-auto rounded-full object-cover">
              </div>
              <div>
                <h2 class="text-lg font-bold">MATSAINI, ST, MT</h2>
                <p class="text-gray-500">Dosen Fakultas Teknik Industri</p>
              </div>
            </div>
            <p class="text-gray-500">
              "Terima kasih MONTAK, ide saya untuk penelitian Tugas Akhir dapat terwujud dengan adanya platform ini. Saya juga dapat memberikan bimbingan secara online kepada mahasiswa."
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="skripsi" class="bg-[#181230]">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div class="flex">
          <div class="w-1/2">
            <!-- <img src="/images/hero-image.png" alt="image" class="w-full h-auto object-cover"> -->
          </div>
          <div class="w-1/2 flex flex-col justify-center">
            <h1 class="text-white
            sm:text-3xl uppercase font-bold">
              Butuh Bantuan dalam Penulisan Skripsi?
            </h1>
            </div>
        </div>
      </div>

    </section>
    <section class="pb-16 pt-10">
      <div class="container mx-auto my-5 px-5 pt-5">
        <p class="text-center text-ld font-semibold text-green-500">#Tanya MONTAK</p>
        <h1 class="text-center text-4xl uppercase font-bold">Frequently Asked Questions
          <br>
          <span>😊</span>
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 pt-5">
          <div class="">
            <Faq id="1" :faqs="faqs.slice(0, 3)" />
          </div>
          <div class="">
            <Faq id="2" :faqs="faqs.slice(3, 6)" />
          </div>
        </div>
      </div>
    </section>
  </main>

  <TheFooter />
</template>

<script setup lang="ts">
import InformationCard from '../components/InformationCard.vue';
import TheHeader from '../components/TheHeader.vue';
import Faq from '../components/Faq.vue';
import TheFooter from '../components/TheFooter.vue';
import HeroSection from '../components/HeroSection2.vue';



const faqs = [
  {
    id: '1',
    title: 'Apakah MONTAK dapat diakses oleh semua fakultas di Universitas Madura?',
    content: 'Ya, MONTAK dapat diakses oleh semua fakultas di Universitas Madura. Gunakan akun yang telah terdaftar di SIMAT Universitas Madura untuk masuk ke MONTAK.'
  },
  {
    id: '2',
    title: 'Apakah pembayaran MONTAK dapat dilakukan secara elektronik?',
    content: 'Tidak, pembayaran MONTAK hanya dapat dilakukan secara manual. Tidak menutup kemungkinan akan ada fitur tersebut di update selanjutnya.'
  },
  {
    id: '3',
    title: 'Apa yang harus saya lakukan jika saya tidak dapat masuk ke akun MONTAK?',
    content: 'Jika anda tidak dapat masuk ke MONTAK, silahkan hubungi tim biro akademik Universitas Madura.'
  },
  {
    id: '4',
    title: 'Bagaimana jika saya belum melunasi tagihan keuangan yang ada di SIMAT?',
    content: 'Jika anda belum melunasi tagihan keuangan yang ada di SIMAT Universitas Madura, maka anda tidak dapat masuk ke MONTAK.'
  },
  {
    id: '5',
    title: 'Saya mahasiswa lama belum lulus, apakah saya dapat menggunakan MONTAK?',
    content: 'Ya, mahasiswa lama yang tidak lulus dapat menggunakan MONTAK. Namun, pastikan anda telah melunasi tagihan keuangan yang ada di SIMAT Universitas Madura.'
  },
  {
    id: '6',
    title: 'Apakah MONTAK memiliki panduan pengguna?',
    content: 'Ya, MONTAK menyediakan panduan pengguna yang bisa diakses melalui halaman bantuan di dalam platform atau diunduh dari situs resmi Universitas Madura.'
  },
];

</script>