import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  externals: [
    'vue',
    'scule',
    'vue-demi',
    'vue-select'
  ],
  outDir: 'dist',
  rollup: {
    emitCJS: false,
    cjsBridge: true,
    commonjs: {
      include: /node_modules/
    },
    esbuild: {
      treeShaking: true
    }
  },
  hooks: {
    async 'build:before'({ options }) {
      options.entries = options.entries.filter(e => e.builder === 'rollup');
      options.externals.push('scule', 'serialize-javascript');
    }
  }
});
