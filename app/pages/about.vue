<script setup lang="ts">
import joblist from '~/assets/data/pages/about-joblist.json';
import skillsections from '~/assets/data/pages/about-skillsections.json';
import aboutData from '~/assets/data/pages/about.json';
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center text-center sm:text-left">
      <img
        class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 flex-shrink-0"
        data-alt="Una foto de perfil profesional de Juan Pérez"
        src="/img/bogdan.jpeg"
      >
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-tight font-heading">
          {{ aboutData.title }}
        </h1>
        <p class="text-text-muted-dark text-base font-normal leading-relaxed">
          {{ aboutData.description }}
        </p>
        <p class="text-text-muted-dark text-base font-normal leading-relaxed font-medium">
          {{ aboutData.author }}
        </p>
      </div>
    </div>
    <div class="border-t border-border-dark my-12" />
    <about-job-list :job-list="joblist" :title="aboutData.joblist_title" />
    <div class="border-t border-border-dark my-12" />
    <about-skill-list :skillsections="skillsections" :title="aboutData.skilllist_title" />
    <div class="border-t border-border-dark my-12" />
    <div class="text-center pt-8">
      <button class="flex mx-auto min-w-20 max-w-md cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-normal hover:bg-primary/90 transition-colors">
        <NuxtLink :to="aboutData.button.link">
          {{ aboutData.button.text }}
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
