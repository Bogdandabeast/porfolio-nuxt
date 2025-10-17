<script setup lang="ts"></script>

<template>
  <footer class="flex flex-col gap-6 px-5 py-10 text-center">
    <div class="flex justify-center gap-6">
      <Icon
        name="line-md:linkedin"
        size="35"
        style="color: white"
      />
      <Icon
        name="line-md:github"
        size="35"
        style="color: white"
      />
    </div>
    <p class="font-body text-sm leading-normal font-normal text-text-dark/60">
      Todos los derechos reservados {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>

<style scoped></style>
