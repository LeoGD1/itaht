/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: {
        'hero-image': "linear-gradient(#00000070, #00000070), url('/hero.jpg')",
        'hero-videoconference': "linear-gradient(90deg, #00378599, #00378599), url('https://cdn.shopify.com/s/files/1/0575/4109/9674/files/eeeeqqqq_1024x1024.jpg?v=1647622694')",
        'hero-videoconference-resp': "linear-gradient(90deg, #003785, 80%, transparent), url('https://cdn.shopify.com/s/files/1/0575/4109/9674/files/eeeeqqqq_1024x1024.jpg?v=1647622694')",
        'hero-email': "linear-gradient(90deg, #00378599, #00378599), url('https://d3t4nwcgmfrp9x.cloudfront.net/upload/como-escribir-correo-electronico-sin-que-sea-molesto.jpg')",
        'hero-email-resp': "linear-gradient(90deg, #003785, 80%, transparent), url('https://d3t4nwcgmfrp9x.cloudfront.net/upload/como-escribir-correo-electronico-sin-que-sea-molesto.jpg')"
      },
      colors: {
        'blue-itaht': '#003785',
        'red-itaht': '#ff0000'
      }
    },
	},
	plugins: [],
}
