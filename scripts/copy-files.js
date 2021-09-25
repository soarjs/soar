import { mkdir, readdir, lstat, copyFile } from "node:fs/promises"
import { join } from "node:path"

const files = [{ from: "src/init/template", to: "lib/init/template" }]

const cp = async (src, dest) => {
  mkdir(dest, { recursive: true })
  for (const file of await readdir(src)) {
    if ((await lstat(join(src, file))).isFile()) {
      copyFile(join(src, file), join(dest, file))
    } else {
      await cp(join(src, file), join(dest, file))
    }
  }
}

const copyFiles = async () => {
  await Promise.all(
    files.map((file) => {
      cp(file.from, file.to)
    })
  )
}

await copyFiles()
