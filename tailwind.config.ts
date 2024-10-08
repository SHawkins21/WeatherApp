import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
        colors:{
          'darkpurple': '#483976',
          'lightpurple':'#965298',
          'sunsetpurple':'#8f5c9f'
        }
        
      ,
    },
  },
  plugins: [],
};
export default config;
