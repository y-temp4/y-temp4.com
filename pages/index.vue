<template>
  <main>
    <img src="~/assets/images/me.jpeg" alt="y-temp4" class="icon" />
    <span class="name">Yuki Terashima</span>
    <span class="description">Hello there! This is my portfolio site.</span>
    <h2 class="heading">About me</h2>
    <p>
      フリーランスエンジニア。主に Web のフロントエンドや、ブロックチェーン関連の技術に興味があります。
      より詳しいプロフィールは
      <n-link to="/about">こちら</n-link>
    </p>
    <h2 class="heading">Skills</h2>
    <p>
      どちらかというとフロントエンド関連の技術が得意です。また、最近は
      <span class="font-bold">Nuxt.js</span> を使った SPA 開発をすることが多いです。詳しくは
      <n-link to="/skills">こちら</n-link>
    </p>
    <h2 class="heading">Products</h2>
    <p>
      個人開発が好きで、これまでにいくつかちょっとしたサービスを作っています。詳しくは
      <n-link to="/products">こちら</n-link>
    </p>
    <h2 class="heading">Accounts</h2>
    <div class="accounts">
      <a
        v-for="account in accounts"
        :href="account.url"
        class="account"
        target="_blank"
        rel="noopener noreferrer"
        :style="`background: ${account.color}`"
      >{{ account.name }}</a>
    </div>
    <h2 class="heading">Contact</h2>
    <p>
      お問い合わせは
      <n-link to="/contact">こちら</n-link>、もしくは Twitter の DM にて受け付けています。
    </p>
  </main>
</template>

<script>
import skills from '~/data/skills.json'
import accounts from '~/data/accounts.json'

export default {
  layout: 'home',
  data() {
    return {
      skills,
      accounts
    }
  },
  head: {
    titleTemplate: ''
  }
}
</script>

<style lang="postcss" scoped>
.icon {
  @apply rounded-full w-32 h-auto;
}

.name {
  @apply text-3xl font-bold mt-2 text-center whitespace-no-wrap;
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
    border-left: 20px solid #ffffff;
    border-top: 20px solid #ffffff;
    border-right: 20px solid transparent;
    border-bottom: 20px solid transparent;
    @apply absolute block w-0 h-0 rounded-full;
  }
}

.heading {
  @apply text-2xl text-left w-full font-bold mt-3 mb-1;
  border-bottom: solid 3px #343a40;
}

.accounts {
  @apply flex flex-row flex-wrap w-full mb-2;

  & .account {
    @apply px-4 py-2 mr-3 mt-2 block rounded-lg text-white text-center font-bold no-underline;

    &:hover {
      @apply opacity-75;
    }
  }
}
</style>
