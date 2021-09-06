// Transpilation pipeline

import swc from "@swc/core"
import { writeFile } from "node:fs/promises"

const transpile = async (filename: string): Promise<void> => {
  const transformed = await swc.transformFile(filename, {
    jsc: {
      parser: {
        syntax: "typescript",
        tsx: true,
      },
      transform: {
        react: {
          runtime: "automatic",
          importSource: "soar",
        },
      },
    },
  })

  const outputFilename = filename.replace(/\.(ts|tsx)$/i, ".js")

  await writeFile(outputFilename, transformed.code)
}

export default transpile
