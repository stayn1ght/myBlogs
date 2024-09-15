---
title: "MatchIt: Nonparametric Preprocessing for Parametric Causal Inference"
index: false
icon: laptop-code
category:
  - Code
---
# 参数因果推理的非参数预处理

## conda 安装 MatchIt
```bash
mamba install conda-forge::r-matchit
```
## Overview
`MatchIt`为观察性研究中协变量平衡的各种匹配方法提供了一个简单明了的接口。匹配是估计治疗效果时减少混淆和模型依赖的一种方法。有几种匹配方法可供选择，包括最近邻匹配、最优对匹配、最优完全匹配、广义完全匹配、遗传匹配、精确匹配、粗化精确匹配、基数匹配和子分类，其中一些方法依赖于其他R包中的函数。包括用于估计倾向得分匹配的倾向得分的各种方法。下面是一个使用MatchIt进行马氏距离匹配和替换并评估平衡的示例：

```r
library("MatchIt")
data("lalonde", package = "MatchIt")

# 1:1 nearest neighbor matching with replacement on 
# the Mahalanobis distance
m.out <- matchit(treat ~ age + educ + race + married + nodegree + re74 + re75,
    data = lalonde, distance = "mahalanobis", replace = TRUE)
```

打印 MatchIt 对象可以提供执行的匹配类型的详细信息。

```r
m.out
```

```r
#> A matchit object
#>  - method: 1:1 nearest neighbor matching with replacement
#>  - distance: Mahalanobis
#>  - number of obs.: 614 (original), 261 (matched)
#>  - target estimand: ATT
#>  - covariates: age, educ, race, married, nodegree, re74, re75
```

使用 `summary()`，我们可以查看原始样本和匹配样本的协变量平衡：

```r
#Checking balance before and after matching:
summary(m.out)
```
```r
#> 
#> Call:
#> matchit(formula = treat ~ age + educ + race + married + nodegree + 
#>     re74 + re75, data = lalonde, distance = "mahalanobis", replace = TRUE)
#> 
#> Summary of Balance for All Data:
#>            Means Treated Means Control Std. Mean Diff. Var. Ratio eCDF Mean eCDF Max
#> age              25.8162       28.0303         -0.3094     0.4400    0.0813   0.1577
#> educ             10.3459       10.2354          0.0550     0.4959    0.0347   0.1114
#> raceblack         0.8432        0.2028          1.7615          .    0.6404   0.6404
#> racehispan        0.0595        0.1422         -0.3498          .    0.0827   0.0827
#> racewhite         0.0973        0.6550         -1.8819          .    0.5577   0.5577
#> married           0.1892        0.5128         -0.8263          .    0.3236   0.3236
#> nodegree          0.7081        0.5967          0.2450          .    0.1114   0.1114
#> re74           2095.5737     5619.2365         -0.7211     0.5181    0.2248   0.4470
#> re75           1532.0553     2466.4844         -0.2903     0.9563    0.1342   0.2876
#> 
#> Summary of Balance for Matched Data:
#>            Means Treated Means Control Std. Mean Diff. Var. Ratio eCDF Mean eCDF Max Std. Pair Dist.
#> age              25.8162       25.5405          0.0385     0.6524    0.0466   0.1892          0.4827
#> educ             10.3459       10.4270         -0.0403     1.1636    0.0077   0.0378          0.1963
#> raceblack         0.8432        0.8432          0.0000          .    0.0000   0.0000          0.0000
#> racehispan        0.0595        0.0595          0.0000          .    0.0000   0.0000          0.0000
#> racewhite         0.0973        0.0973          0.0000          .    0.0000   0.0000          0.0000
#> married           0.1892        0.1784          0.0276          .    0.0108   0.0108          0.0276
#> nodegree          0.7081        0.7081          0.0000          .    0.0000   0.0000          0.0000
#> re74           2095.5737     1788.6941          0.0628     1.5690    0.0311   0.1730          0.2494
#> re75           1532.0553     1087.7420          0.1380     2.1221    0.0330   0.0865          0.2360
#> 
#> Sample Sizes:
#>               Control Treated
#> All               429     185
#> Matched (ESS)      33     185
#> Matched            76     185
#> Unmatched         353       0
#> Discarded           0       0
```
最上面是原始样品的平衡。下面是匹配样本的平衡，然后是不平衡的减少百分比以及匹配前后的样本量。平衡统计值越小，表示平衡越好。（在这种情况下，没有实现良好的平衡，应尝试其他匹配方法）。我们可以在Love图中绘制标准化的平均差异，以清晰、直观地显示整个样本的平衡：


```r
#Plot balance
plot(summary(m.out))
```

[![matchit-love-plot.png](https://i.postimg.cc/QdvdtWQJ/matchit-love-plot.png)](https://postimg.cc/k2FmYGh2)

<!-- [![matchit-love-plot](https://kosukeimai.github.io/MatchIt/reference/figures/README-unnamed-chunk-5-1.png)](https://kosukeimai.github.io/MatchIt/reference/figures/README-unnamed-chunk-5-1.png) -->

## 参数调教

我们将讨论如何使用 R `MatchIt`包进行倾向得分匹配 (Propensity Scores Matching)
* 倾向得分是得到`treatment`的概率，所以,我们需要使用混杂因素来预测得到treatment的概率。
* `method='nearest'` 表示我们使用的是最近邻法。最近邻匹配是一种广泛使用的贪心匹配方法。贪婪匹配此时匹配最近的对照组样本，并将匹配的对照组样本从匹配的其余部分中删除。它速度很快，但对样本的顺序很敏感。将总距离最小化并不是最优的，因为在过程后期将出现匹配的样本无法与已匹配的对照匹配的现象。
* `distance = 'glm'`意味着我们采用倾向得分差异进行最近邻匹配。默认设置是从实验组中的最高倾向得分到最低倾向得分进行匹配。这确保了难以匹配的数据点首先被匹配。
* `ratio=1` 表示一个treatment单元与一个对照单元匹配。当比值大于 1 时，一个以上的对照单元将与每个实验单元匹配。如果我们希望为每个实验单元匹配 2 个对照组样本，则将对`treatment`组中的所有单元执行最近邻匹配以获得第一个匹配，然后重复该过程以获得第二个匹配。当倾向得分相同时，将选择数据集中具有较高顺序的得分。这确保了结果的可重复性。
* `replace=F`意味着对照组中的每个样本仅与实验组中的一个样本匹配。
* `caliper`是任何匹配的距离阈值。距离大于卡尺距离的匹配对将被丢弃。`caliper=0.2`意味着将丢弃超过 20% 的倾向得分标准差的匹配项。

```r
# PSM matchit  
m.out <- matchit(treat ~ age + educ + race + married + nodegree + re74 + re75,
    data = lalonde, distance = "mahalanobis", replace = TRUE)
m.out <- matchit(treat ~ age + educ + race + married + nodegree + re74 + re75,
    data = lalonde, distance = 'glm', method = 'nearest',
    atio = 1, replace = FALSE, caliper = 0.2)
```

## 参考链接：
1. [官方文档](https://kosukeimai.github.io/MatchIt/index.html)
2. [倾向性匹配得分](https://zhuanlan.zhihu.com/p/559469895)
