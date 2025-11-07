import { create } from "zustand";
import { persist, combine } from "zustand/middleware";

type State = {
  theme: "light" | "dark" | "system";
};

const initState: State = {
  theme: "light",
};

const useThemeStore = create(
  persist(
    combine(initState, (set, get) => ({
      actions: {
        setTheme: (theme: State["theme"]) => {
          const HTMLTag = document.documentElement;
          HTMLTag.classList.remove("dark", "light");

          if (theme === "system") {
            const isDarkTheme = window.matchMedia(
              "prefers-color-scheme: dark"
            ).matches;

            HTMLTag.classList.add(isDarkTheme ? "dark" : "light");
          } else {
            HTMLTag.classList.add(theme);
          }
          set({ theme });
        },
      },
    })),
    {
      name: "ThemeStore",
      partialize: (store) => ({
        theme: store.theme,
      }),
    }
  )
);

export const useTheme = () => {
  return useThemeStore((store) => store.theme);
};

export const useSetTheme = () => {
  return useThemeStore((store) => store.actions.setTheme);
};
