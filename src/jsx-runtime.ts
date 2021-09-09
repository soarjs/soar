type DefaultProps = {
  children?: string | string[]
}

const jsx = (t: string, o: string | DefaultProps): string => {
  if (typeof o === "string") {
    return `<${t}>${o}</${t}>`
  }

  if (typeof o.children === "string") {
    return `<${t}>${o.children}</${t}>`
  }

  if (Array.isArray(o.children)) {
    return `<${t}>${o.children.join("")}</${t}>`
  }

  return `<${t}>${o}</${t}>`
}

export { jsx }
