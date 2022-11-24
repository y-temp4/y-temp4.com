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
        <textarea
          placeholder="スパム対策のため、日本語を含めてください。"
          class="input"
          name="message"
          required
          @input="handleInput"
        ></textarea>
      </label>
      <button class="button" type="submit" :disabled="!validMessage()">
        送信
      </button>
    </form>
  </main>
</template>

<script lang="ts" setup>
const message = ref('')
const validMessage = () => !!message.value.match(/[亜-熙ぁ-んァ-ヶ]/)
const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  message.value = target.value
}

definePageMeta({
  meta: [{ hid: 'og:title', property: 'og:title', content: 'Contact' }],
})
useHead({
  title: 'Contact',
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
  @apply bg-blue-5 text-white font-bold py-2 px-4 rounded my-2;

  &:hover {
    @apply bg-blue-7;
  }

  &:disabled {
    @apply bg-gray-6 text-gray-8 cursor-not-allowed;
  }
}
</style>
