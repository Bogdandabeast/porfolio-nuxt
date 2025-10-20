<script setup lang="ts">
const joblist = [
  {
    title: 'zepe dev',
    company_name: 'Zepitek inc',
    start_date: 2024,
    end_date: 2025,
  },
  {
    title: 'Frontend developer',
    company_name: 'Alebat',
    start_date: 2025,
    end_date: 'la fecha',
  },
];

const skillsections = [
  {

    field: 'Lenguajes',
    skills: [
      'HTML',
      'CSS',
      'JAVASCRIPT',
      'TYPESCRIPT',
    ],
  },
  {

    field: 'Pajas',
    skills: [
      'HTML',
      'CSS',
      'JAVASCRIPT',
      'TYPESCRIPT',
    ],
  },
];
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
        <h1 class="text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] font-heading">
          Sobre Mí
        </h1>
        <p class="text-text-muted-dark text-base font-normal leading-relaxed">
          Soy un desarrollador front-end apasionado con un amor por la creación de experiencias de usuario hermosas e intuitivas. Me encanta convertir problemas complejos en soluciones simples y elegantes. Cuando no estoy programando, me puedes encontrar explorando nuevas tecnologías o disfrutando de una buena taza de café.
        </p>
        <p class="text-text-muted-dark text-base font-normal leading-relaxed font-medium">
          Juan Pérez - Desarrollador Front-End
        </p>
      </div>
    </div>
    <div class="border-t border-border-dark my-12" />
    <about-job-list :job-list="joblist" />
    <div class="border-t border-border-dark my-12" />
    <about-skill-list :skillsections="skillsections" />
    <div class="border-t border-border-dark my-12" />
    <div class="text-center pt-8">
      <button class="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
        <NuxtLink to="/contact">
          Ponerse en Contacto
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
