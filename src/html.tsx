const html = (body?: string, head?: string): string =>
  `<!DOCTYPE html> ${(
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Soar" />
        {head}
      </head>
      <body>{body}</body>
    </html>
  )}
`

export default html
