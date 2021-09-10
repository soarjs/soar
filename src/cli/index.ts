#!/usr/bin/env node

import { Command } from "commander"
import build from "../build/index.js"
import { createRequire } from "module"

const packageJson = createRequire(import.meta.url)("../../package.json")

const program = new Command().version(packageJson.version)

program
  .command("build")
  .alias("b")
  .description("Build static pages from JSX")
  .action(async () => {
    await build()
  })

program.parse(process.argv)
