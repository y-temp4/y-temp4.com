<template>
  <main>
    <MainHeading>Skills</MainHeading>
    <p>これまでに触れたことのある技術を雑にまとめたものです。</p>
    <h3 class="heading">実務経験があるもの</h3>
    <p>
      <span v-for="workSkill in workSkills" :key="workSkill" class="skill">{{
        workSkill
      }}</span>
    </p>
    <h3 class="heading">趣味で扱ったことがあるもの</h3>
    <p>
      <span v-for="hobbySkill in hobbySkills" :key="hobbySkill" class="skill">{{
        hobbySkill
      }}</span>
    </p>
    <p class="mt-10">
      基本的にフロントエンドまわりの技術を扱うのが好きです。最近最も興味のある技術は
      <span class="font-bold">{{ mostInterestedSkills() }}</span> です。
    </p>
  </main>
</template>

<script lang="ts" setup>
const workSkills = [
  'Vue.js',
  'Nuxt.js',
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'PostCSS',
  'Sass',
  'Ruby on Rails',
  'Python',
  'AWS',
]
const hobbySkills = ['Firebase', 'Prisma', 'Flutter', 'Dart', 'Elixir']
const mostInterestedSkills = (): string => {
  const mostInterestedSkills = ['Next.js', 'Prisma', 'Nuxt.js', 'TypeScript']
  return mostInterestedSkills.join('、')
}
definePageMeta({
  meta: [{ hid: 'og:title', property: 'og:title', content: 'Skills' }],
})
useHead({
  title: 'Skills',
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
