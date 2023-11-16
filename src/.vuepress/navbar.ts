import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  "/posts/",
  {
    text: "推荐",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
        /* {
            text: "苹果",
            icon: "pen-to-square",
            prefix: "apple/",
            children: [
            { text: "苹果1", icon: "pen-to-square", link: "1" },
            { text: "苹果2", icon: "pen-to-square", link: "2" },
            "3",
            "4",
            ],
        }, */
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
