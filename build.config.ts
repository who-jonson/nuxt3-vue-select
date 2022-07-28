import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    // 'src/options'
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
    }
  }
});
