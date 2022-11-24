<template>
  <div class="default-container">
    <div class="wrapper container">
      <NuxtLink to="/">👈 トップに戻る</NuxtLink>
      <p>404 Not Found 😱</p>
    </div>
    <ToggleDarkModeButton />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})
useHead({
  title: '404',
})
</script>
