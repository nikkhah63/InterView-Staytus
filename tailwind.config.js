module.exports = {
  purge: [
    './*.html',
    './src/**/*.js'
  ],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray:"#68686b",        
        grayDark:"#27272a", 
        grayMeduim:"#a0a0a8",     
        grayLight:"#3f4045",    
        orange:"#f7cf55",
        orangeLight:"#fbcb56"
        
      },

    },
  },
  plugins: [],
}

