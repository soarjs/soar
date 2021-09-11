import { jsx } from "./jsx-runtime"

test("jsx rendering", () => {
  expect(jsx("tag", { children: "int" })).toEqual("<tag>int</tag>")
})
