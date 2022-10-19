import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  externals: [
    'vue-select'
  ],
  outDir: 'dist',
  rollup: {
    commonjs: {
      include: /node_modules/
    }
  },
  hooks: {
    async 'build:before'({ options }) {
      options.entries = options.entries.filter(e => e.builder === 'rollup');
      options.externals.push('scule', 'serialize-javascript');
    }
  }
});
