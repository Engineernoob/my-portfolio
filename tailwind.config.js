/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/index.css",
    "./src/App.css",
  ],
  theme: {
    extend: {
      colors: {
        'vscode-bg': '#1e1e1e',
        'vscode-text': '#d4d4d4',
        'vscode-blue': '#007acc',
        'vscode-yellow': '#dcdcaa',
        'vscode-green': '#6a9955',
        'vscode-purple': '#c586c0',
      },
    },
  },
  plugins: [],
}

