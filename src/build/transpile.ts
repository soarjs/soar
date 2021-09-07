// Transpilation pipeline

import swc from "@swc/core"
import { mkdir, writeFile } from "node:fs/promises"
import { dirname } from "node:path"

const transpile = async (inPath: string, outPath: string): Promise<void> => {
  const transformed = await swc.transformFile(inPath, {
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

  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, transformed.code)
}

export default transpile
