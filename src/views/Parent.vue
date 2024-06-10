<template>
	<div class="flex flex-col h-screen">
		<TheHeader></TheHeader>
		<main id="content" class="sm:mt-0 flex flex-col flex-1">
			<slot></slot>
		</main>
		<TheFooter />
	</div>
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';

</script>