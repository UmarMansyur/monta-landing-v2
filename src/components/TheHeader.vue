<template>
  <header>
    <nav class="dark:bg-gray-900 py-1 fixed inset-x-0 top-0 z-50 backdrop-blur-sm
    " aria-label="Main navigation">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo-unira.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MONTAK</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
         <button type="button" class="border bg-gray-200 text-[#34364a] rounded-full py-1 px-4 text-[16px] font-[600]">Log In</button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#"
                class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page">Beranda</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Periode
                Pengajuan</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Biaya</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Penelitian
                Dosen</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Panduan</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>