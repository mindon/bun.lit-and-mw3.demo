# A bun lit demo with localization

modified from **deno** demo with **packup**
[deno.lit-and-mw3.demo](https://github.com/mindon/deno.lit-and-mw3.demo)

## how to localize with lit-localize?

bun from https://bun.sh is required.

`bun i` to use lit-localize tool to extract i18n msg and build l10n msg

add localize imports
`grep -l 'locales.ts' src/**/*.ts -exec sed -i '' 's$locales.ts[\'"];$\0import {msg,src,localized} from "@lit/localize";' {} \;`

`lit-localize extract` to extract i18n messages into **xliff/**. after updating
**xliff/*.xlf**, run `lit-localize build` to generate l10n messages in
**src/locales/**.

**post process**

remove localize imports
`grep -l 'locales.ts' src/**/*.ts -exec sed -i '' 's$import {msg,src,localized} from "@lit/localize";$$' {} \;`

update localize imports in **src/locales/*.ts**
`sed -i '' "s$'@lit/localize'$'https://cdn.skypack.dev/@lit/localize\?dts'$" src/locales/*.ts`

**src/locales.ts** loads relative locale ts, and providing
**window.setLocale(id)**, **window.getLocale()** and **window.locales**.

## how to build with bun?

**bun** from https://bun.sh is required.

the **build.ts** for bun is using **bun-plugin-html** from
<https://github.com/BjornTheProgrammer/bun-plugin-html>

`bun build.ts` to build production dist/

if failed, run `bun i` and retry.
