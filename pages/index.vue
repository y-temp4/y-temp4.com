<template>
  <main class="main-content">
    <img src="~/assets/images/me.jpeg" alt="y-temp4" class="icon" />
    <span class="name">Yuki Terashima</span>
    <span class="description">Hello there! Welcome to my portfolio site.</span>
    <MainHeading class="heading">About me</MainHeading>
    <p>
      フリーランスエンジニア。主に Web
      のフロントエンドや、ブロックチェーン関連の技術に興味があります。
      <n-link to="/about">より詳しいプロフィール</n-link>
    </p>
    <MainHeading class="heading">Skills</MainHeading>
    <p>
      どちらかというとフロントエンド関連の技術が得意です。また、最近は
      <span class="font-bold">Nuxt.js</span> を使った SPA
      開発をすることが多いです。
      <n-link to="/skills">その他に触れたことがある技術</n-link>
    </p>
    <MainHeading class="heading">Products</MainHeading>
    <p>
      個人開発が好きで、これまでにいくつかちょっとしたサービスを作っています。
      <n-link to="/products">作ってきたサービスの一覧</n-link>
    </p>
    <MainHeading class="heading">Works</MainHeading>
    <p>
      共著で Vue 3 についての技術書を執筆しました。
      <a
        href="https://booth.pm/ja/items/1978702"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vue 3 解体新書
      </a>
    </p>
    <MainHeading class="heading">Accounts</MainHeading>
    <div class="accounts">
      <a
        v-for="account in accounts"
        :key="account.name"
        :href="account.url"
        class="account"
        target="_blank"
        rel="noopener noreferrer"
        :style="`background: ${account.color}`"
      >
        {{ account.name }}
      </a>
    </div>
    <MainHeading class="heading">Contact</MainHeading>
    <p>
      <n-link to="/contact">お問い合わせページ</n-link>、もしくは
      <a
        href="https://twitter.com/messages/compose?recipient_id=3268293518"
        target="_blank"
        rel="noopener noreferrer"
        >Twitter の DM</a
      >
      にて受け付けています。
    </p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import MainHeading from '~/components/MainHeading.vue'
import accounts from '~/data/accounts.json'

export default Vue.extend({
  layout: 'home',
  components: { MainHeading },
  data() {
    return {
      accounts
    }
  },
  head: {
    titleTemplate: ''
  }
})
</script>

<style lang="postcss" scoped>
.main-content {
  @apply flex items-center flex-col;
}

.icon {
  @apply rounded-full w-32 h-32 border-white border-4;
}

.name {
  @apply text-3xl font-bold mt-2 text-center whitespace-nowrap;
}

.description {
  @apply relative px-6 py-3 bg-blue-5 text-white rounded-lg font-bold my-4;

  &:before {
    content: '';
    transform: rotate(45deg);
    right: 20px;
    top: -15px;
    border-left: 20px solid #339af0;
    border-top: 20px solid #339af0;
    border-right: 20px solid transparent;
    border-bottom: 20px solid transparent;
    @apply absolute block w-0 h-0 rounded-full;
  }

  &:after {
    content: '';
    transform: rotate(45deg);
    right: 35px;
    top: -20px;
    border-left: 20px solid var(--color-wrapper);
    border-top: 20px solid var(--color-wrapper);
    border-right: 20px solid transparent;
    border-bottom: 20px solid transparent;
    @apply absolute block w-0 h-0 rounded-full;
  }
}

.heading {
  @apply mt-3 mb-1;
}

.accounts {
  @apply flex flex-row flex-wrap w-full mb-2;

  & .account {
    @apply px-4 py-2 mr-3 mt-2 block rounded-lg text-white text-center font-bold no-underline border-white border-2;

    &:hover {
      @apply opacity-75;
    }
  }
}
</style>
