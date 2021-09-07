import { generateBuildDir } from "./manage-build-dir.js"
import transpile from "./transpile.js"
import { outDir, pagesDir } from "./config.js"
import { readdir } from "node:fs/promises"
import path, { extname } from "node:path"

const build = async (): Promise<void> => {
  const pages = await readdir(pagesDir)

  await generateBuildDir()

  Promise.all(
    pages
      .filter((page) => [".ts", ".tsx", ".js", ".jsx"].includes(extname(page)))
      .map((page) =>
        transpile(
          path.join(pagesDir, page),
          path.join(outDir, `${path.basename(page, path.extname(page))}.js`)
        )
      )
  )
}

export default build
