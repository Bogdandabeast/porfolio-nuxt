<script setup lang="ts">
type Job = {
  title: string;
  company_name: string;
  start_date: number;
  end_date: number | null;
};

defineProps<{ jobList: Job[] }>();
</script>

<template>
  <div>
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
  </div>
</template>

<style scoped>

</style>
