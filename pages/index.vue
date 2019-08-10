<template>
  <div class="wrapper container">
    <img src="https://github.com/y-temp4.png" alt="y-temp4" class="icon" />
    <span class="name">Yuki Terashima</span>
    <span class="description">Hello there, this is y-temp4's portfolio site.</span>
    <h2 class="heading">About me</h2>
    <p>Webの主にフロントエンドや、ブロックチェーン関連の技術に興味があります。</p>
    <h2 class="heading">Skills</h2>
    <p>
      <span v-for="skill in skills" :key="skill.name" class="skill">{{ skill.name }}</span>
    </p>
    <h2 class="heading">Products</h2>
    <p>WIP</p>
    <h2 class="heading">Accounts</h2>
    <ul class="list">
      <li v-for="account in accounts">
        <a class="link" :href="account.url" target="_blank">{{ account.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import skills from '~/data/skills.json'
import accounts from '~/data/accounts.json'

export default {
  components: {},
  data() {
    return {
      skills,
      accounts
    }
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply mx-auto max-w-2xl flex items-center flex-col py-6 px-8 bg-white;
}

.icon {
  width: 150px;
  @apply rounded-full;
}

.name {
  @apply text-3xl font-bold;
}

.description {
  @apply m-6 text-lg;
}

p {
  @apply w-full;
}

.heading {
  @apply text-2xl text-left w-full font-bold my-3;
  border-bottom: solid 3px #343a40;
}

.skill {
  @apply mr-2;

  &:not(:last-child):after {
    white-space: pre-wrap;
    content: ' /';
  }
}

.list {
  @apply w-full;

  & li {
    &:before {
      content: '・';
    }
  }
}

.link {
  @apply underline text-blue-4;
}
</style>
