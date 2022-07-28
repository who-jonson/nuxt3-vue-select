import type { App } from 'vue';
import type { VueSelectConstructor } from 'vue-select';

export interface ModuleOptions {
  component?: {
    /*
    * @default `VSelect`
    **/
    as?: string;

    /*
    * @default `true`
    **/
    globalRegister?: boolean;

    /*
    * @default `true`
    **/
    includeCss?: true

  } | false;

  extend?: (vSelect: VueSelectConstructor, vueApp: App) => void | PromiseLike<void>
}
