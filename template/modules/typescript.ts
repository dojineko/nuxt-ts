module.exports = function(options, next) {
  this.extendBuild((config, context) => {
    const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
    vueLoader.options.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"]}!tslint-loader?{"emitErrors":true}'

    config.module.rules.push({
      loader: 'ts-loader!tslint-loader?{"emitErrors":true}',
      test: /\.ts$/,
    })
  })

  next()
}
