<script setup lang="ts"></script>

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
    <h2 class="text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5 font-heading">
      Experiencia
    </h2>
    <div class="grid grid-cols-[auto_1fr] gap-x-4 px-4">
      <div class="flex flex-col items-center gap-1 pt-3">
        <Icon
          name="mdi:briefcase"
          size="50"
          style="color: blue"
        />
        <div class="w-[1.5px] bg-border-dark h-full" />
      </div>
      <div class="flex flex-1 flex-col pb-10">
        <p class="text-text-dark text-lg font-medium leading-normal">
          Desarrollador Front-End Senior
        </p>
        <p class="text-text-muted-dark text-base font-normal leading-normal">
          Tech Solutions Inc. - 2020 a la fecha
        </p>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="w-[1.5px] bg-border-dark h-2" />
        <div class="text-primary">
          <span class="material-symbols-outlined">work</span>
        </div>
        <div class="w-[1.5px] bg-border-dark h-full" />
      </div>
      <div class="flex flex-1 flex-col pb-10">
        <p class="text-text-dark text-lg font-medium leading-normal">
          Desarrollador Front-End
        </p>
        <p class="text-text-muted-dark text-base font-normal leading-normal">
          Web Wizards LLC - 2018 a 2020
        </p>
      </div>
      <div class="flex flex-col items-center gap-1 pb-3">
        <div class="w-[1.5px] bg-border-dark h-2" />
        <div class="text-primary">
          <span class="material-symbols-outlined">work</span>
        </div>
      </div>
      <div class="flex flex-1 flex-col">
        <p class="text-text-dark text-lg font-medium leading-normal">
          Desarrollador Front-End Junior
        </p>
        <p class="text-text-muted-dark text-base font-normal leading-normal">
          Creative Coders Co. - 2016 a 2018
        </p>
      </div>
    </div>
    <div class="border-t border-border-dark my-12" />
    <h2 class="text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5 font-heading">
      Habilidades
    </h2>
    <div class="px-4">
      <div class="mb-6">
        <h3 class="text-text-dark text-xl font-semibold mb-4 font-heading">
          Lenguajes
        </h3>
        <div class="flex flex-wrap gap-3">
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">HTML</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">CSS</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">JavaScript</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">TypeScript</span>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-text-dark text-xl font-semibold mb-4 font-heading">
          Frameworks
        </h3>
        <div class="flex flex-wrap gap-3">
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">React</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">Vue.js</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">Angular</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">Next.js</span>
        </div>
      </div>
      <div>
        <h3 class="text-text-dark text-xl font-semibold mb-4 font-heading">
          Herramientas
        </h3>
        <div class="flex flex-wrap gap-3">
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">Git</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">Webpack</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">Figma</span>
          <span class="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">Jira</span>
        </div>
      </div>
    </div>
    <div class="border-t border-border-dark my-12" />
    <div class="text-center pt-8">
      <button class="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
        <span class="truncate">Ponerse en Contacto</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
