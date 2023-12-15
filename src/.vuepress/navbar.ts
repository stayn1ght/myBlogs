import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/code/",
  "/posts/",
  {
    text: "推荐",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
        {
            text: "fungi",
            icon: "pen-to-square",
            prefix: "fungi/",
            children: [
                { text: "ICI", icon: "pen-to-square", link: "ICIpredictionCellHost" },
            ],
        }
    ],
  },
  /* {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  }, */
]);
