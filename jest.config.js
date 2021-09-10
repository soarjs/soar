/** @type {import("@swc/core/types").Options} */
const swcConfig = {
  jsc: {
    parser: { syntax: "typescript" },
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
}

export default config
