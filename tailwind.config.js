/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: 'true',
    },
    colors: {
      softBlue: 'hsl(215, 51%, 70%)',
      cyan: '#00FFFF',
      mainbgBlue: 'hsl(217, 54%, 11%)',
      cardbgBlue: 'hsl(216, 50%, 16%)',
      linebgBlue: 'hsl(215, 32%, 27%)',
      white: 'hsl(0, 0%, 100%)',
        
    },
    
    fontFamily: {
      outfit: 'Outfit',
      
    },
      
    extend: {
      backgroundImage: {
        'hoverimg': "url{'./images/image-avatar.png'}",
      },
    },
  },
  plugins: [],
}
