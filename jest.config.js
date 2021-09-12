/** @type {import("@swc/core/types").Options} */
const swcConfig = {
  jsc: {
    parser: { syntax: "typescript", tsx: true, dynamicImport: true },
    transform: { react: { runtime: "automatic", importSource: "soar" } },
  },
  module: {
    type: "commonjs",
  },
}

/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  modulePathIgnorePatterns: ["/lib/"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", swcConfig],
  },
  transformIgnorePatterns: ["/node_modules/"],
  resolver: "<rootDir>/jest-resolver.cjs",
}

export default config
