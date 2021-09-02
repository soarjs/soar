import ts from "typescript"
import build from "./build/index.js"

build(process.argv.slice(2), {
  noEmitOnError: true,
  noImplicitAny: true,
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  jsx: ts.JsxEmit.ReactJSX,
  jsxImportSource: "soar",
  strict: false,
  allowJs: true,
  types: ["soar"],
})
