<template>
  <div class="container">
    <main>
      <p>Example Custom Layout</p>
      <slot />
      Hello
      <NuxtLink to="/">Return Home</NuxtLink>
    </main>
  </div>
</template>

<style scoped>
.container {
  @apply flex flex-col min-h-screen m-2 bg-accent-dark dark:bg-accent-light;
}
</style>
