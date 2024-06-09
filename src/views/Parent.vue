<template>
	<TheHeader></TheHeader>
	<main id="content" class="sm:mt-0">
		<slot></slot>
	</main>
	<TheFooter />
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';

</script>