// https://sunday-morning.app/posts/2020-12-21-tailwind-dark-mode-refresh-flash
// https://blog.stin.ink/articles/how-to-implement-a-perfect-dark-mode
(function () {
  try {
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const fromStorage = localStorage.getItem('theme-y-temp4.com');
    const colorMode =
      fromStorage === 'system' || fromStorage == null
        ? prefers
        : fromStorage === 'light'
          ? 'light'
          : 'dark';
    window.document.documentElement.dataset.colorMode = colorMode;
  } catch (error) {
    console.error(error);
  }
})();
