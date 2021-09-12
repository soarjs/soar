type DefaultProps = {
  children?: string | string[]
  [property: string]: any
}

const voidElements = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]

const renderProps = (props: DefaultProps) =>
  Object.entries(props)
    .filter((prop) => prop[0] !== "children")
    .map((prop) => ` ${prop[0]}="${prop[1]}"`)
    .join("")

const jsx = (t: string, o: DefaultProps): string => {
  if (voidElements.includes(t)) {
    return `<${t}${renderProps(o)} />`
  }

  if (Array.isArray(o.children)) {
    return `<${t}${renderProps(o)}>${o.children.join("")}</${t}>`
  } else if (typeof o.children?.toString() === "string") {
    return `<${t}${renderProps(o)}>${o.children}</${t}>`
  } else return `<${t}${renderProps(o)}></${t}>`
}

export * as JSX from "./jsx.js"
export { jsx }
