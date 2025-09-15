/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#F9FAFB", // дуже світлий фон
          surface: "#FFFFFF", // поверхня (карточки)
          text: "#1F2937", // графітовий текст
          subtle: "#6B7280", // приглушений графіт
        },
        brand: {
          blue: {
            DEFAULT: "#2563EB", // насичений синій
            light: "#60A5FA", // світліший акцент
            dark: "#1E40AF", // темний відтінок
          },
          graphite: {
            DEFAULT: "#374151", // графіт для акцентів
            light: "#9CA3AF",
            dark: "#111827",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
