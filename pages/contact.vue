<template>
  <main>
    <h2 class="title">Contact</h2>
    <form name="contact" method="POST" data-netlify="true">
      <p class="text-red-4">※入力項目はすべて必須です。</p>
      <label class="label">
        お名前：
        <input class="input" type="text" name="name" required />
      </label>
      <label class="label">
        メールアドレス：
        <input class="input" type="email" name="email" required />
      </label>
      <label class="label">
        本文：
        <textarea class="input" name="message" required></textarea>
      </label>
      <button class="button" type="submit">送信</button>
    </form>
  </main>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/title.pcss';

.label {
  @apply mt-3 mb-1 inline-block w-full;
}

.input {
  @apply bg-gray-2 appearance-none border-2 border-gray-4 rounded w-full py-2 px-4 text-gray-7 leading-tight;

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
