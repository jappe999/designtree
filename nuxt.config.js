const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9\-:\/]+/gi) || [];
    }
}

module.exports = {
  server: {
    port: process.env.NODE_ENV === 'production' ? 80 : 3000,
    host: '0.0.0.0',
  },
	
  /*
  ** Headers of the page
  */
  head: {
    title: 'design-tree',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Desgin Tree' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  vendor: ['axios'],

  plugins: [
    '~/plugins/vue-org-tree',
  ],

  css: ['~/assets/app.css'],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  babel: {
    plugins: [
      'babel-plugin-add-module-exports'
    ],
  },

  postcss: [],

  extractCSS: true,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        
      }

      if (!isDev && isClient) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './dist/**/*.html'),
              path.join(__dirname, './.nuxt/**/*.vue'),
              path.join(__dirname, './**/*.vue'),
            ]),

            whitelistPatterns: [
              /^bg-/,
              /^text-/,
              /^md\:\w\-[0-9]{1}\/[0-9]{1}/,
            ],
            
            extractors: [
              {
                extractor: TailwindExtractor,
          
                // Specify the file extensions to include when scanning for
                // class names.
                extensions: ['html', 'js', 'vue']
              }
            ]
          })
        )
      }
    }
  },
 
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}

