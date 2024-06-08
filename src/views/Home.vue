<template>
  <TheHeader></TheHeader>
  <main id="content" class="sm:mt-0">
    <HeroSection />
    <InformationCard />
    <RegistrationStep />
    <Alert/>
    <SuperiorFeatures />
    <Testimonial />
    <Skripsi/>
    <Faqs/>
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import Alert from '../components/Alert.vue';
import InformationCard from '../components/InformationCard.vue';
import Faqs from '../components/Faqs.vue';
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import HeroSection from '../components/HeroSection2.vue';
import RegistrationStep from '../components/RegistrationStep.vue';
import SuperiorFeatures from '../components/SuperiorFeatures.vue';
import Testimonial from '../components/Testimonial.vue';
import Skripsi from '../components/Skripsi.vue';

</script>