<template>
  <main>
    <MainHeading>Contact</MainHeading>
    <form name="contact" method="POST" netlify netlify-honeypot="text">
      <input type="hidden" name="form-name" value="contact" />
      <p class="warn-text">※入力項目はすべて必須です。</p>
      <label class="label">
        お名前：
        <input class="input" type="text" name="name" required />
      </label>
      <label class="label">
        メールアドレス：
        <input class="input" type="email" name="email" required />
      </label>
      <label class="label hide">
        埋めないでね：
        <input class="input" type="text" name="text" />
      </label>
      <label class="label">
        本文：
        <textarea class="input" name="message" required></textarea>
      </label>
      <button class="button" type="submit">送信</button>
    </form>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import MainHeading from '~/components/MainHeading.vue'

export default Vue.extend({
  components: { MainHeading },
  head(): MetaInfo {
    const title = 'Contact'
    return {
      title,
      meta: [{ hid: 'og:title', property: 'og:title', content: title }]
    }
  }
})
</script>

<style lang="postcss" scoped>
.warn-text {
  @apply text-warn font-bold;
}

.label {
  @apply mt-3 mb-1 inline-block w-full;

  &.hide {
    @apply hidden;
  }
}

.input {
  @apply bg-gray-2 appearance-none border-2 border-gray-4 rounded w-full py-2 px-3 text-gray-7 leading-tight;

  &:focus {
    @apply outline-none bg-white border-blue-5;
  }
}

.button {
  @apply bg-blue-5 text-white font-bold py-2 px-4 rounded mt-2;

  &:hover {
    @apply bg-blue-7;
  }
}
</style>
