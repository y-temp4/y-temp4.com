<template>
  <main>
    <MainHeading>Products</MainHeading>
    <p>これまでに作ったサービスの一覧です。</p>
    <div v-for="product in products" :key="product.name">
      <h3 class="product-name">
        <a
          :href="product.product_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ product.name }}
        </a>
      </h3>
      <p>
        {{ product.description }} 👉
        <a
          :href="product.introduction_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          詳細はこちら
        </a>
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import MainHeading from '~/components/MainHeading.vue'
import products from '~/data/products.json'

export default Vue.extend({
  components: { MainHeading },
  data() {
    return {
      products
    }
  },
  head(): MetaInfo {
    const title = 'Products'
    return {
      title,
      meta: [{ hid: 'og:title', property: 'og:title', content: title }]
    }
  }
})
</script>

<style lang="postcss" scoped>
.product-name {
  @apply text-xl text-left w-full font-bold mt-5 mb-1;
}
</style>
