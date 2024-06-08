<template>
  <div :id="'accordion-' + props.id" data-accordion="collapse" class="flex flex-col gap-y-5">
    <div v-for="faq in props.faqs" :key="faq.id" class="w-full">
      <h2 :id="'accordion-faq-' + faq.id" class="bg-[#f6f8fd] rounded-t-md text-gray-950">
        <button type="button"
          class="flex items-center justify-between bg-[#f6f8fd] p-5 rounded-t-md rounded-b-md w-full font-medium text-start gap-3 text-sm"
          :data-accordion-target="'#accordion-faq-body-' + faq.id" aria-expanded="true"
          :aria-controls="'accordion-faq-body-' + faq.id">
          <span>{{ faq.title }}</span>
          <svg data-accordion-icon class="w-3 h-3 shrink-0 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div :id="'accordion-faq-body-' + faq.id" class="text-xs bg-[#f6f8fd] px-5 pb-5 rounded-b-md hidden"
        aria-labelledby="accordion-faq-1">
        <div class=" dark:border-gray-400 pt-5">
          <p>{{ faq.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import { toggleAccordion } from '../helpers/accordion';

const props = defineProps<{
  id: string;
  faqs: {
    id: string;
    title: string;
    content: string;
  }[];
}>();

onMounted(() => {
  toggleAccordion(props.id, props.faqs.map((faq: any) => {
    return {
      id: `accordion-faq-${faq.id}`,
      triggerEl: document.querySelector(`#accordion-faq-${faq.id}`) as HTMLElement,
      targetEl: document.querySelector(`#accordion-faq-body-${faq.id}`) as HTMLElement,
      active: false
    };
  }));
});
</script>