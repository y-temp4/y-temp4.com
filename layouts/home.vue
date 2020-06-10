<template>
  <div class="default-container">
    <div class="wrapper container">
      <nuxt />
    </div>
    <ToggleDarkModeButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToggleDarkModeButton from '~/components/ToggleDarkModeButton.vue'

export default Vue.extend({
  components: { ToggleDarkModeButton }
})
</script>
