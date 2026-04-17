# A bun lit demo with localization

modified from **deno** demo with **packup**
[deno.lit-and-mw3.demo](https://github.com/mindon/deno.lit-and-mw3.demo)

## how to localize with lit-localize?

bun from <https://bun.sh> is required.

`bun i` to use lit-localize tool to extract i18n msg and build l10n msg
`export PATH=./node_modules/.bin/:$PATH`

add localize imports
`grep -l 'locales.ts' src/**/*.ts -exec sed -i '' 's$locales.ts[\'"];$\0import {msg,src,localized} from "@lit/localize";' {} \;`

`lit-localize extract` to extract i18n messages into **xliff/**. after updating
**xliff/*.xlf**, run `lit-localize build` to generate l10n messages in
**src/locales/**.

**post process**

remove localize imports
`grep -l 'locales.ts' src/**/*.ts -exec sed -i '' 's$import {msg,src,localized} from "@lit/localize";$$' {} \;`

**src/locales.ts** loads relative locale ts, and providing
**window.setLocale(id)**, **window.getLocale()** and **window.locales**.

## how to build with biu?
biu is a zero-config, high-performance bundler for HTML files with TypeScript/JavaScript, powered by [Bun](https://bun.sh/).

<https://github.com/mindon/biu>

`biu` to build production dist/

⚠️ if failed, run `bun i` and retry.
