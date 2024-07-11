"use client";
import { Box, IconButton } from "@radix-ui/themes";
import { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Fragment>
      {theme === "dark" ? (
        <IconButton onClick={() => setTheme("light")}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_12_96)">
              <path
                d="M16.6092 10.8333H20V9.16667H16.6092C16.6433 9.44 16.6667 9.7175 16.6667 10C16.6667 10.2825 16.6433 10.56 16.6092 10.8333ZM14.0808 4.74L16.4817 2.33917L17.66 3.5175L15.2592 5.91833C14.9167 5.4775 14.5217 5.0825 14.0808 4.74ZM4.74 5.91833L2.33917 3.5175L3.5175 2.33917L5.91833 4.74C5.47833 5.0825 5.08333 5.47833 4.74 5.91833ZM10 3.33333C9.7175 3.33333 9.44 3.35667 9.16667 3.39083V0H10.8333V3.39083C10.56 3.35667 10.2825 3.33333 10 3.33333ZM10 16.6667C10.2825 16.6667 10.56 16.6433 10.8333 16.6092V20H9.16667V16.6092C9.44 16.6433 9.7175 16.6667 10 16.6667ZM3.39083 9.16667C3.35667 9.44 3.33333 9.7175 3.33333 10C3.33333 10.2825 3.35667 10.56 3.39083 10.8333H4.76837e-07V9.16667H3.39083ZM5.91833 15.26L3.51833 17.66L2.33917 16.4817L4.73917 14.0817C5.0825 14.5217 5.4775 14.9167 5.91833 15.26ZM15.26 14.0808L17.66 16.4808L16.4817 17.6592L14.0817 15.2592C14.5217 14.9167 14.9175 14.5217 15.26 14.0808ZM13.3333 10C13.3333 11.8383 11.8383 13.3333 10 13.3333C8.16167 13.3333 6.66667 11.8383 6.66667 10C6.66667 8.16167 8.16167 6.66667 10 6.66667C11.8383 6.66667 13.3333 8.16167 13.3333 10ZM5 10C5 12.7617 7.23833 15 10 15C12.7617 15 15 12.7617 15 10C15 7.23833 12.7617 5 10 5C7.23833 5 5 7.23833 5 10Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_96">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(-1 0 0 1 20 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </IconButton>
      ) : (
        <IconButton onClick={() => setTheme("dark")}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
            ></path>
          </svg>
        </IconButton>
      )}
    </Fragment>
  );
}
