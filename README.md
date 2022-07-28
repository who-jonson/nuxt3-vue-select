# @whoj/nuxt3-vue-select

<p>
  <a href="https://www.npmjs.com/package/@whoj/nuxt3-vue-select">
    <img src="https://badgen.net/npm/v/@whoj/nuxt3-vue-select?icon=npm&color=green&label=" alt="Version">
  </a>
  <a href="#">
    <img src="https://badgen.net/npm/types/@whoj/nuxt3-vue-select?color=blue&icon=typescript&label=" alt="Typings">
  </a>
  <a href="https://github.com/who-jonson/nuxt3-vue-select">
    <img src="https://badgen.net/github/checks/node-formidable/node-formidable/master/macos?icon=github&label=" alt="Linting Status">
  </a>
  <a href="https://github.com/who-jonson/nuxt3-vue-select/blob/master/LICENSE">
    <img src="https://badgen.net/npm/license/@whoj/nuxt3-vue-select" alt="License">
  </a>
</p>


```bash
npm i @whoj/nuxt3-vue-select
```

### Install Module

```ts
// nuxt.config.ts
export default {
    modules: ['@whoj/nuxt3-vue-select']
}
```

### Options

```ts
// nuxt.config.ts
export default {
  // Defaults
  vSelect: {
    component: {
      as: 'VSelect',
      globalRegister: true,
      includeCss: true
    }
    // extend(vSelect, vueApp) => void | Promise<void>
  }
}
```



## License

[MIT](./LICENSE) License © 2022 [Jonson B.](https://github.com/who-jonson)
