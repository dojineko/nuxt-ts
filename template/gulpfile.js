require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
  },
  fast: true,
})

require('require-dir')('./tasks', {recurse: true})
