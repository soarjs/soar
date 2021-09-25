<div align="center">

![soar](https://github.com/soarjs/soar/raw/main/banner.png)

# Soar

**Sensible static sites.** Power to the developer, speed to the user.

![npm](https://img.shields.io/npm/v/soar) ![weekly downloads](https://img.shields.io/npm/dw/soar)

</div>

A static site generator that builds JS-free static pages from JSX templates. All the power of modern web development without any of the bloat. _Unstable API, under active development._

- **Impossible to be slow.** Pages built with Soar have no client-side JS by default, allowing for unrivaled performance on any device and network.
- **Easy development with JSX.** Soar uses [JSX(TSX)](https://facebook.github.io/jsx/), allowing for ergonomic and reusable code. Enjoy editor support,external data, JS manipulations, and more. No more confusing templating languages.
- **Built on modern tooling.** Soar uses ES Modules, TypeScript, and other various modern technology. Pages are transpiled with [`swc`](https://github.com/swc-project/swc), allowing for near instant builds.

---

## Usage

### Initialize

#### Automatic

Automatically initializes a Soar project into `directory`.

```shell
# replace directory accordingly
$ npx soar init directory
```

#### Manual

Requires `{ "type": "module" }` in `package.json` and `node>=14.14.0`.

```shell
$ npm i soar
```

### Build pages

JSX/TSX page files must `export default` a functional component. Page files must be located in `/pages`.

```shell
$ soar build
# or
$ npx soar build
```

#### Example page file

```jsx
/* /pages/index.tsx */
export default () => (
  <div>
    <span>Hello world!</span>
    <span>{2 + 2}</span>
  </div>
)
```

## Roadmap

- **Phase 1: Basic implementation**
  - [x] Basic page building
  - [x] Basic JSX rendering
  - [ ] User configuration
  - [ ] GitHub Actions CI/CD
  - [ ] Full CLI
- **Phase 2: Production ready**
  - [ ] Project website
  - [ ] CSS support
  - [ ] JS support
  - [ ] Dev server
  - [ ] Plugin system
  - [ ] Markdown plugin
- **Phase 3: Fully featured**
  - [ ] Native ESM based HMR
  - [ ] CMS plugin
  - [ ] DOM manipulation API
  - [ ] Image optimization plugin
  - [ ] Netlify/Vercel/etc support
  - [ ] Serverless functions?
