import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useMobileMenu() {
  const toggle = ref(false);
  const route = useRoute();

  function toggleMenu() {
    toggle.value = !toggle.value;
  }

  function closeMenuIfOpened() {
    if (toggle.value) {
      toggle.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', closeMenuIfOpened);
  });

  onUnmounted(() => {
    document.removeEventListener('click', closeMenuIfOpened);
  });

  watch(() => route.fullPath, () => {
    toggle.value = false;
  });

  return {
    toggle,
    toggleMenu,
  };
}
