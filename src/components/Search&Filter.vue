<template>
  <div class="flex justify-between space-x-8 my-4">
    <div class="shrink-0">
      <form class="max-w-sm mx-auto">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">prodi</label>
        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:outline-none focus:border-gray-300 block w-full p-2.5">
          <option selected>Pilih Prodi</option>
          <option value="52">Informatika</option>
          <option value="51">Sipil</option>
          <option value="53">Industri</option>
        </select>
      </form>
    </div>
    <div>
      <label  class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="text"
          class="p-2.5 ps-10 block w-40 sm:w-56 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-transparent focus:border-gray-300"
          placeholder="Cari ..." />
      </div>
    </div>
  </div>
</template>