const extPattern = /\.js$/i

const resolver = (path, options) => {
  const defaultResolver = options.defaultResolver

  try {
    return defaultResolver(path, options)
  } catch (error) {
    if (!extPattern.test(path)) throw error
    try {
      return defaultResolver(path.replace(extPattern, ".ts"), options)
    } catch (_) {
      return defaultResolver(path.replace(extPattern, ".tsx"), options)
    }
  }
}

module.exports = resolver
