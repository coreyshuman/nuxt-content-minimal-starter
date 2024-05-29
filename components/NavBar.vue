<template>
  <nav class="w-full">
    <div class="flex w-full">
      <div class="flex-grow">
        <ContentNavigation v-slot="{ navigation }">
          <ul class="w-auto mx-auto">
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path">
                {{ link.title }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/_tailwind" target="_blank">
                Tailwind Config Viewer
              </NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </div>
      <ColorModeButton class="flex-none" />
    </div>
  </nav>
</template>
