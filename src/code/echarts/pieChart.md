---
cover: /assets/images/yuriali.jpg
icon: pen-to-square
date: 2023-11-17
category:
  - Visualization
tag:
  - Pie Chart
  - Echarts
# star: true
# sticky: true
shortTitle: pieChart
---


[ECharts](https://echarts.apache.org/examples/zh/editor.html?c=data-transform-multiple-pie)

```Javascript
option = {
  dataset: [
    {
      source: [
        ['species', 'T1', 'T2', 'T3'],
["s__Enterobacter_cloacae",0.0,0.08887863,0.0],
["s__Klebsiella_pneumoniae",0.0,0.04006628,0.27253253],
["other",0.0,0.0,0.0],
["unclassified",1.0,0.87105509,0.72746747],
      ]
    },

  ],
   title: [
    {
      text: 'PWY-6731: starch degradation III',
      left: 'center',
      top: '25%'
    },
    {
      subtext: 'T1',
      left: '25%',
      top: '75%',
      textAlign: 'center'
    },
    {
      subtext: 'T2',
      left: '50%',
      top: '75%',
      textAlign: 'center'
    },
    {
      subtext: 'T3',
      left: '75%',
      top: '75%',
      textAlign: 'center'
    }
  ],
  series: [
    {
      type: 'pie',
      radius: 80,
      center: ['50%', '25%'],
      label: {
        position: 'outer',
        alignTo: 'none',
        bleedMargin: 5
      },
      encode: {
        itemName: 'species',
        value: 'T1'
      }
    },
    {
      type: 'pie',
      radius: 80,
      center: ['50%', '50%'],
      encode: {
        itemName: 'species',
        value: 'T2'
      }
    },
    {
      type: 'pie',
      radius: 80,
      center: ['50%', '75%'],
      encode: {
        itemName: 'species',
        value: 'T3'
      }
    }
  ],
  // Optional. Only for responsive layout:
  media: [
    {
      query: { minAspectRatio: 1 },
      option: {
        series: [
          { center: ['25%', '50%'] },
          { center: ['50%', '50%'] },
          { center: ['75%', '50%'] }
        ]
      }
    },
    {
      option: {
        series: [
          { center: ['50%', '25%'] },
          { center: ['50%', '50%'] },
          { center: ['50%', '75%'] }
        ]
      }
    }
  ]
};
```