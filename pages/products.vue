<template>
  <main>
    <h2 class="title">Products</h2>
    <p>これまでに作ったサービスの一覧です。</p>
    <template v-for="product in products">
      <h3 class="product-name">
        <a :href="product.product_url" target="_blank" rel="noopener noreferrer">{{ product.name }}</a>
      </h3>
      <p>
        {{ product.description }} 👉詳しくは
        <a
          :href="product.introduction_url"
          target="_blank"
          rel="noopener noreferrer"
        >こちら</a>
      </p>
    </template>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import products from '~/data/products.json'

export default Vue.extend({
  data() {
    return {
      products
    }
  },
  head: {
    title: 'Products'
  }
})
</script>

<style lang="postcss" scoped>
@import '~/assets/css/title.pcss';

.product-name {
  @apply text-xl text-left w-full font-bold mt-5 mb-1;
}
</style>
