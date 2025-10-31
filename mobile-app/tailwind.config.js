/** @type {import('tailwindcss').Config} */
module.exports = {
  // ATENÇÃO: Verifique se este caminho inclui todos os seus arquivos .js, .jsx, .ts, .tsx
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], 
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
