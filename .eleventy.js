module.exports = (config) => {
  config.addPassthroughCopy('./src/assets');

  return {
    pathPrefix: '/patterns/',
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
