type DefaultProps = {
  children?: string | string[]
  [property: string]: any
}

const renderProps = (props: DefaultProps) =>
  Object.entries(props)
    .filter((prop) => prop[0] !== "children")
    .map((prop) => ` ${prop[0]}="${prop[1]}"`)
    .join("")

const jsx = (t: string, o: DefaultProps): string => {
  if (typeof o.children === "string") {
    return `<${t}${renderProps(o)}>${o.children}</${t}>`
  } else if (Array.isArray(o.children)) {
    return `<${t}${renderProps(o)}>${o.children.join("\n")}</${t}>`
  } else return `<${t}${renderProps(o)}></${t}>`
}

export * as JSX from "./jsx.js"
export { jsx }
