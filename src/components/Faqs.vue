<template>
    <section class="pb-16 pt-10">
        <div class="container mx-auto my-5 px-5">
            <p class="text-center text-lg font-semibold text-green-500">#Tanya MONTAK</p>
            <h1 class="text-center text-3xl uppercase font-bold">Frequently Asked Questions
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
</template>

<script setup lang="ts">
import Faq from './Faq.vue';


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