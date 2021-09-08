import { join, dirname, basename, extname } from "node:path"

const replaceExt = (path: string, ext: `.${string}`): string =>
  join(dirname(path), `${basename(path, extname(path))}${ext}`)

export { replaceExt }
