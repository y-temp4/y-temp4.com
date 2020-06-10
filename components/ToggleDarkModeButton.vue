<template>
  <div class="toggle-darkmode-button" @click="toggleDarkMode">
    <div class="icon">🌓</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const LOCAL_STORAGE_DARKMODE_KEY = 'darkmode'
const DARK_THEME_CLASS = 'dark-theme'
const LIGHT_THEME_CLASS = 'light-theme'

export default Vue.extend({
  mounted() {
    const isFirstAccess = !localStorage.getItem('darkmode')

    if (isFirstAccess) {
      const darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      )
      const darkModeOn = darkModeMediaQuery.matches
      if (darkModeOn) {
        localStorage.setItem(LOCAL_STORAGE_DARKMODE_KEY, 'on')
        document.body.classList.add(DARK_THEME_CLASS)
      } else {
        localStorage.setItem(LOCAL_STORAGE_DARKMODE_KEY, 'off')
        document.body.classList.add(LIGHT_THEME_CLASS)
      }
      return
    }

    const darkModeOnInLocalStorage =
      localStorage.getItem(LOCAL_STORAGE_DARKMODE_KEY) === 'on'

    if (darkModeOnInLocalStorage) {
      document.body.classList.add(DARK_THEME_CLASS)
    } else {
      document.body.classList.add(LIGHT_THEME_CLASS)
    }
  },
  methods: {
    toggleDarkMode() {
      const darkModeOn = Array.from(document.body.classList).includes(
        DARK_THEME_CLASS
      )
      if (darkModeOn) {
        localStorage.setItem(LOCAL_STORAGE_DARKMODE_KEY, 'off')
        document.body.classList.remove(DARK_THEME_CLASS)
        document.body.classList.add(LIGHT_THEME_CLASS)
      } else {
        localStorage.setItem(LOCAL_STORAGE_DARKMODE_KEY, 'on')
        document.body.classList.add(DARK_THEME_CLASS)
        document.body.classList.remove(LIGHT_THEME_CLASS)
      }
    }
  }
})
</script>

<style lang="postcss" scoped>
.toggle-darkmode-button {
  @apply fixed bg-gray-8 rounded-full cursor-pointer flex justify-center items-center outline-none;
  width: 54px;
  height: 54px;
  bottom: 30px;
  right: 30px;
}

.icon {
  @apply select-none;
}

.dark-theme {
  & .toggle-darkmode-button {
    @apply bg-white;
  }
}
</style>
