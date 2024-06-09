<template>
  <Parent>
    <HeroSection />
    <InformationCard />
    <RegistrationStep />
    <Alert />
    <SuperiorFeatures />
    <Testimonial />
    <Skripsi />
  </Parent>
</template>

<script setup lang="ts">
import Parent from './Parent.vue';
import Alert from '../components/Alert.vue';
import InformationCard from '../components/InformationCard.vue';
import HeroSection from '../components/HeroSection2.vue';
import RegistrationStep from '../components/RegistrationStep.vue';
import SuperiorFeatures from '../components/SuperiorFeatures.vue';
import Testimonial from '../components/Testimonial.vue';
import Skripsi from '../components/Skripsi.vue';

</script>