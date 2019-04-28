module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  pwa: {
    name: 'efiwe-ngo'
  }
}
