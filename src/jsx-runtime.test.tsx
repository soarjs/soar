describe("jsx rendering", () => {
  test("single child", () => {
    expect(<span>child</span>).toEqual("<span>child</span>")
  })

  test("number child", () => {
    expect(<span>{1 + 1}</span>).toEqual("<span>2</span>")
  })

  test("null child", () => {
    expect(<span>{null}</span>).toEqual("<span></span>")
  })

  test("nested children", () => {
    expect(
      <div>
        <span>child</span>
      </div>
    ).toEqual("<div><span>child</span></div>")
  })

  test("sibling children", () => {
    expect(
      <div>
        <span>child 1</span>
        <span>child 2</span>
      </div>
    ).toEqual("<div><span>child 1</span><span>child 2</span></div>")
  })

  test("single property", () => {
    expect(<span class="class">child</span>).toEqual(
      `<span class="class">child</span>`
    )
  })

  test("multiple properties", () => {
    expect(
      <span class="class" id="id">
        child
      </span>
    ).toEqual(`<span class="class" id="id">child</span>`)
  })
})

export {}
