<script setup lang="ts">
import { ref, onMounted } from 'vue';

const modes = ['system', 'light', 'dark', 'sepia'];
const mode = ref('dark');
const colorMode = useColorMode();

function toggle() {
  mode.value = modes[(modes.indexOf(mode.value) + 1) % modes.length];
  colorMode.preference = mode.value;
}

function modeName() {
  return mode.value.substring(0, 1).toUpperCase() + mode.value.substring(1);
}

// lifecycle hooks
onMounted(() => {
  if (colorMode.unknown) {
    colorMode.preference = mode.value;
  } else {
    mode.value = colorMode.value;
  }

  console.log(`The initial color mode is ${modeName()}.`);
});
</script>

<template>
  <button @click="toggle">Color Mode: {{ modeName() }}</button>
</template>
