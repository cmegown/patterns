module.exports = (config) => {
  config.addPassthroughCopy('./src/assets');

  return {
    pathPrefix: '/components/',
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
