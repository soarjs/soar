import ts from "typescript"
import transpile from "./transpile.js"

const build = (files: string[], options: ts.CompilerOptions): void => {
  transpile(files, options)
}

export default build
