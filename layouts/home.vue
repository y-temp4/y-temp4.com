<template>
  <div class="default-container">
    <div class="wrapper container">
      <nuxt />
    </div>
    <ToggleDarkModeButton />
  </div>
</template>

<script>
import ToggleDarkModeButton from '~/components/ToggleDarkModeButton'

export default { components: { ToggleDarkModeButton } }
</script>
