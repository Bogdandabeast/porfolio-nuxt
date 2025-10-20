<script setup lang="ts">
type Job = {
  title: string;
  company_name: string;
  start_date: number;
  end_date: number | string;
};

defineProps<{ jobList: Job[]; title: string }>();
</script>

<template>
  <div>
    <h2 class="text-text-dark text-2xl sm:text-3xl font-bold leading-tight tracking-tight px-4 pb-6 pt-5 font-heading">
      {{ title }}
    </h2>
    <div
      v-for="(job, index) in jobList"
      :key="job.company_name + index"
      class="grid grid-cols-[auto_1fr] gap-x-4 px-4"
    >
      <div class="flex flex-col items-center gap-1 pt-3">
        <Icon
          name="mdi:briefcase"
          size="50"
          class="text-blue-500"
        />
        <div class="w-px bg-border-dark h-full" />
      </div>
      <div class="flex flex-1 flex-col pb-10">
        <p class="text-text-dark text-lg font-medium leading-normal">
          {{ job.title }}
        </p>
        <p class="text-text-muted-dark text-base font-normal leading-normal">
          {{ job.company_name }} - {{ job.start_date }} a {{ job.end_date }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
