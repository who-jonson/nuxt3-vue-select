import {
  createResolver,
  defineNuxtModule,
  addPluginTemplate,
  addComponent,
  resolveModule
} from '@nuxt/kit';
import serialize from 'serialize-javascript';
import { pascalCase, kebabCase } from 'scule';
import { name, version } from '../package.json';
import type { VueSelectModuleOptions } from './options';

export default defineNuxtModule<VueSelectModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'vSelect',
    compatibility: {
      nuxt: '>=3.0.0-rc.6'
    }
  },
  defaults: {
    component: {
      as: 'VSelect',
      globalRegister: true,
      includeCss: true
    }
  },
  async setup({ component, extend }, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const componentPath = resolveModule('vue-select/src/components/Select.vue', { paths: resolve(nuxt.options.modulesDir) });

    if (component && componentPath) {
      await addComponent({
        name: pascalCase(component.as),
        pascalName: pascalCase(component.as),
        kebabName: kebabCase(component.as),
        filePath: componentPath,
        mode: nuxt.options.ssr ? 'all' : 'client'
      });

      if (component.includeCss && !component.globalRegister) {
        nuxt.options.css = nuxt.options.css || [];
        nuxt.options.css.push('vue-select/dist/vue-select.css');
      }

      if (component.globalRegister) {
        addPluginTemplate({
          filename: 'nuxt3-vue-select.mjs',
          getContents() {
            const content = [
              `import VSelect from 'vue-select';`,
              `import { defineNuxtPlugin } from '#app';`,
              component.includeCss ? `import 'vue-select/dist/vue-select.css';` : '',
              '',
              `export default defineNuxtPlugin(async({ vueApp }) => {`
            ];

            if (typeof extend === 'function') {
              content.push(
                `  await (${serialize(extend)})(VSelect, vueApp);`
              );
            }

            content.push(
              '',
              `  vueApp.component('${pascalCase(component.as)}', VSelect);`,
              `});`
            );
            return content.join('\n');
          }
        });
      }
    }
  }
});

export * from 'vue-select';

export type { VueSelectModuleOptions };
