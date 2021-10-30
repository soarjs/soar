import { Document } from "linkedom"
import { Element } from "./jsx.js"

type DefaultProps = {
  children?: Element[] | Element | string
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

const jsx = (type: string, props: DefaultProps): Element => {
  return {
    type,
    props,
  }
}

const render = (element: Element, document: Document): string => {
  const _render = (type: string, props: DefaultProps, parent: HTMLElement) => {
    const el = document.createElement(type)

    Object.entries(props)
      .filter((prop) => prop[0] !== "children")
      .forEach((prop) => el.setAttribute(...prop))

    if (props.children) {
      if (Array.isArray(props.children)) {
        for (const child of props.children) {
          console.log(child)
          if (typeof child === "string") {
            const text = document.createTextNode(child)
            el.appendChild(text)
          } else if (typeof child.type === "string") {
            _render(child.type, child.props, el)
          } else {
            const text = document.createTextNode(child.toString())
            el.appendChild(text)
          }
        }
        // el.textContent = props.children.toString()
      } else {
        if (typeof props.children === "string") {
          const text = document.createTextNode(props.children)
          el.appendChild(text)
        } else {
          _render(props.children.type, props.children.props, el)
        }
      }
    }

    parent.append(el)
  }

  _render(element.type, element.props, document.body)

  return document.toString()
}

export * as JSX from "./jsx.js"
export { jsx, render }
