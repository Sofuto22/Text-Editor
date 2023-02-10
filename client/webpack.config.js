const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
      //unsure what to do here yet
      new HtmlWebpackPlugin({

      }),

      new InjectManifest({
        
        //Hopefully right after looking at a tutorial
        swSrc:"./src-sw.js",
        swDest:"./src-sw.js",

      }),
      
      new WebpackPwaManifest({
        background_color: '#2A8C68',
        inject: true,
        start_url:'/',
        icons: [
          {
            destination: 'icons',
            sizes: [96, 128, 192, 256, 384, 512],
            src: ("./src/images/localStorage.png"),
          },
        ],
        name: "Text Editor",
        theme_color:"#2A8C68",       

      })
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
