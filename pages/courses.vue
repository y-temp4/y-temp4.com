<template>
  <main>
    <MainHeading>Courses</MainHeading>
    <p
      >Udemyで公開中のコースです。以下のリンクから購入すると、クーポンが適用されます。</p
    >
    <h3 class="heading"
      >Next.js、Prisma、GraphQL Code
      Generatorで作るフルスタックWebアプリケーション</h3
    >
    <a
      href="https://www.udemy.com/course/nextjs-prisma-graphql-codegen/?couponCode=AC5B9B5755FD70B2C010"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="~/assets/images/courses/nextjs-prisma-graphql-codegen.png"
        alt="Next.js、Prisma、GraphQL Code Generatorで作るフルスタックWebアプリケーション"
        width="1500"
        height="844"
      />
    </a>
    <p
      >Next.jsをベースとしたモダンなWeb開発の手法について学べます。Prismaの開発者体験の良さや、GraphQL
      Code
      Generatorのコード生成を体感しながら、これらの技術をキャッチアップしていきましょう。</p
    >
    <a
      href="https://www.udemy.com/course/nextjs-prisma-graphql-codegen/?couponCode=AC5B9B5755FD70B2C010"
      target="_blank"
      rel="noopener noreferrer"
    >
      👉 コース詳細はこちら 👈
    </a>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import MainHeading from '~/components/MainHeading.vue'

export default Vue.extend({
  components: { MainHeading },
  head(): MetaInfo {
    const title = 'Courses'
    return {
      title,
      meta: [{ hid: 'og:title', property: 'og:title', content: title }],
    }
  },
})
</script>

<style lang="postcss" scoped>
.heading {
  @apply text-xl text-left w-full font-bold mt-8 mb-2;
}
</style>
