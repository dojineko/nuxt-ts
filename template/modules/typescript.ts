module.exports = function(options, next) {
  this.extendBuild((config, context) => {
    config.module.rules.push({
      loader: 'ts-loader!tslint-loader?{"emitErrors":true}',
      test: /\.ts$/,
    })

    for (const rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.query.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"]}!tslint-loader?{"emitErrors":true}'
      }
    }
  })

  next()
}
