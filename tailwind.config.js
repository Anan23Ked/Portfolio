/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}",]
export const theme = {
  extend: {
    colors:{
      
      'primaryColor': '#ADD8E6',      //blue
      'primaryHover': '#DAEEF5', 
      
      'secondaryColor' :'#800020',      //red
      'secondaryHover' :'rgb(146, 10, 10)',

      'paragraphText': 'rgb(77, 16, 31)',     
      'singleLineText' : '#2d4d77',        //dark blue
      'headingText' : ' rgb(146, 10, 10)',      //red
    }
  },
}
export const plugins = []
