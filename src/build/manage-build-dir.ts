import { mkdir, rm } from "node:fs/promises"
import { buildDir } from "./config.js"

const generateBuildDir = async (): Promise<void> => {
  await mkdir(buildDir, { recursive: true })
}

const cleanBuildDir = async (): Promise<void> => {
  await rm(buildDir, { recursive: true, force: true })
}

export { generateBuildDir, cleanBuildDir }
