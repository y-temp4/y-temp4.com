<template>
  <div v-if="!isLoading" class="toggle-darkmode-button" @click="toggleDarkMode">
    <IconSun v-if="isDarkMode" class="icon text-gray-7" />
    <IconMoon v-else class="icon text-white" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconSun from '~/components/IconSun.vue'
import IconMoon from '~/components/IconMoon.vue'
const LOCAL_STORAGE_DARKMODE_KEY = 'darkmode'
const DARK_THEME_CLASS = 'dark-theme'
const LIGHT_THEME_CLASS = 'light-theme'

export default Vue.extend({
  components: {
    IconSun,
    IconMoon,
  },
  data() {
    return {
      isDarkMode: false,
      isLoading: true,
    }
  },
  mounted() {
    const isFirstAccess = !localStorage.getItem('darkmode')
    if (isFirstAccess) {
      const darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      )
      const isDarkMode = darkModeMediaQuery.matches
      localStorage.setItem(
        LOCAL_STORAGE_DARKMODE_KEY,
        isDarkMode ? 'on' : 'off'
      )
      document.body.classList.add(
        isDarkMode ? DARK_THEME_CLASS : LIGHT_THEME_CLASS
      )
      this.isDarkMode = isDarkMode
      this.isLoading = false
      return
    }
    const isDarkModeOnInLocalStorage =
      localStorage.getItem(LOCAL_STORAGE_DARKMODE_KEY) === 'on'
    document.body.classList.add(
      isDarkModeOnInLocalStorage ? DARK_THEME_CLASS : LIGHT_THEME_CLASS
    )
    this.isDarkMode = isDarkModeOnInLocalStorage
    this.isLoading = false
  },
  methods: {
    toggleDarkMode() {
      const { classList } = document.body
      const isDarkMode = Array.from(classList).includes(DARK_THEME_CLASS)
      localStorage.setItem(
        LOCAL_STORAGE_DARKMODE_KEY,
        isDarkMode ? 'off' : 'on'
      )
      classList[isDarkMode ? 'remove' : 'add'](DARK_THEME_CLASS)
      classList[isDarkMode ? 'add' : 'remove'](LIGHT_THEME_CLASS)
      this.isDarkMode = !isDarkMode
    },
  },
})
</script>

<style lang="postcss" scoped>
.toggle-darkmode-button {
  @apply fixed bg-gray-8 rounded-full cursor-pointer flex justify-center items-center outline-none;
  width: 54px;
  height: 54px;
  bottom: 30px;
  right: 30px;

  &:hover {
    & .icon {
      @apply text-blue-5;
    }
  }
}

.icon {
  @apply w-6 h-6 transition duration-200;
}

.dark-theme {
  & .toggle-darkmode-button {
    @apply bg-white;
  }
}
</style>
