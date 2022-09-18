<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <git-fork
      link="https://github.com/Simon-He95"
      type="ribbons"
      position="left"
    />
    <git-fork link="https://github.com/Simon-He95" position="right" />
    <router-view />
    <Footer />
  </main>
</template>
