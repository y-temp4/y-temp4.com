<template>
  <h2 class="main-heading"><slot /></h2>
</template>

<style lang="postcss" scoped>
.main-heading {
  @apply text-2xl text-left w-full font-bold my-3;
  border-bottom: solid 3px var(--color-title-border);
}
</style>
