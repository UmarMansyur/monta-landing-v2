<template>
  <div class="relative">
    <button type="button" class="text-sm flex items-center space-x-3 p-1 px-3 rounded-xl" data-dropdown-toggle="profile-dropdown" @click="toggleDropdown('profile-dropdown')" @mouseenter="focusDropdown('profile-dropdown')" @mouseleave="blurDropdown('profile-dropdown')">
      <img src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg" alt="img-thumbnail" class="w-8 sm:w-8 h-8 sm:h-8 rounded-full object-cover">
      <span class="text-sm hidden lg:block">Muhammad Umar Mansyur</span>
    </button>
    <div id="profile-dropdown" @mouseenter="focusDropdown('profile-dropdown')" @mouseleave="blurDropdown('profile-dropdown')" class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <RouterLink to="/admin/dashboard" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</RouterLink>
        </li>
        
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log out</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blurDropdown, focusDropdown, toggleDropdown } from '../helpers/navbar';

</script>