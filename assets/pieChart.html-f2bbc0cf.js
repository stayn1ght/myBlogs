import{_ as i,r as s,o as l,c as d,a as n,b as v,e as a,f as r}from"./app-8e2ab96a.js";const c={},u={href:"https://echarts.apache.org/examples/zh/editor.html?c=data-transform-multiple-pie",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre class="language-Javascript"><code>option = {
  dataset: [
    {
      source: [
        [&#39;species&#39;, &#39;T1&#39;, &#39;T2&#39;, &#39;T3&#39;],
[&quot;s__Enterobacter_cloacae&quot;,0.0,0.08887863,0.0],
[&quot;s__Klebsiella_pneumoniae&quot;,0.0,0.04006628,0.27253253],
[&quot;other&quot;,0.0,0.0,0.0],
[&quot;unclassified&quot;,1.0,0.87105509,0.72746747],
      ]
    },

  ],
   title: [
    {
      text: &#39;PWY-6731: starch degradation III&#39;,
      left: &#39;center&#39;,
      top: &#39;25%&#39;
    },
    {
      subtext: &#39;T1&#39;,
      left: &#39;25%&#39;,
      top: &#39;75%&#39;,
      textAlign: &#39;center&#39;
    },
    {
      subtext: &#39;T2&#39;,
      left: &#39;50%&#39;,
      top: &#39;75%&#39;,
      textAlign: &#39;center&#39;
    },
    {
      subtext: &#39;T3&#39;,
      left: &#39;75%&#39;,
      top: &#39;75%&#39;,
      textAlign: &#39;center&#39;
    }
  ],
  series: [
    {
      type: &#39;pie&#39;,
      radius: 80,
      center: [&#39;50%&#39;, &#39;25%&#39;],
      label: {
        position: &#39;outer&#39;,
        alignTo: &#39;none&#39;,
        bleedMargin: 5
      },
      encode: {
        itemName: &#39;species&#39;,
        value: &#39;T1&#39;
      }
    },
    {
      type: &#39;pie&#39;,
      radius: 80,
      center: [&#39;50%&#39;, &#39;50%&#39;],
      encode: {
        itemName: &#39;species&#39;,
        value: &#39;T2&#39;
      }
    },
    {
      type: &#39;pie&#39;,
      radius: 80,
      center: [&#39;50%&#39;, &#39;75%&#39;],
      encode: {
        itemName: &#39;species&#39;,
        value: &#39;T3&#39;
      }
    }
  ],
  // Optional. Only for responsive layout:
  media: [
    {
      query: { minAspectRatio: 1 },
      option: {
        series: [
          { center: [&#39;25%&#39;, &#39;50%&#39;] },
          { center: [&#39;50%&#39;, &#39;50%&#39;] },
          { center: [&#39;75%&#39;, &#39;50%&#39;] }
        ]
      }
    },
    {
      option: {
        series: [
          { center: [&#39;50%&#39;, &#39;25%&#39;] },
          { center: [&#39;50%&#39;, &#39;50%&#39;] },
          { center: [&#39;50%&#39;, &#39;75%&#39;] }
        ]
      }
    }
  ]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function t(b,o){const e=s("ExternalLinkIcon");return l(),d("div",null,[n("p",null,[n("a",u,[v("ECharts"),a(e)])]),m])}const _=i(c,[["render",t],["__file","pieChart.html.vue"]]);export{_ as default};
