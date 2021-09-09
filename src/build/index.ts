import { generateBuildDir } from "./manage-build-dir.js"
import transpile from "./transpile.js"
import glob from "fast-glob"
import { distDir, outDir, pagesDir } from "./config.js"
import { join, dirname } from "node:path"

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

  await Promise.all(
    // transpiling loop
    files.map((file) => {
      const path = join(outDir, replaceExt(file, ".js"))
      return transpile(file, path)
    })
  )

  const pages = await glob(
    matchExts.map((ext) => `**/*${ext}`),
    {
      dot: false,
      cwd: join(cwd(), pagesDir),
    }
  )

  const built = (
    await Promise.all(
      // rendering loop
      pages.map(async (page) => {
        const pageFn = await import(
          join(cwd(), outDir, pagesDir, replaceExt(page, ".js"))
        )
        if (typeof pageFn.default === "function") {
          const path = join(distDir, replaceExt(page, ".html"))
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
