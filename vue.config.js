module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
  // 关闭eslint检查
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
  },
};
