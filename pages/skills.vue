<template>
  <main>
    <MainHeading>Skills</MainHeading>
    <p>これまでに触れたことのある技術を雑にまとめたものです。</p>
    <h3 class="heading">実務経験があるもの</h3>
    <p>
      <span v-for="skill in workSkills" :key="skill.name" class="skill">{{
        skill.name
      }}</span>
    </p>
    <h3 class="heading">趣味で扱ったことがあるもの</h3>
    <p>
      <span v-for="skill in hobbySkills" :key="skill.name" class="skill">{{
        skill.name
      }}</span>
    </p>
    <p class="mt-10">
      基本的にフロントエンドまわりの技術を扱うのが好きです。最近最も興味のある技術は
      <span class="font-bold">Nuxt.js、TypeScript、Firebase</span> です。
    </p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import MainHeading from '~/components/MainHeading.vue'
import skills from '~/data/skills.json'

export default Vue.extend({
  components: { MainHeading },
  computed: {
    workSkills() {
      return skills.filter(skill => skill.level === 'work')
    },
    hobbySkills() {
      return skills.filter(skill => skill.level === 'hobby')
    }
  },
  head(): MetaInfo {
    const title = 'Skills'
    return {
      title,
      meta: [{ hid: 'og:title', property: 'og:title', content: title }]
    }
  }
})
</script>

<style lang="postcss" scoped>
.heading {
  @apply text-xl text-left w-full font-bold mt-5 mb-1;
}

.skill {
  @apply mr-2;

  &:not(:last-child):after {
    white-space: pre-wrap;
    content: ' /';
  }
}
</style>
