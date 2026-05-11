import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'

import { resolve } from 'path'

export default defineConfig({

  plugins: [tailwindcss()],

  base: '/NihalHealthcare/',

  build: {

    rollupOptions: {

      input: {

        // MAIN PAGES
        main: resolve(__dirname, 'index.html'),

        about: resolve(__dirname, 'about.html'),

        contact: resolve(__dirname, 'contact.html'),

        history: resolve(__dirname, 'history.html'),

        products: resolve(__dirname, 'products.html'),

        certifications: resolve(__dirname, 'certifications.html'),

        blogs: resolve(__dirname, 'blogs.html'),

        feedback: resolve(__dirname, 'feedback.html'),

        leadership: resolve(__dirname, 'leadership.html'),

        // PRODUCT PAGES
        disposable: resolve(
          __dirname,
          'disposable-syringes.html'
        ),

        safety: resolve(
          __dirname,
          'safety-syringes.html'
        ),

        insulin: resolve(
          __dirname,
          'insulin-syringes.html'
        ),

        // BLOG PAGES
        sterileManufacturing: resolve(
          __dirname,
          'sterile-manufacturing.html'
        ),

        healthcareInnovation: resolve(
          __dirname,
          'healthcare-innovation.html'
        ),

        medicalSafety: resolve(
          __dirname,
          'medical-safety.html'
        ),

      },

    },

  },

})