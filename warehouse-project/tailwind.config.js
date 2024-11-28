/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fwarehouse-interior&psig=AOvVaw1wszVPkyT1FVUx4ee_rlcU&ust=1732802024883000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC8v97U_IkDFQAAAAAdAAAAABAE')",
      },
    },
  },
  plugins: [],
}

