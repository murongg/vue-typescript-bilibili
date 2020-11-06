module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem-exclude")({
            remUnit: 75, // 换算的基数
            exclude: /node_modules|folder_name/i
          })
        ]
      }
    }
  },
}