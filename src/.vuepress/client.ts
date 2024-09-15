import { defineClientConfig } from '@vuepress/client'
// import Layout from "./layouts/Layout.vue";
import myHomePage from './layouts/myHomePage.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},  
  layouts: {
    myHomePage
  },
  rootComponents: [],
})