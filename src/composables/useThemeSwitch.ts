import { useDark } from '@vueuse/core';
import { Ref, watch } from 'vue';

interface UseThemeSwitchReturn {
  prefersDarkTheme: Ref<boolean>;
  loadThemeStylesheet(darkPreferred: boolean): Promise<void>;
}

export default function useThemeSwitch(): UseThemeSwitchReturn {
  const loadThemeStylesheet = async (darkPreferred: boolean) => {
    const themeName = darkPreferred ? 'arya' : 'saga';
    const themeUrl = `https://unpkg.com/primevue/resources/themes/${themeName}-blue/theme.css`;

    (document.querySelector('#theme') as HTMLLinkElement).href = themeUrl;
  };

  const prefersDarkTheme = useDark();

  watch(prefersDarkTheme, (newPrefs) => loadThemeStylesheet(newPrefs));

  return { loadThemeStylesheet, prefersDarkTheme };
}
