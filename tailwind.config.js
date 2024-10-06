export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Chemin vers vos fichiers sources React
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-green': 'rgba(44, 131, 134, 0.897)', // Ajoute la couleur ici avec le nom que tu veux
      },
    },
  },
  plugins: [],
}
