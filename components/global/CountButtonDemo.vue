<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';

const props = withDefaults(
  defineProps<{
    initialCount: number;
  }>(),
  {
    initialCount: 1
  }
);

// reactive state
const count = ref(props.initialCount);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  @apply m-4 p-2 rounded-md bg-link-light text-text-dark;
}
</style>
