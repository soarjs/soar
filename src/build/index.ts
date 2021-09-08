import { generateBuildDir } from "./manage-build-dir.js"
import transpile from "./transpile.js"
import glob from "fast-glob"
import { outDir } from "./config.js"
import { join, extname } from "node:path"

import { replaceExt } from "./utils.js"

const build = async (): Promise<void> => {
  await generateBuildDir()
  const matchExts = [".ts", ".tsx", ".js", ".jsx"]

  const files = await glob(
    matchExts.map((ext) => `**/*${ext})|`, {
      dot: false,
      ignore: ["node_modules/**/*", ".soar/**/*"],
    })
  )

  Promise.all(
    files
      .filter((file) => matchExts.includes(extname(file)))
      .map((file) => transpile(file, join(outDir, replaceExt(file, ".js"))))
  )
}

export default build
