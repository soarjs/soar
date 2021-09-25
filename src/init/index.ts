import { mkdir, readdir, writeFile, lstat, copyFile } from "node:fs/promises"
import { spawn } from "node:child_process"
import { basename, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const init = async (dir: string): Promise<void> => {
  await install(dir)
}

const cp = async (src: string, dest: string) => {
  mkdir(dest, { recursive: true })
  for (const file of await readdir(src)) {
    if ((await lstat(join(src, file))).isFile()) {
      copyFile(join(src, file), join(dest, file))
    } else {
      await cp(join(src, file), join(dest, file))
    }
  }
}

const install = async (dir: string) => {
  console.log(`Beginning Soar initialization into ${dir}`)

  const packageJson = {
    name: basename(dir),
    version: "0.1.0",
    scripts: {
      build: "soar build",
    },
  }

  const command = "npm"

  await mkdir(dir, { recursive: true })
  await writeFile(
    join(dir, "package.json"),
    JSON.stringify(packageJson, null, 2) + "\n"
  )

  const templateDir = resolve(fileURLToPath(import.meta.url), "../template")
  console.log(templateDir)

  await cp(templateDir, dir)

  const ls = spawn(command, ["install", "--save", dependencies.join(" ")], {
    cwd: dir,
  })
}

const dependencies = ["soar"]

export default init
