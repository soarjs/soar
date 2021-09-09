import { generateBuildDir } from "./manage-build-dir.js"
import transpile from "./transpile.js"
import glob from "fast-glob"
import { distDir, outDir } from "./config.js"
import { join, extname, dirname } from "node:path"

import { replaceExt } from "./utils.js"
import { cwd } from "node:process"
import { mkdir, writeFile } from "node:fs/promises"

const build = async (): Promise<void> => {
  await generateBuildDir()
  const matchExts = [".ts", ".tsx", ".js", ".jsx"]

  const files = await glob(
    matchExts.map((ext) => `**/*${ext}`),
    {
      dot: false,
      ignore: ["node_modules/**/*", ".soar/**/*"],
    }
  )

  const transpiled = await Promise.all(
    // transpiling loop
    files
      .filter((file) => matchExts.includes(extname(file)))
      .map((file) => {
        const path = join(outDir, replaceExt(file, ".js"))
        transpile(file, path)
        return path
      })
  )

  const built = (
    await Promise.all(
      // rendering loop
      transpiled.map(async (file) => {
        const pageFn = await import(join(cwd(), file))
        if (typeof pageFn.default === "function") {
          const path = join(distDir, replaceExt(file, ".html"))
          await mkdir(dirname(path), { recursive: true })
          await writeFile(path, pageFn.default())
          return path
        }
      })
    )
  ).filter((file): file is string => !!file)

  console.log(`Built ${built.length} files.`)
}

export default build
