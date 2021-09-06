import transpile from "./transpile.js"

const build = async (file: string): Promise<void> => {
  await transpile(file)
}

export default build
