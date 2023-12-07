import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import CommandBar from "@/components/CommandBar";
import { useRouter } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState("light");
  const router = useRouter();

  const actions = [
    {
      id: "home",
      name: "Home",
      section: "navigation",
      shortcut: ["h"],
      keywords: "home",
      perform: () => router.push("/"),
    },
    {
      id: "about",
      name: "About",
      section: "navigation",
      shortcut: ["a"],
      keywords: "about, contact",
      perform: () => router.push("/about"),
    },
    {
      id: "dark-theme",
      name: "Dark theme",
      section: "utilities",
      shortcut: ["d"],
      keywords: "dark, theme, mode",
      perform: () => setActiveTheme("dark"),
    },
    {
      id: "light-theme",
      name: "Light theme",
      section: "utilities",
      shortcut: ["l"],
      keywords: "light, theme, mode",
      perform: () => setActiveTheme("light"),
    },
  ];

  return (
    <CommandBar actions={actions}>
      <div className={`${activeTheme}`}>
        <Component {...pageProps} />
      </div>
    </CommandBar>
  );
}
