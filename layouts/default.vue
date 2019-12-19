<template>
  <div class="default-container">
    <div class="wrapper container">
      <n-link to="/">👈トップに戻る</n-link>
      <nuxt />
    </div>
    <ToggleDarkModeButton />
  </div>
</template>

<script>
import ToggleDarkModeButton from '~/components/ToggleDarkModeButton'

export default { components: { ToggleDarkModeButton } }
</script>
