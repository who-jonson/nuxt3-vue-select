import { defineNuxtConfig } from 'nuxt/config';
// import VueSelectModule from '..';

export default defineNuxtConfig({
  modules: [
    '@whoj/nuxt3-vue-select'
  ],
  vSelect: {
    component: {
      as: 'VSelect'
    }
  }
});
