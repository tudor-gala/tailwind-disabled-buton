<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: String,
  disabled: { type: Boolean, default: false },
  href: { type: String, default: '#' },
});

const bgClass = computed(() => {
  switch (props.color) {
    case 'indigo': return 'bg-indigo-600 hover:bg-indigo-700';
    case 'gray': return 'bg-gray-800 hover:bg-gray-900';
    case 'red': return 'bg-red-600 hover:bg-red-700';
    case 'yellow': return 'bg-yellow-500 hover:bg-yellow-600';
    case 'green': return 'bg-green-500 hover:bg-green-600';
    case 'blue': return 'bg-blue-500 hover:bg-blue-600';
  }
});

</script>

<template>
  <a
    :href="href"
    :class="`${bgClass} btn`"
    :disabled="disabled || null"
  >
    <slot />
  </a>
</template>
