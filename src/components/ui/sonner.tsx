"use client";
import { Toaster as Sonner } from "sonner";
import { useTheme } from "../theme/ThemeProvider";

const Toaster = () => {
  const { theme } = useTheme();

  return (
    <Sonner
      position="top-center"
      theme={theme === "dark" ? "dark" : "light"}
      richColors
      closeButton
      toastOptions={{
        style: {
          fontFamily: 'var(--font-montserrat)',
        },
      }}
    />
  );
};

export { Toaster };