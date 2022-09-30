<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <git-fork
      link="https://github.com/Simon-He95"
      type="trapeziumType"
      position="right"
      color="red"
    />
    <git-fork link="https://github.com/Simon-He95" position="right" />
    <git-fork
      link="https://github.com/Simon-He95"
      type="ribbons"
      position="left"
    />
    <Foo />
    <router-view />
    <Footer />
  </main>
</template>
