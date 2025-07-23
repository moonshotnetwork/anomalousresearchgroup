"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ControlledMenu, MenuItem } from "@szhsin/react-menu"

export function ThemeToggle() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [anchorPt, setAnchorPt] = React.useState({x: 0, y: 0});
  const [theme, setTheme] = React.useState<"light" | "dark" | "sicko">(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark" | "sicko";
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.remove("sicko");
    } else if (theme === "sicko") {
      root.classList.remove("dark");
      root.classList.add("sicko");
    } else {
      root.classList.remove("sicko");
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
        onContextMenu={(e) => {
          if (typeof document.hasFocus === "function" && !document.hasFocus()) {
            return;
          }

          e.preventDefault();
          setAnchorPt({x: e.clientX, y: e.clientY});
          setVisible(true);
        }}
      >
        <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden sicko:hidden" />
        <Moon className="hidden h-5 w-5 dark:block sicko:hidden" />
    <svg
      viewBox="0 0 512 512"
      width={160}
      height={160}
      className="mx-auto h-[1.5rem] w-[1.3rem] fill-current hidden sicko:block">
      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM103 135c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9zm192 0c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9z"/>
    </svg>
        <span className="sr-only">Toggle theme</span>
      </Button>
      <ControlledMenu
        anchorPoint={anchorPt}
        state={visible ? "open" : "closed"}
        direction="left"
        onClose={() => setVisible(false)}
        menuClassName="flex-col flex-nowrap text-nowrap flex-initial items-center justify-between rounded-lg border-black bg-gray-100 px-2 py-2 text-center text-neutral-950 shadow-lg dark:bg-neutral-900 sicko:bg-neutral-900 dark:text-gray-200 sicko:text-gray-200 text-md"
      >
        <MenuItem onClick={() => setTheme("light")} className="hover:underline">Light Mode</MenuItem>
        <MenuItem onClick={() => setTheme("dark")} className="hover:underline">Dark Mode</MenuItem>
        <MenuItem onClick={() => setTheme("sicko")} className="hover:underline">⛧⛧⛧⛧</MenuItem>
      </ControlledMenu>
    </>
  );
}
