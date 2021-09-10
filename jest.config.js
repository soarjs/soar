/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  preset: "ts-jest",
  resolver: "<rootDir>/jest-resolver.cjs",
  modulePathIgnorePatterns: ["lib/"],
}

export default config
