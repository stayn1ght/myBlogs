import{_ as g,r as i,o as h,c as b,a as n,d as f,b as a,e,f as p,w as o}from"./app-0c32d0df.js";const w={},y={href:"https://theme-hope.vuejs.press/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://theme-hope.vuejs.press/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},x={class:"hint-container info"},j={href:"https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},D={href:"https://theme-hope.vuejs.press/basic/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://md-enhance.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://theme-hope.vuejs.press/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://theme-hope.vuejs.press/guide/markdown/tabs.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://theme-hope.vuejs.press/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://theme-hope.vuejs.press/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://theme-hope.vuejs.press/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://theme-hope.vuejs.press/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://theme-hope.vuejs.press/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://theme-hope.vuejs.press/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},K={href:"https://theme-hope.vuejs.press/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://theme-hope.vuejs.press/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://theme-hope.vuejs.press/guide/markdown/component.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://theme-hope.vuejs.press/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://theme-hope.vuejs.press/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://theme-hope.vuejs.press/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://theme-hope.vuejs.press/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},$={href:"https://theme-hope.vuejs.press/guide/markdown/chartjs.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://theme-hope.vuejs.press/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://theme-hope.vuejs.press/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://theme-hope.vuejs.press/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},U={href:"https://theme-hope.vuejs.press/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},G={href:"https://theme-hope.vuejs.press/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://mister-hope.com",target:"_blank",rel:"noopener noreferrer"},X={href:"https://theme-hope.vuejs.press/guide/markdown/revealjs.html",target:"_blank",rel:"noopener noreferrer"};function Z(_,s){const t=i("ExternalLinkIcon"),d=i("Tabs"),c=i("CodeTabs"),u=i("RouterLink"),k=i("CodeDemo"),m=i("Badge"),v=i("Playground");return h(),b("div",null,[s[70]||(s[70]=n("p",null,"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.",-1)),s[71]||(s[71]=n("p",null,"You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.",-1)),f(" more "),s[72]||(s[72]=n("h2",{id:"markdown-introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-introduction","aria-hidden":"true"},"#"),a(" Markdown Introduction")],-1)),n("p",null,[s[2]||(s[2]=a("If you are a new learner and don't know how to write Markdown, please read ")),n("a",y,[s[0]||(s[0]=a("Markdown Intro")),e(t)]),s[3]||(s[3]=a(" and ")),n("a",q,[s[1]||(s[1]=a("Markdown Demo")),e(t)]),s[4]||(s[4]=a("."))]),s[73]||(s[73]=n("h2",{id:"markdown-config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-config","aria-hidden":"true"},"#"),a(" Markdown Config")],-1)),s[74]||(s[74]=n("p",null,"VuePress introduce configuration for each markdown page using Frontmatter.",-1)),n("div",x,[s[8]||(s[8]=n("p",{class:"hint-container-title"},"相关信息",-1)),n("p",null,[s[6]||(s[6]=a("Frontmatter is a important concept in VuePress. If you don't know it, you need to read ")),n("a",j,[s[5]||(s[5]=a("Frontmatter Introduction")),e(t)]),s[7]||(s[7]=a("."))])]),s[75]||(s[75]=n("h2",{id:"markdown-extension",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-extension","aria-hidden":"true"},"#"),a(" Markdown Extension")],-1)),n("p",null,[s[11]||(s[11]=a("The Markdown content in VuePress will be parsed by ")),n("a",A,[s[9]||(s[9]=a("markdown-it")),e(t)]),s[12]||(s[12]=a(", which supports ")),n("a",V,[s[10]||(s[10]=a("syntax extensions")),e(t)]),s[13]||(s[13]=a(" via markdown-it plugins."))]),s[76]||(s[76]=n("h3",{id:"vuepress-enhancement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-enhancement","aria-hidden":"true"},"#"),a(" VuePress Enhancement")],-1)),s[77]||(s[77]=n("p",null,"To enrich document writing, VuePress has extended Markdown syntax.",-1)),n("p",null,[s[15]||(s[15]=a("For these extensions, please read ")),n("a",D,[s[14]||(s[14]=a("Markdown extensions in VuePress")),e(t)]),s[16]||(s[16]=a("."))]),s[78]||(s[78]=n("h3",{id:"theme-enhancement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-enhancement","aria-hidden":"true"},"#"),a(" Theme Enhancement")],-1)),n("p",null,[s[18]||(s[18]=a("By using ")),n("a",C,[s[17]||(s[17]=n("code",null,"vuepress-plugin-md-enhance",-1)),e(t)]),s[19]||(s[19]=a(", the theme extends more Markdown syntax and provides richer writing functions."))]),s[79]||(s[79]=p(`<h4 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="hint-container info"><p class="hint-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#custom-container">link</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">Custom Title</p><p>A custom tip container</p></div><div class="hint-container warning"><p class="hint-container-title">Custom Title</p><p>A custom warning container</p></div><div class="hint-container danger"><p class="hint-container-title">Custom Title</p><p>A custom danger container</p></div><details class="hint-container details"><summary>Custom Title</summary><p>A custom details container</p></details>`,7)),n("ul",null,[n("li",null,[n("a",T,[s[20]||(s[20]=a("View Detail")),e(t)])])]),s[80]||(s[80]=n("h4",{id:"tabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tabs","aria-hidden":"true"},"#"),a(" Tabs")],-1)),e(d,{id:"89",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:o(({value:l,isActive:r})=>s[21]||(s[21]=[a("apple")])),title1:o(({value:l,isActive:r})=>s[22]||(s[22]=[a("banana")])),title2:o(({value:l,isActive:r})=>s[23]||(s[23]=[a("orange")])),tab0:o(({value:l,isActive:r})=>s[24]||(s[24]=[n("p",null,"Apple",-1)])),tab1:o(({value:l,isActive:r})=>s[25]||(s[25]=[n("p",null,"Banana",-1)])),tab2:o(({value:l,isActive:r})=>s[26]||(s[26]=[n("p",null,"Orange",-1)])),_:1}),n("ul",null,[n("li",null,[n("a",M,[s[27]||(s[27]=a("View Detail")),e(t)])])]),s[81]||(s[81]=n("h4",{id:"code-tabs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code-tabs","aria-hidden":"true"},"#"),a(" Code Tabs")],-1)),e(c,{id:"116",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:o(({value:l,isActive:r})=>s[28]||(s[28]=[a("pnpm")])),title1:o(({value:l,isActive:r})=>s[29]||(s[29]=[a("yarn")])),title2:o(({value:l,isActive:r})=>s[30]||(s[30]=[a("npm")])),tab0:o(({value:l,isActive:r})=>s[31]||(s[31]=[n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1)])),tab1:o(({value:l,isActive:r})=>s[32]||(s[32]=[n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1)])),tab2:o(({value:l,isActive:r})=>s[33]||(s[33]=[n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(" i "),n("span",{class:"token parameter variable"},"-D"),a(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1)])),_:1}),n("ul",null,[n("li",null,[n("a",P,[s[34]||(s[34]=a("View Detail")),e(t)])])]),s[82]||(s[82]=n("h4",{id:"superscript-and-subscript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#superscript-and-subscript","aria-hidden":"true"},"#"),a(" Superscript and Subscript")],-1)),s[83]||(s[83]=n("p",null,[a("19"),n("sup",null,"th"),a(" H"),n("sub",null,"2"),a("O")],-1)),n("ul",null,[n("li",null,[n("a",I,[s[35]||(s[35]=a("View Detail")),e(t)])])]),s[84]||(s[84]=n("h4",{id:"align",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),a(" Align")],-1)),s[85]||(s[85]=n("div",{style:{"text-align":"center"}},[n("p",null,"I am center")],-1)),s[86]||(s[86]=n("div",{style:{"text-align":"right"}},[n("p",null,"I am right align")],-1)),n("ul",null,[n("li",null,[n("a",S,[s[36]||(s[36]=a("View Detail")),e(t)])])]),s[87]||(s[87]=n("h4",{id:"attrs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),a(" Attrs")],-1)),s[88]||(s[88]=n("p",null,[a("A "),n("strong",{id:"word"},"word"),a(" having id.")],-1)),n("ul",null,[n("li",null,[n("a",E,[s[37]||(s[37]=a("View Detail")),e(t)])])]),s[89]||(s[89]=n("h4",{id:"footnote",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#footnote","aria-hidden":"true"},"#"),a(" Footnote")],-1)),s[90]||(s[90]=n("p",null,"This text has footnote[^first].",-1)),s[91]||(s[91]=n("p",null,"[^first]: This is footnote content",-1)),n("ul",null,[n("li",null,[n("a",F,[s[38]||(s[38]=a("View Detail")),e(t)])])]),s[92]||(s[92]=n("h4",{id:"mark",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#"),a(" Mark")],-1)),s[93]||(s[93]=n("p",null,[a("You can mark "),n("mark",null,"important words"),a(" .")],-1)),n("ul",null,[n("li",null,[n("a",B,[s[39]||(s[39]=a("View Detail")),e(t)])])]),s[94]||(s[94]=n("h4",{id:"tasklist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tasklist","aria-hidden":"true"},"#"),a(" Tasklist")],-1)),n("ul",null,[s[41]||(s[41]=n("li",null,[n("p",null,"[x] Plan A")],-1)),s[42]||(s[42]=n("li",null,[n("p",null,"[ ] Plan B")],-1)),n("li",null,[n("p",null,[n("a",K,[s[40]||(s[40]=a("View Detail")),e(t)])])])]),s[95]||(s[95]=n("h4",{id:"image-enhancement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#image-enhancement","aria-hidden":"true"},"#"),a(" Image Enhancement")],-1)),s[96]||(s[96]=n("p",null,"Support setting color scheme and size",-1)),n("ul",null,[n("li",null,[n("a",L,[s[43]||(s[43]=a("View Detail")),e(t)])])]),s[97]||(s[97]=p(`<h4 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h4><div class="language-component line-numbers-mode" data-ext="component"><pre class="language-component"><code>title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
color: rgba(253, 230, 138, 0.15)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("ul",null,[n("li",null,[n("a",Y,[s[44]||(s[44]=a("View Detail")),e(t)])])]),s[98]||(s[98]=n("h4",{id:"include-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#include-files","aria-hidden":"true"},"#"),a(" Include files")],-1)),n("ul",null,[n("li",null,[n("p",null,[e(u,{to:"/demo/markdown.html"},{default:o(()=>s[45]||(s[45]=[a("Markdown Enhance")])),_:1})])]),n("li",null,[n("p",null,[e(u,{to:"/demo/page.html"},{default:o(()=>s[46]||(s[46]=[a("Page Config")])),_:1})])]),n("li",null,[n("p",null,[e(u,{to:"/demo/disable.html"},{default:o(()=>s[47]||(s[47]=[a("Function Disable")])),_:1})])]),n("li",null,[n("p",null,[e(u,{to:"/demo/encrypt.html"},{default:o(()=>s[48]||(s[48]=[a("Encryption Demo")])),_:1})])])]),n("ul",null,[n("li",null,[n("a",H,[s[49]||(s[49]=a("View Detail")),e(t)])])]),s[99]||(s[99]=n("h4",{id:"code-demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code-demo","aria-hidden":"true"},"#"),a(" Code Demo")],-1)),e(k,{id:"code-demo-290",type:"normal",title:"A%20normal%20demo",code:"eJxFjjELAjEMhf9KjIuCeLhq7SYoOAiKU5ejjdxpr61tTxHxv5ueg0sCed97L29scmdxiaJZyHNPh0gpwamhjmDrA4mK78qJIHcJRAq1g9asFT4ovhTKskRVzhKCf1K89HYkqsAWnOE1cbDxuu/I5fm9Z/hIlnT2caJw/MuYzmtjNg8m9m3K5Kho2rb6pnAGkymsJbyVA6gtxczamW3/Mg5YKfcpgxt1KpXDm4NHe+vjEiKZAjHy+QJaqVDL"},{default:o(()=>s[50]||(s[50]=[n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h1")]),n("span",{class:"token punctuation"},">")]),a("VuePress Theme Hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h1")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("Is "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("very"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("very"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(" powerful!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#very"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Very powerful!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"span"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),n("ul",null,[n("li",null,[n("a",z,[s[51]||(s[51]=a("View Detail")),e(t)])])]),s[100]||(s[100]=n("h4",{id:"stylize",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stylize","aria-hidden":"true"},"#"),a(" Stylize")],-1)),n("p",null,[s[53]||(s[53]=a("Donate Mr.Hope a cup of coffee. ")),e(m,{type:"tip"},{default:o(()=>s[52]||(s[52]=[a("Recommended")])),_:1})]),n("ul",null,[n("li",null,[n("a",J,[s[54]||(s[54]=a("View Detail")),e(t)])])]),s[101]||(s[101]=n("h4",{id:"playground",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playground","aria-hidden":"true"},"#"),a(" Playground")],-1)),e(v,{key:"8f239a40",title:"TS%20demo",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),n("ul",null,[n("li",null,[n("a",N,[s[55]||(s[55]=a("View Detail")),e(t)])])]),s[102]||(s[102]=p(`<h4 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h4><p>::: chart A Scatter Chart</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Scatter Dataset&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4)),n("ul",null,[n("li",null,[n("a",$,[s[56]||(s[56]=a("View Detail")),e(t)])])]),s[103]||(s[103]=p(`<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4><p>::: echarts A line chart</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4)),n("ul",null,[n("li",null,[n("a",R,[s[57]||(s[57]=a("View Detail")),e(t)])])]),s[104]||(s[104]=p(`<h4 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> Flowchart</h4><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> Process<span class="token operator">?</span>
process<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> Process
e<span class="token operator">=&gt;</span>end<span class="token operator">:</span> End

<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>process<span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("ul",null,[n("li",null,[n("a",W,[s[58]||(s[58]=a("View Detail")),e(t)])])]),s[105]||(s[105]=p(`<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token arrow operator">---</span>
title<span class="token operator">:</span> Flowchart
<span class="token arrow operator">---</span>
<span class="token keyword">flowchart</span> TB
    c1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--&gt;</span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--&gt;</span>c2
    <span class="token keyword">end</span>
    one <span class="token arrow operator">--&gt;</span> two
    three <span class="token arrow operator">--&gt;</span> two
    two <span class="token arrow operator">--&gt;</span> c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("ul",null,[n("li",null,[n("a",O,[s[59]||(s[59]=a("View Detail")),e(t)])])]),s[106]||(s[106]=n("h4",{id:"tex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tex","aria-hidden":"true"},"#"),a(" Tex")],-1)),s[107]||(s[107]=n("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1)),n("ul",null,[n("li",null,[n("a",U,[s[60]||(s[60]=a("View Detail")),e(t)])])]),s[108]||(s[108]=n("h4",{id:"vue-playground",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-playground","aria-hidden":"true"},"#"),a(" Vue Playground")],-1)),s[109]||(s[109]=n("p",null,"::: vue-playground Vue Playground",-1)),n("template",null,[s[65]||(s[65]=p(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,2)),n("ul",null,[n("li",null,[n("a",G,[s[61]||(s[61]=a("View Detail")),e(t)])])]),s[66]||(s[66]=n("h4",{id:"presentation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#presentation","aria-hidden":"true"},"#"),a(" Presentation")],-1)),s[67]||(s[67]=n("p",null,"@slidestart",-1)),s[68]||(s[68]=n("h2",{id:"slide-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#slide-1","aria-hidden":"true"},"#"),a(" Slide 1")],-1)),n("p",null,[s[63]||(s[63]=a("A paragraph with some text and a ")),n("a",Q,[s[62]||(s[62]=a("link")),e(t)])]),s[69]||(s[69]=p(`<hr><h2 id="slide-2" tabindex="-1"><a class="header-anchor" href="#slide-2" aria-hidden="true">#</a> Slide 2</h2><ul><li>Item 1</li><li>Item 2</li></ul><hr><h2 id="slide-3-1" tabindex="-1"><a class="header-anchor" href="#slide-3-1" aria-hidden="true">#</a> Slide 3.1</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p><h2 id="slide-3-2" tabindex="-1"><a class="header-anchor" href="#slide-3-2" aria-hidden="true">#</a> Slide 3.2</h2><p>$$ J(\\theta_0,\\theta_1) = \\sum_{i=0} $$</p><p>@slideend</p>`,10)),n("ul",null,[n("li",null,[n("a",X,[s[64]||(s[64]=a("View Detail")),e(t)])])])])])}const sn=g(w,[["render",Z],["__file","markdown.html.vue"]]);export{sn as default};