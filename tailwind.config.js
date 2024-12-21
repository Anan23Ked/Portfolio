/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}",]
export const theme = {
  extend: {
    colors:{
      'primaryColorDark': '#7db7c9',      // blue (slightly darker)
      
      'primaryColor': '#ADD8E6',      //blue
      'primaryHover': '#DAEEF5', 
      'primaryShade': 'rgb(245, 249, 250)', 
      
      'secondaryColor' :'#800020',      //red
      'secondaryHover' :'rgb(146, 10, 10)',

      'paragraphText': '#3a4042',    // paragraph 
      'smallContent': '#535c5e',
      'singleLineText' : '#2d4d77',        //dark blue
      'headingText' : ' rgb(146, 10, 10)',      //Heading red

      'highlightGreen' : 'rgb(69, 173, 66)',
      
    }
  },
}
export const plugins = []
