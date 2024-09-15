import { sidebar } from "vuepress-theme-hope";
// 从外部引入代码块
import  code  from "./sidebar/code";

export default sidebar({
    "/": [
        // 这一块暂时没用
        "",
        {
            text: "如何使用",
            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        },
    ],
    "/code/": [
        "",
        {
            text: "代码",
            icon: "code",
            children: [
                {
                    text: "统计学方法",
                    icon: "laptop-code",
                    // prefix: "demo/",
                    link: "statistics/",   
                },
                {
                    text: "ECharts 数据可视化",
                    icon: "laptop-code",
                    // prefix: "demo/",
                    link: "echarts/",   
                },
            ],
        },
        
    ],
    "/posts/": [
        "",
        {
            text: "文章",
            icon: "book",
            // prefix: "posts/",
            children: "structure",
        },
    ],
    ...code,
});
