<template>
  <main>
    <MainHeading>About me</MainHeading>
    <p>
      1994 年生まれ。大学は情報系の学部で、学生時代は課外活動と個人開発を通じて
      Web 開発の技術を学びました。
    </p>
    <p>
      卒業後、ALIS というブロックチェーン系のスタートアップにジョインしました。
    </p>
    <p>
      <span class="font-bold">入社したときに書いた記事：</span>
      <a
        href="https://medium.com/@alismedia/alis%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E7%B4%B9%E4%BB%8B7-%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E5%AF%BA%E5%B6%8B-f0856af30ce0"
        target="_blank"
        rel="noopener noreferrer"
      >
        【ALISメンバー紹介7】エンジニア寺嶋 - ALIS - Medium
      </a>
    </p>
    <p>
      その後、約 1 年で ALIS を退職し、現在はフリーランスとして活動しています。
    </p>
    <p>
      <span class="font-bold">参考：</span>
      <a
        href="https://blog.y-temp4.com/entry/leave-alis"
        target="_blank"
        rel="noopener noreferrer"
      >
        株式会社 ALIS を退職しました
      </a>
    </p>
    <h3 class="heading">趣味など</h3>
    <p>
      上記メンバー紹介の記事にも書いていますが、マンガを読むのが好きでよく読んでいます。一番好きなマンガは
      <a
        href="http://worldtrigger.info/"
        target="_blank"
        rel="noopener noreferrer"
        >ワールドトリガー</a
      >
      ということになっています。
    </p>
    <p>
      また、ミニマリストでもあり、ほぼ毎日同じ服を着て過ごしています。
      あと、サウナが好きで、だいたい週に 1 回くらいは行っています。
    </p>
    <p>
      苦手なものはタバコ、時間を守らない人、瓜系の野菜・果物（きゅうり、スイカなど）です。
    </p>
    <h3 class="heading">ID について</h3>
    <p>
      普段は以下の ID で活動していることが多いです。
    </p>
    <ul class="list-disc ml-6">
      <li>y_temp4</li>
      <li>y-temp4</li>
      <li>yt4</li>
    </ul>
    <p>
      yt4
      は短いので取得しにくく、新規サービスがリリースされたときなどに取得しがちです。
    </p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import MainHeading from '~/components/MainHeading.vue'

export default Vue.extend({
  components: { MainHeading },
  head(): MetaInfo {
    const title = 'About me'
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
</style>
