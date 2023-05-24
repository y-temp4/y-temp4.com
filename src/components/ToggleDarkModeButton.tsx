'use client';

import { useEffect, useState } from 'react';

import { IconMoon } from '~/components/IconMoon';
import { IconSun } from '~/components/IconSun';

const LOCAL_STORAGE_DARKMODE_KEY = 'darkmode';
const DARK_THEME_CLASS = 'dark-theme';
const LIGHT_THEME_CLASS = 'light-theme';

export const ToggleDarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isFirstAccess = !localStorage.getItem(LOCAL_STORAGE_DARKMODE_KEY);
    if (isFirstAccess) {
      const darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      const isDarkMode = darkModeMediaQuery.matches;
      localStorage.setItem(
        LOCAL_STORAGE_DARKMODE_KEY,
        isDarkMode ? 'on' : 'off'
      );
      document.body.classList.add(
        isDarkMode ? DARK_THEME_CLASS : LIGHT_THEME_CLASS
      );
      setIsDarkMode(isDarkMode);
      setIsLoading(false);
    } else {
      const isDarkModeOnInLocalStorage =
        localStorage.getItem(LOCAL_STORAGE_DARKMODE_KEY) === 'on';
      document.body.classList.add(
        isDarkModeOnInLocalStorage ? DARK_THEME_CLASS : LIGHT_THEME_CLASS
      );
      setIsDarkMode(isDarkModeOnInLocalStorage);
      setIsLoading(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const { classList } = document.body;
    const isDarkMode = Array.from(classList).includes(DARK_THEME_CLASS);
    localStorage.setItem(LOCAL_STORAGE_DARKMODE_KEY, isDarkMode ? 'off' : 'on');
    classList[isDarkMode ? 'remove' : 'add'](DARK_THEME_CLASS);
    classList[isDarkMode ? 'add' : 'remove'](LIGHT_THEME_CLASS);
    setIsDarkMode(!isDarkMode);
  };

  const buttonBg = isDarkMode ? 'bg-white' : 'bg-gray-8';

  if (isLoading) {
    return null;
  }

  return (
    <div
      className={`${buttonBg} fixed bottom-[30px] right-[30px] flex h-[54px] w-[54px] cursor-pointer items-center justify-center rounded-full outline-none [&.toggle-darkmode-button]:bg-white [&_.icon]:hover:text-blue-5`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <div className="icon h-6 w-6 text-gray-7 transition duration-200">
          <IconSun />
        </div>
      ) : (
        <div className="icon h-6 w-6 text-white transition duration-200">
          <IconMoon />
        </div>
      )}
    </div>
  );
};
