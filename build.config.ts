import { promises as fs, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineBuildConfig } from 'unbuild';

const rootDir = fileURLToPath(new URL('./', import.meta.url));

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    'src/options'
  ],
  outDir: 'dist',
  rollup: {
    esbuild: {
      treeShaking: true
    }
  },
  hooks: {
    async 'build:before'({ options }) {
      options.entries = options.entries.filter(e => e.builder === 'rollup');
      options.externals.push('scule', 'serialize-javascript');
    },
    async 'rollup:done'() {
      const filePath = resolve(rootDir, 'dist/types.d.ts');
      if (existsSync(filePath)) {
        const types = `export { ModuleOptions, NuxtAxiosInstance } from './module';

declare module 'axios' {
  interface AxiosRequestConfig {
    progress?: boolean;
  }
}

declare module '@nuxt/schema' {
  interface NuxtApp {
    $axios: NuxtAxiosInstance;
  }
  interface NuxtConfig {
    axios?: Partial<ModuleOptions>;
  }
  interface NuxtOptions {
    axios?: ModuleOptions;
  }
}

declare module '#app' {
  interface NuxtApp {
    $axios: NuxtAxiosInstance;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: NuxtAxiosInstance;
  }
}

export { default } from './module';
        `;
        await fs.writeFile(filePath, types, 'utf8');
      }
    }
  }
});
