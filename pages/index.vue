<template>
  <main>
    <img src="~/assets/images/me.jpeg" alt="y-temp4" class="icon" />
    <span class="name">Yuki Terashima</span>
    <span class="description">Hello there, this is y-temp4's portfolio site.</span>
    <h2 class="heading">About me</h2>
    <p>Webの主にフロントエンドや、ブロックチェーン関連の技術に興味があります。</p>
    <h2 class="heading">Skills</h2>
    <p>
      どちらかというとフロントエンド関連の技術が得意です。また、最近は Nuxt.js を使った SPA 開発をすることが多いです。詳しくは
      <n-link to="/skills">こちら</n-link>
    </p>
    <h2 class="heading">Products</h2>
    <p>
      個人開発が好きで、これまでにいくつかサービス・アプリを作っています。詳しくは
      <n-link to="/products">こちら</n-link>
    </p>
    <h2 class="heading">Accounts</h2>
    <ul class="list">
      <li v-for="account in accounts">
        <a :href="account.url" target="_blank" rel="noopener noreferrer">{{ account.name }}</a>
      </li>
    </ul>
  </main>
</template>

<script>
import skills from '~/data/skills.json'
import accounts from '~/data/accounts.json'

export default {
  components: {},
  layout: 'home',
  data() {
    return {
      skills,
      accounts
    }
  }
}
</script>

<style lang="postcss" scoped>
.icon {
  width: 150px;
  @apply rounded-full w-40 h-40;
}

.name {
  @apply text-3xl font-bold mt-2 text-center;
}

.description {
  @apply m-6 text-lg;
}

.heading {
  @apply text-2xl text-left w-full font-bold mt-3 mb-1;
  border-bottom: solid 3px #343a40;
}

.list {
  @apply w-full mt-1;

  & li {
    &:before {
      content: '・ ';
    }
  }
}
</style>
