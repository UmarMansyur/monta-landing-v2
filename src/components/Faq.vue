<template>
  <div id="accordion-flush" data-accordion="collapse">
    <h2 id="accordion-faq-1" class="mb-5">
      <button type="button"
        class="flex items-center justify-between bg-white p-3 rounded-t-md rounded-b-md w-full font-medium text-start dark:border-gray-700 dark:text-gray-400 gap-3 text-sm"
        data-accordion-target="#accordion-faq-body-1" aria-expanded="true" aria-controls="accordion-faq-body-1">
        <span> Apakah MONTAK dapat diakses oleh semua fakultas di Universitas Madura?</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 5 5 1 1 5" />
        </svg>
      </button>
    </h2>
    <div id="accordion-faq-body-1" class="text-xs bg-white px-3 pb-3 rounded-b-md hidden"
      aria-labelledby="accordion-faq-1">
      <div class=" dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive
          components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
            href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get
            started</a> and start developing
          websites even faster with components on top of Tailwind CSS.</p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import {toggleAccordion} from '../helpers/accordion';

onMounted(() => {
  toggleAccordion('accordion-flush', [
    {
      id: 'accordion-faq-1',
      triggerEl: document.querySelector('#accordion-faq-1') as HTMLElement,
      targetEl: document.querySelector('#accordion-faq-body-1') as HTMLElement,
      active: true
      

    }
  ])
})
</script>