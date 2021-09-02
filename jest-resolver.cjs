const extPattern = /\.js$/i

const resolver = (path, options) => {
  const defaultResolver = options.defaultResolver

  try {
    return defaultResolver(path, options)
  } catch (error) {
    if (!extPattern.test(path)) throw error

    return defaultResolver(path.replace(extPattern, ".ts"), options)
  }
}

module.exports = resolver
