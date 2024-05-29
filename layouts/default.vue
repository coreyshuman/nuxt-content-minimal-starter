<template>
  <div class="container">
    <header>
      <NavBar />
    </header>
    <main>
      <slot />
    </main>
    <footer>Copyright &copy; 2024 Your Copyright Here</footer>
  </div>
</template>

<style scoped>
.container {
  @apply flex flex-col min-h-screen mx-auto;
}

header {
  @apply flex-initial h-auto w-full dark:bg-accent-dark bg-accent-light;
}

header nav {
  @apply mx-1;
}

header nav :deep(a) {
  @apply text-text-dark;
}

header nav :deep(ul) {
  @apply table mx-auto my-2;
}

header nav :deep(li) {
  @apply block md:inline-block px-4 mx-1 lg:mx-4 py-2 my-2 md:my-0 dark:bg-link-dark bg-link-light text-center drop-shadow-md rounded-md;
}

header nav :deep(button) {
  @apply mx-4 px-2 h-10 my-2 dark:bg-link-dark bg-link-light text-center text-text-dark drop-shadow-md rounded-md;
}

main {
  @apply flex-grow;
}

footer {
  @apply flex-initial min-h-12 text-center dark:bg-accent-dark bg-accent-light;
}
</style>
