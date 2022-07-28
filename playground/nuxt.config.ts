import { defineNuxtConfig } from 'nuxt';
import VueSelectModule from '..';

export default defineNuxtConfig({
  modules: [
    VueSelectModule
  ],
  vSelect: {
    component: {
      as: 'VSelect'
    }
  }
});
