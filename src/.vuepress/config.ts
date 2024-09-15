import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/myBlogs/",

  lang: "zh-CN",
  title: "Ed è subito sera",
  description: "StayNight 的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  
  alias: {
    "@HomePage": path.resolve(__dirname, "components/HomePage.vue"),
    "@bgImage": path.resolve(__dirname, "components/bgImage.vue"),
  },
});
