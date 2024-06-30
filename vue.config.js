// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['localhost', '.ngrok-free.app'], // Add your ngrok domain here
  },
  },
);
