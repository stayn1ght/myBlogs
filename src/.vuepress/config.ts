import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/myBlogs/",

  lang: "zh-CN",
  title: "世界皆舞台",
  description: "StayNight 的个人博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  
  alias: {
    "@HomePage": path.resolve(__dirname, "components/HomePage.vue"),
    "@bgImage": path.resolve(__dirname, "components/bgImage.vue"),
  },
});
