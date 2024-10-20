import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  darkMode: 'class',  // This ensures dark mode is toggled via 'class'
  daisyui: {
    themes: [
      {
        linkedin: {
          primary: "#9400D3", // Custom LinkedIn color
          secondary: "#FFFFFF", // White
          accent: "#7FC15E", // Green for accents
          neutral: "#000000", // Black for text
          "base-100": "#F3F2EF", // Light gray for background
          info: "#5E5E5E", // Dark gray for secondary text
          success: "#057642", // Dark green for success
          warning: "#F5C75D", // Yellow for warnings
          error: "#CC1016", // Red for errors
        },
      },
      {
        dark: {
          primary: "#4F46E5", // Dark mode primary (purple)
          secondary: "#2D2D2D", // Dark mode secondary (gray)
          accent: "#4ADE80", // Dark mode green accents
          neutral: "#F3F4F6", // Light gray for dark mode text
          "base-100": "#1A1A1A", // Dark background
          info: "#3B82F6", // Blue for info
          success: "#10B981", // Green for success
          warning: "#F59E0B", // Yellow for warnings
          error: "#EF4444", // Red for errors
        },
      },
    ],
    darkTheme: "dark", // Sets dark mode theme as the default for 'dark' mode
  },
};
