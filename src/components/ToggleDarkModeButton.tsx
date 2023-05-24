'use client';

import { useTheme } from 'next-themes';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { IconMoon } from '~/components/IconMoon';
import { IconSun } from '~/components/IconSun';

export const ToggleDarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkMode = useMemo(() => resolvedTheme === 'dark', [resolvedTheme]);
  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleDarkMode = useCallback(() => {
    setTheme(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode, setTheme]);

  const buttonBg = isDarkMode ? 'bg-white' : 'bg-gray-8';

  if (!mounted) {
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
