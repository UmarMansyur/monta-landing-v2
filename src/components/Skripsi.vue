<template>
    <section id="skripsi" class="bg-[#181230]">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden sm:h-[30rem]">
            <div class="flex sm:flex-row flex-col sm:space-x-10 h-full justify-center items-center">
                <div class="sm:w-1/2 w-full py-10 sm:px-28 sm:py-10 text-white shrink-0">
                    <p class="text-green-500 text-xs font-bold">#20%Work 80%Gain</p>
                    <h1 class="text-white
            sm:text-xl font-bold">
                        Mulai Pengajuan Judul <br> Tugas Akhir & Kerja Praktek
                        <span>🚀</span>
                    </h1>
                    <p class="text-xs mt-5 text-[#a9a4bc]">
                        MONTAK memudahkan mahasiswa dalam melakukan pengajuan judul Tugas Akhir dan Kerja Praktek. Mulai
                        dari
                        pengajuan judul, bimbingan online, hingga evaluasi dan penilaian.
                    </p>
                    <div class="flex">
                        <a href="/login"
                            class="bg-blue-500 text-white px-10 py-2 text-sm rounded-full mt-5 font-bold">Masuk</a>
                        
                    </div>
                </div>
                <div class="py-5 sm:py-0">
                    <div class="relative overflow-hidden flex sm:gap-10 gap-3">
                        <div class="animate-marquee w-1/2">
                            <div v-for="i in 3" class="flex" :key="i">
                                <div class="bg-white gap-2 p-4 rounded-xl justify-between sm:mb-6 mb-3">
                                    <h1 class="text-sm font-bold uppercase text-blue-700">Tugas Akhir</h1>
                                    <p class="text-[8px]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, blanditiis!
                                        Odit deleniti ab
                                        itaque. Pariatur alias numquam dolorum sequi deleniti animi ullam praesentium
                                        veritatis. Illo
                                        magni maxime earum inventore saepe!
                                    </p>
                                    <div class="flex gap-1 sm:gap-4">
                                        <div class="sm:w-10 sm:h-10 w-8 h-8 bg-gray-300 rounded-full flex shrink-0">
                                            <img src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg"
                                                alt="" class="w-10 h-auto rounded-full object-cover">
                                        </div>
                                        <div class="my-auto">
                                            <h2 class="text-[10px] font-bold">Muhammad Umar Mansyur</h2>
                                            <p class="text-[8px]">Mahasiswa Fakultas Teknik Informatika</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="animate-marquee2 w-1/2">
                            <div v-for="i in 3" class="flex" :key="i">
                                <div class="bg-white gap-2 p-4 rounded-xl justify-between sm:mb-6 mb-3">
                                    <h1 class="text-sm font-bold uppercase text-blue-700">Tugas Akhir</h1>
                                    <p class="text-[8px]">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque saepe
                                        maxime, nulla nam
                                        temporibus aliquam vel voluptatem culpa atque cupiditate obcaecati fugiat eum
                                        architecto, est
                                        praesentium? Dolore soluta voluptatum vitae? lore
                                    </p>
                                    <div class="flex gap-1 sm:gap-4">
                                        <div class="w-10 h-10 bg-gray-300 rounded-full flex shrink-0">
                                            <img src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg"
                                                alt="" class="w-10 h-auto rounded-full object-cover">
                                        </div>
                                        <div class="my-auto">
                                            <h2 class="text-[10px] font-bold">Muhammad Umar Mansyur</h2>
                                            <p class="text-[8px]">Mahasiswa Fakultas Teknik Informatika</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>