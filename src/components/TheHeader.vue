<template>
  <header>
    <nav class="fixed inset-x-0 top-0 z-50 bg-white/60 sm:bg-transparent sm:backdrop-blur-3xl" aria-label="Main navigation">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 sm:p-3">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo-unira.png" class="h-8" alt="Flowbite Logo"/>
          <span class="self-center text-2xl font-semibold whitespace-nowrap">MONTAK</span>
        </a>
        <div class="flex sm:hidden md:block md:order-2 md:space-x-0 rtl:space-x-reverse gap-2">
          <button type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" @click="modalClick('authentication-modal')" class="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-lg shadow-gray-500/50 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex gap-2 items-center">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Log In
          </button>
          <button data-collapse-toggle="navbar-default" type="button" @click="toggleMenu" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-tranparent focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="true">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto bg-white md:order-1 sm:bg-transparent" id="navbar-cta">
          <ul class="flex flex-col font-medium p-4 md:p-0  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
            <li>
              <a href="#" class="block font-bold py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"aria-current="page">
                Beranda
              </a>
            </li>
            <li class="relative">
              <button type="button" @mouseenter="mouseHover" @mouseleave="hiddenCollapse" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:text-blue md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                <span>Periode Pengajuan</span>
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdownNavbar" @mouseenter="mouseHover" @mouseleave="hiddenCollapse" class="z-10 hidden bg-white sm:bg-white/90 font-normal absolute divide-y divide-gray-100 rounded-lg shadow w-44 sm:backdrop-blur-2xl">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 mx-2 rounded-lg text-sm">
                      Kerja Praktek
                    </a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 mx-2 rounded-lg text-sm">
                      Tugas Akhir
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700">
                Biaya
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700">
                Penelitian Dosen
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700">
                Panduan</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <AuthModal />
</template>

<script setup lang="ts">
import { modalClick } from '../helpers/modal';
import AuthModal from './AuthModal.vue';
import { toggleMenu, mouseHover, hiddenCollapse } from '../helpers/navbar';
</script>