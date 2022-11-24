<template>
  <main>
    <MainHeading>Products</MainHeading>
    <p>これまでに作ったサービスの一覧です。</p>
    <label class="show-suspended-products-label">
      <input type="checkbox" v-model="showSuspendedProducts" />
      停止中のサービスを表示する
    </label>
    <div v-for="product in filteredProducts()" :key="product.name">
      <h3 class="product-name">
        <component
          :is="!product.suspended ? 'a' : 'span'"
          :href="!product.suspended ? product.productURL : null"
          :target="!product.suspended ? '_blank' : null"
          :rel="!product.suspended ? 'noopener noreferrer' : null"
        >
          {{ product.name }}
        </component>
        <span v-if="product.suspended" class="product-suspended-label"
          >停止中</span
        >
      </h3>
      <p>
        {{ product.description }} 👉
        <a
          :href="product.introductionURL"
          target="_blank"
          rel="noopener noreferrer"
        >
          詳細はこちら
        </a>
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { products } from '~/data/products'
import type { Product } from '~/data/products'

const showSuspendedProducts = ref(false)
const filteredProducts = (): Product[] => {
  if (showSuspendedProducts.value) {
    return products
  }
  return products.filter((p) => !p.suspended)
}

definePageMeta({
  meta: [{ hid: 'og:title', property: 'og:title', content: 'Products' }],
})
useHead({
  title: 'Products',
})
</script>

<style lang="postcss" scoped>
.show-suspended-products-label {
  @apply select-none cursor-pointer text-sm flex items-center gap-2 py-1;
}

.product-name {
  @apply text-xl text-left w-full font-bold mt-6 mb-1 flex items-center gap-2;
}

.product-suspended-label {
  @apply text-xs bg-yellow-5 p-1 rounded text-gray-9;
}
</style>
