import { jsx } from "./jsx-runtime"

test("jsx rendering", () => {
  expect(jsx("tag", "int")).toEqual("<tag>int</tag>")
})
