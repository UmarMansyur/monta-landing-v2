<script setup lang="ts">
import { closeModal } from '../helpers/modal';
</script>

<template>

  <div id="authentication-modal" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[60] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex flex-col justify-center items-center">
          <div class=" bg-blue-50 w-16 h-16 rounded-full p-2 flex justify-center my-auto absolute top-7 shadow-blue-50 shadow-lg">
            <div class="flex w-16 p-1 bg-blue-500 shadow-sm shadow-blue-300/50  justify-center items-center rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>

            </div>
          </div>
        </div>
        <div class="flex items-center justify-between p-4 md:px-7 rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Masuk
          </h3>
          <button type="button"
            class="end-2.5 hover:bg-gray-300 hover:text-white rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center bg-gray-300 text-white"
            @click="closeModal" data-modal-hide="authentication-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-7">
          <div class="flex flex-col justify-center items-center space-y-3">
            <h1 class="text-xl font-bold mt-2">WELCOME BACK</h1>
            <p class="text-xs text-black-100">
              Silahkan login dengan akun yang sudah terdaftar di SIMAT
            </p>
          </div>
          <form class="space-y-4 mt-5" action="#">
            <div>
              <label for="nim" class="text-sm font-medium">NPM atau NIS</label>
              <input type="text" name="nim" id="nim"
                class="block w-full p-[8px] text-gray-900 border border-gray-300 rounded-md  text-sm focus:ring-transparent focus:border-gray-300">
            </div>
            <div>
              <label for="nim" class="text-sm font-medium">Password</label>
              <input type="password" name="nim" id="nim"
                class="block w-full p-[8px] text-gray-900 border border-gray-300 rounded-md  text-sm focus:ring-transparent focus:border-gray-300">
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                  class="w-3 h-3 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  required />
                <div class="ms-3 text-sm">
                  <label for="remember" class="font-medium text-gray-500 dark:text-gray-400 text-xs">Ingat Saya</label>
                </div>
              </div>
              <a href="" class="text-xs font-semibold text-blue-800">Lupa Password?</a>
            </div>
            <div class="flex justify-between">
              <button class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 block w-full">Batal</button>
              <button class="text-white bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 block w-full">Masuk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>
