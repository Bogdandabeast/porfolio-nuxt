<script setup lang="ts">
const mock = [
  { name: 'ALL' },
  { name: 'Vue' },
  { name: 'Nuxt' },
  { name: 'PHP' },
  { name: 'Java' },
]

</script>

<template>
  <div class="flex flex-col items-center text-center">
    <h2 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-text-primary">
      Mis Proyectos
    </h2>
    <p class="mt-4 max-w-2xl text-lg text-text-secondary">
      Una selección de mis trabajos más recientes y relevantes en el desarrollo front-end.
    </p>
  </div>
  <project-tabs :categories="mock" />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
      <div class="relative">
        <div
          class="w-full bg-center bg-no-repeat aspect-video bg-cover"
          data-alt="Screenshot of an e-commerce website for sports clothing"
          style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAQ80TBH7K4bbFfotbD-1a8pZYgIM057jdgqat-QFlC95NLnwTYtaeSOatTpk-ohstmgh5H4noUb9fpjNbnbr11M7s5YGAabcvbS9JXV30ZoDSqEQGOOXpGN2DHe9IxsgfV3qAO18ZIGLZysnbzoJEpBQHRvpno6s15eI8CsK8Ie1wqpcHqPBono_CwEhLfgvlSIL6Weu4hxHBZi_hLzROerKKmdGWEHBA5qFDIqQh0aGYBu_Ge7nC0m4qM-rHyLtl1XC7S2d7R80Y&quot;);"
        />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div class="flex gap-4">
            <a class="flex items-center gap-2 bg-white/90 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-white transition-all transform hover:scale-105" href="#">Ver Proyecto</a>
            <a class="flex items-center gap-2 bg-gray-800/90 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-900 transition-all transform hover:scale-105" href="#">Ver Código</a>
          </div>
        </div>
      </div>
      <div class="p-6 flex-grow flex flex-col">
        <h3 class="text-xl font-bold leading-normal text-text-primary">
          E-commerce de Ropa Deportiva
        </h3>
        <p class="text-text-secondary text-base font-normal leading-normal mt-2 flex-grow">
          Tienda online completa con carrito de compras y pasarela de pago.
        </p>
        <div class="flex flex-wrap gap-2 mt-4">
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">React</span>
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Redux</span>
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Stripe</span>
        </div>
      </div>
    </div>
    <div class="group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
      <div class="relative">
        <div
          class="w-full bg-center bg-no-repeat aspect-video bg-cover"
          data-alt="Screenshot of a to-do list application"
          style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCqnPwsu-qDj_rCryWaG2SDlQReuzBmxC2wUm8Ms8s15O32mHGPhLPYuOTfr3rMCznUxeFIUoyRTMSD3DgcQEmr1UqvT02I505D_BZtyXjpkKNqaZ_DN_T2lYcsviXrTPgQbP8-171PoC9iodQqcCoblSH4kc20PUWzgahL8ZAT4MvO9EFVF0rAcUUK8JYCdQQkH9bIKY-FXyfB5-j2fe8JDAZvM6QmpNYuvaehyhxQrXOohUucxmkKqwfUAhI664wdfmMQEvJVV9I&quot;);"
        />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div class="flex gap-4">
            <a class="flex items-center gap-2 bg-white/90 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-white transition-all transform hover:scale-105" href="#">Ver Proyecto</a>
            <a class="flex items-center gap-2 bg-gray-800/90 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-900 transition-all transform hover:scale-105" href="#">Ver Código</a>
          </div>
        </div>
      </div>
      <div class="p-6 flex-grow flex flex-col">
        <h3 class="text-xl font-bold leading-normal text-text-primary">
          Aplicación de Tareas Pendientes
        </h3>
        <p class="text-text-secondary text-base font-normal leading-normal mt-2 flex-grow">
          Gestor de tareas simple y efectivo con almacenamiento local.
        </p>
        <div class="flex flex-wrap gap-2 mt-4">
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Vue</span>
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">Vuex</span>
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">LocalStorage</span>
        </div>
      </div>
    </div>
    <div class="group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
      <div class="relative">
        <div
          class="w-full bg-center bg-no-repeat aspect-video bg-cover"
          data-alt="Screenshot of a photographer's portfolio website"
          style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCy3lhQ6q3LvE6Hb14qSe2lROMeiZAkA9zkbr0tOUNn0bffEKYSh6qo6AATctLhthwkXt4zSRuvns0l1bJOpcHsUdn8UxNfNl5QMB0odswJUVV5ojGBquUDLjHpMUZl8Z1A42ls59QC4EOEWgVXcesF9j1csxY-gNYlarP0ESPNCG6at_OmZhpuIWV1JJOu46bnotJAu4-U5o-um8k8nPr9ibQTEDveimPO7Y9p-8sznzppMq8jzviM7liQfYC8cStC_jczD5chB14&quot;);"
        />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div class="flex gap-4">
            <a class="flex items-center gap-2 bg-white/90 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-white transition-all transform hover:scale-105" href="#">Ver Proyecto</a>
            <a class="flex items-center gap-2 bg-gray-800/90 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-900 transition-all transform hover:scale-105" href="#">Ver Código</a>
          </div>
        </div>
      </div>
      <div class="p-6 flex-grow flex flex-col">
        <h3 class="text-xl font-bold leading-normal text-text-primary">
          Sitio Web para Fotógrafo
        </h3>
        <p class="text-text-secondary text-base font-normal leading-normal mt-2 flex-grow">
          Portafolio visual minimalista para un fotógrafo profesional.
        </p>
        <div class="flex flex-wrap gap-2 mt-4">
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">HTML</span>
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">CSS Grid</span>
          <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">JavaScript</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
