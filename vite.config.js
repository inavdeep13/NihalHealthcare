import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import { resolve } from 'path'

export default defineConfig({

  plugins: [tailwindcss()],

  base: '/NihalHealthcare/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        history: resolve(__dirname, 'history.html'),
        certifications: resolve(__dirname, 'certifications.html'),
      },
    },
  },

})