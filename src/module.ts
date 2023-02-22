import { addComponent, defineNuxtModule } from '@nuxt/kit';
import { kebabCase, pascalCase } from 'scule';
import { name, version } from '../package.json';
import type { ModuleOptions } from './options';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'vSelect',
    compatibility: {
      nuxt: '>=2.16'
    }
  },

  defaults: {
    component: {
      as: 'VSelect',
      globalRegister: true,
      includeCss: true
    }
  },

  async setup({ component }, nuxt) {
    nuxt.options.build.transpile.push('vue-select');

    if (component) {
      await addComponent({
        name: pascalCase(component.as!),
        pascalName: pascalCase(component.as!),
        kebabName: kebabCase(component.as!),
        chunkName: 'whoj__nuxt3-vue-select',
        export: 'VueSelect',
        filePath: 'vue-select',
        global: component.globalRegister
      });

      if (component.includeCss) {
        nuxt.options.css = nuxt.options.css || [];
        nuxt.options.css.push('vue-select/dist/vue-select.css');
      }
    }
  }
});

export type { ModuleOptions };
