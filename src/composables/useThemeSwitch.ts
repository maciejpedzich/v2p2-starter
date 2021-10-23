import { useDark } from '@vueuse/core';
import { Ref, watch } from 'vue';

interface UseThemeSwitchReturn {
  prefersDarkTheme: Ref<boolean>;
  loadThemeStylesheet(darkPreferred: boolean): Promise<void>;
}

export default function useThemeSwitch(): UseThemeSwitchReturn {
  const loadThemeStylesheet = async (darkPreferred: boolean) => {
    /*
      This is a very naive approach.
      But I couldn't figure out how to force Vite...
      to replace a specific style tag's content with the new one
    */
    const styleElements = Array.from(document.querySelectorAll('style'));
    const currentThemeStylesheet = styleElements.find(
      (el) => el.id !== 'theme' && el.innerText.trim().startsWith(':root')
    );

    currentThemeStylesheet?.remove();

    const themeName = darkPreferred ? 'arya' : 'saga';
    const themeModule: { default: string } = await import(
      /* @vite-ignore */
      `../../node_modules/primevue/resources/themes/${themeName}-blue/theme.css`
    );

    (document.querySelector('#theme') as HTMLStyleElement).textContent =
      themeModule.default;
  };

  const prefersDarkTheme = useDark();

  watch(prefersDarkTheme, (newPrefs) => loadThemeStylesheet(newPrefs));

  return { loadThemeStylesheet, prefersDarkTheme };
}
