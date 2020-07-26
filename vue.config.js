// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "fathergood - Ensure your Legacy";
      return args;
    });
  },
};
