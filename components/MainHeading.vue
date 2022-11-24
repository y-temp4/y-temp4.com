<template>
  <h2 class="main-heading"><slot /></h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" scoped>
.main-heading {
  @apply text-2xl text-left w-full font-bold my-3;
  border-bottom: solid 3px var(--color-title-border);
}
</style>
