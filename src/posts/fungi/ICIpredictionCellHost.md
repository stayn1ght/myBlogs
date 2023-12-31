---
cover: /assets/images/yuriali.jpg
icon: pen-to-square
date: 2023-11-14
category:
  - Mycobiome
tag:
  - Artical
  - Machine learning
  - ICI response prediction
  - Human gut mycobiome
star: true
sticky: true
shortTitle: ICI prediction. Cell Host
---
# Multi-kingdom gut microbiota analyses define bacterial-fungal interplay and microbial markers of pan-cancer immunotherapy across cohorts

作者？其他文章？这些人是研究什么领域的？这个机构水平怎么样


## Results

### 一. 接受ICI治疗的患者宏基因组
9个公共数据集粪便宏基因组数据（Figure 1A）。排除了ICI治疗启动之后收集的样本，保留862个样本。

总共包括284名响应者和578名非响应者（图1B）。

### 二. 鉴定 ICI response 标志菌
1. 为了考虑数据集之间的差异，计算每个真菌物种响应表型解释的差异。Figure S1 ==（怎么计算的各种因素对差异的贡献？）ANOVA分析== 使用 **双边阻塞Wilcoxon秩和检验** 识别差异真菌物种。
2. 4个接受PD-1单药治疗的队列进行进一步分析，减轻治疗策略的潜在混杂效应，提高结果的可靠性
3. **Figure 2A** 在4个接受抗PD-1单药治疗的数据集时，鉴定出91个差异物种。在最显著的FDR矫正p值中，有13个物种在响应组富集，1个在非响应者富集。==意思是p值显著的91个，FDR矫正p值之后是14个？前面一段说抗PD-1单药治疗的一共5个数据集，这里只用了4个，没有说原因。并且combined怎么做的也没说，我判断combined就是把几个数据集的样本合并起来，不区分数据集做wilcoxon==

### 三. 建立ICI response 模型
4个抗PD-1单药治疗数据集
1. 合并4个数据集建立RF模型，IFE步骤识别核心集，从91个differential abundance菌中识别26个菌作为核心集，**Figure 2C** 是这个模型的AUC曲线。**Figure 2D**是这26个真菌的Generalized fold change
2. study-to-study 转移验证 and leave-one-dataset-out (LODO) validation. **Figure 2E** 研究间转移验证的平均AUC值为0.64，范围从0.55到0.72。此外，LODO分析的AUC值范围从0.62到0.83，平均AUC为0.73。值得注意的是，Derosa等人和Routy等人的数据集作为训练集的性能较其他数据集更好，平均AUC分别为0.71和0.7，这可能是由于它们的大样本量
3. 真菌模型预测的响应者与更好的预后显著相关，包括Derosa等人数据集中的总生存期（OS）（图2F）和McCulloch等人数据集中的无进展生存期（PFS）**Figure 2G**  （生存曲线需要logrank检验说明两组患者之间出现的差异由分组因素导致，不能用抽样误差来解释
4. 细菌模型。主坐标分析（PCoA）结果显示，响应者和非响应者聚集在不同的地方（p = 0.001，PERMANOVA测试；图S2H），表明ICI治疗对响应者和非响应者之间的细菌谱产生了差异。接下来，使用与真菌模型相同的步骤构建了细菌预测模型。从差异丰富的细菌物种中选择的26个核心细菌物种具有最高的预测响应表型的能力。在这26个核心细菌中，来自厚壁菌门的有益细菌Akkermansia muciniphila在响应者中增加最为显著，并且先前报道过其在ICI响应者中升高，并与ICI的临床益处相关（**Figure 2H**）。然而，细菌模型的AUC仅为0.83，用于预测响应者和非响应者（**Figure 2I**），远低于真菌模型。细菌模型的研究间转移验证的平均AUC值为0.65，范围从0.55到0.74（图S2H）。我们的数据强调了真菌可能比细菌更准确地预测ICI反应表型。

### 四. 免疫微环境的改变
这一步是为了验证真菌ICI response预测模型的性能。
1. PD-1阻断响应者的特征： 研究表明，在接受PD-1阻断治疗之前，PD-1阻断治疗响应者通常表现出较高水平的耗竭性CD8+ T细胞，这些细胞表达较高水平的PD-1和/或CTLA-4，相比之下，非响应者水平较低。

2. 真菌标志物预测的响应者： 为了确定在通过真菌标志物预测的响应者中是否存在类似的模式，研究收集了30例未接受治疗的非小细胞肺癌（NSCLC）患者的肿瘤组织和相应的粪便样本（**Figure 3A**）。基因集变异分析（GSVA）显示，在通过真菌模型预测的响应者中，表现出耗竭性特征的基因集富集（**Figure 3B**）。

3. 细胞毒性的标志物富集： 此外，通过GSVA分析还显示，在预测的响应者中，细胞毒性的标志物也富集（Figure S3）。

4. 多色免疫组织化学染色验证： 这些发现通过多色免疫组织化学染色得到了进一步验证，显示相对于非响应者，预测的响应者表现出更高水平的耗竭相关标志物（PD-1、PD-L1、CTLA-4和TIM-3）的表达（**Figure 3C**）。

**结论**： 这些发现暗示真菌可能是ICI响应的有效预测因子，表现为与已发表的有关响应者和非响应者的肿瘤微环境变化一致的迹象。

### 五. 结合细菌真菌提高预测性能

1. 对总共52个特征（包括26个核心真菌和26个细菌）应用了IFE步骤，包含真菌和细菌的37个核心特征构建了多王国RF模型（图2B）。
2. 与单一王国预测模型相比，实现了AUC值的提高，达到了0.89（**Figure 4A**）。
3. 研究间转移验证的平均AUC值为0.67。此外，LODO分析的AUC值范围从0.7到0.86，平均AUC为0.77（图4B）。
4. 多王国标志物的核心集包括20个真菌和17个细菌，其中子囊菌门在真菌门中占主导地位，其次是担子菌门（图4D），而厚壁菌门在细菌门中占主导地位，其次是拟杆菌门（图4E）。
5. 在这些核心多王国标志物中，有27个在响应者中富集，而有10个在非响应者中富集（图5A和图S4A）。这些发现表明，结合多王国微生物标志物可以增强对ICI治疗反应的预测性。

**结论**： 这些发现表明，结合多领域微生物标志物可以增强对ICI响应的预测性能。

6. 患者预后的关联分析： 使用多领域模型预测的响应者与更好的预后显著相关，包括在Derosa等人的数据集中的总生存期（OS）（Figure 4F）以及McCulloch等人的数据集中的OS（Figure 4G）和无进展生存期（PFS）（Figure 4H）。
7. 预后结果： 预测为响应者的患者在总体生存期和无进展生存期方面表现出更好的预后结果，这表明多领域模型具有预测患者预后的能力。

这些结果进一步支持了多领域微生物标志物模型在预测免疫检查点抑制剂治疗响应以及患者预后方面的有效性。

**外部验证**
来自中国的独立队列（CHN_JS队列）中进行了评估，该队列包括24名响应者和29名非响应者。

在CHN_JS队列中测试了真菌模型的最佳切点的判别力，67.9%的样本被正确预测，证实了多领域模型在这个独立队列中的稳健性（Figure 4C）

### 六. 共存网络
内领域共存网络（真菌）： 通过使用SparCC评估了响应者和非响应者中核心真菌物种之间的相关性，生成了基于单一领域预测模型选择的真菌标志物的共丰度网络。在非响应者中存在更多的真菌之间的相互作用，而在响应者中，相互作用似乎更强烈。在响应者中，最强的正相关性是Aspergillus terreus和Verticillium longisporum之间，Aspergillus homomorphus和Lachancea mirantina之间，而最强的负相关性是Debaryomyces hansenii和Enterocytozoon bieneusi之间，Debaryomyces hansenii和Lachancea mirantina之间（Figure 5A，Figure S5）。

多领域共存网络（真菌和细菌）： 由于发现细菌增强了真菌的预测性，研究人员调查了细菌和真菌之间是否存在相互作用。通过使用SparCC计算了响应者和非响应者之间真菌和细菌标志物之间的相关性，以构建多领域模型。响应者和非响应者显示出不同的多领域关联共存网络，非响应者中显著相关性较少。在响应者中，真菌Schizosaccharomyces octosporus处于该网络的中心，与七种细菌显示出负相关，包括Hungatella hathewayi，这是一种已被证明促进结直肠癌（CRC）发展的细菌，这表明Schizosaccharomyces octosporus可能是一种有益的真菌。此外，两种细菌，Akkermansia muciniphila与真菌有四个负相关。没有发现其他领域之间的相互作用。此外，真菌王国之间的相互作用远远不及细菌之间的相互作用频繁。在非响应者中，虽然检测到了内领域的相互作用，但没有发现领域间的相关性（Figure 5B）。这些数据表明多领域相互作用可能在对ICI的响应中发挥作用。

### 七. 功能变化
1. KEGG（KO）、pathway和EggNOG注释。**Figure 6A** 在响应者中最显著富集的代谢KO基因与嘌呤代谢有关，其次是与丁酸代谢有关的基因
2. 通路水平上，petroselinate合成和糖原合成在响应者中显示出最高的富集（**Figure 6B**）
3. 预测价值：分别使用差异富集的KO gene、pathway和EggNOG gene构建RF模型，但效果不佳。KO基因、通路和EggNOG基因的AUC分别为0.75、0.76和0.80（Figures S7A–S7C）。研究间验证的平均AUC值在KO基因方面为0.58至0.67，通路方面为0.46至0.64，EggNOG基因方面为0.56至0.7。此外，LODO分析的平均AUC值在KO基因方面为0.7，通路方面为0.64，EggNOG基因方面为0.68（Figures S7D–S7F）。

**代谢功能与微生物群落**
作为多王国网络中心的真菌Schizosaccharomyces octosporus与2个KO基因呈正相关（图5B），而在非响应者中没有观察到这种情况（图6C），这表明Schizosaccharomyces octosporus及其代谢活动的富集可能是响应者特有的。

在我们的验证队列中，验证了Schizosaccharomyces octosporus与K00700之间的关联（图6D），而K10536与Schizosaccharomyces octosporus之间没有关联（图S7G）。

进一步探讨K00700来源物种组成。在Schizosaccharomyces octosporus和属于Eubacterium rectale的K00700之间检测到了显著性（图6E）

K00700（EC:2.4.1.18）参与淀粉和蔗糖代谢（图6A），直接负责从直链淀粉合成淀粉。大量证据证明了淀粉对癌症的保护作用，其机制主要涉及将淀粉发酵成具有广泛认可的抗肿瘤作用的短链脂肪酸（SCFAs）。此外，Eubacterium rectale已被证明通过产生SCFA来抑制血液恶性肿瘤。为了研究响应者和非响应者中SCFA的水平，我们分析了由Botticelli等人发表的接受抗PD-1治疗的响应者和非响应者的粪便代谢组学数据。SCFA，包括醋酸、丁酸、丙酸和戊酸，似乎在响应者中富集（图6F）。


## diss

说是真菌+细菌提高了性能，从文章给的AUC平均值看也确实提高，但是需要注意是否是每个数据集都有提高？看看study-to-study的heatmap和lodo的值



### 优点
1. 样本收集：在ICI治疗前shotgun 数据和metadata。排除了在ICI治疗开始后收集的样本
表征 ICI response / non-response 的 metagenome 真菌组成
2. 设计免疫实验和基因表达检测验证模型的预测结果准确性。我觉得这是这篇文章最大的亮点
3. 文章的故事设计。可以直接做真菌+细菌建模，但是确分别做了真菌和细菌建模，然后提出真菌+细菌建模比真菌或细菌单独做的效果更好。

收集的数据真菌reads中位数在 0.25%。在收集公共数据上花了功夫

### 缺点
shotgun metagenomic数据。根据此前的一项研究 shotgun 数据用于肠道真菌群不准确，这篇文章只使用shotgun metagenomic数据，是一个局限。
数据量：构建模型使用4个数据集，800多个样本，不算多

## Methods

#### 数据集
9个公共数据集，shotgun metagenomic

#### profile
keaddata进行质控 bowtie比对哺乳动物去宿主，kraken2 识别真菌，Braken2 计算相对丰度

fastp质控，mOTUs注释细菌分类

trimmomatic去掉低质量序列，bowtie去掉人类基因组，Humann2 Uniref90 功能注释 

#### Marker Analysis
**去除混杂因素**：ANOVA（Analysis of Variance，方差分析）类型。文章里没讲具体是怎么操作的，混杂因素分析通常是通过拟合多元线性模型（Multiple Linear Model）或广义线性模型

自变量是微生物特征，因变量是ICI响应，混杂因素包括年龄、BMI、性别、治疗、研究

ANOVA通过方差分解，将真菌物种内的总方差分解为因变量的方差、混杂因素的方差。这可以帮助理解响应变量方差的来源。

使用双侧wilcoxon检验（在study层面进行阻断）确定差异丰度（物种、通路、EggNOG）。使用FDR方法对p值进行矫正。

The generalized fold change, which has better resolution for sparse microbiome profiles,66 is calculated as the mean difference in quantiles ranging from 0.1 to 0.9 in increments of 0.1 of the logarithmic responders and non-responders distributions.

#### 随机森林模型构建与验证
python scikit-learn包构建随机森林模型区分ICI响应者和非响应者。分层的10折交叉验证。构建模型的特征包括差异丰度物种和alpha多样性指数（shannon和simpson指数）。RF模型构建包括501个决策树，每个数涉及所有特征的10%。使用IFE（迭代特征排除）步骤优化模型性能，得到最佳的模型。使用AUC、准确度、灵敏度、特异性、精确度和F1分数评估模型性能。

特异性：
精确度：
F1分数：

#### Co-occurrence网络构建

真菌共存网络： 对于真菌的共存网络，通过SparCC确定相关性，使用FDR方法调整p值。可视化具有FDR < 0.2的关联。

多领域共存网络： 对于多领域的共存网络，计算相关系数 ≥ 0.25 的关联，并进行可视化。

多领域标志物和KO基因网络： 对于构建多领域标志物和KO基因的网络，包括代谢过程中显著富集的KO基因进行相关计算。关联由Spearman's相关系数确定，使用FDR方法进行p值校正。显示具有FDR < 0.05和相关系数大于0.2的关联。

网络可视化： 使用Cytoscape软件对网络进行可视化。


## 专业

**肿瘤免疫治疗**：ICI(Immune Checkpoint Inhibitors) 免疫检查点是一种通过抑制T细胞活性来维持免疫系统平衡的生物分子。然而，某些肿瘤能够利用这些检查点来逃避免疫系统的攻击。

ICI的作用是通过阻断免疫检查点上的信号通路，释放被抑制的免疫细胞，增强它们对肿瘤的攻击。其中，最为重要的检查点分子包括CTLA-4（细胞毒性T淋巴细胞相关抗原-4）和PD-1（程序性死亡-1）。

CTLA-4抑制剂： 抑制CTLA-4通常会增强T细胞的活性。例如，伊普利姆悦（Ipilimumab）是一种常用的CTLA-4抑制剂。

PD-1/PD-L1抑制剂： PD-1是一种表达在T细胞表面的免疫检查点，PD-L1是一种表达在某些肿瘤细胞上的分子。PD-1抑制剂（如 pembrolizumab 和 nivolumab）或 PD-L1 抑制剂（如 atezolizumab）通过阻断PD-1和PD-L1之间的结合，阻止肿瘤细胞逃避T细胞攻击的机制。


**预后**：医学名词，根据患者当前的状态预测之后的状态

生存曲线的阴影表示置信区间

总生存期和无进展生存期：Overall survival 表示从某个特定时间点（例如诊断、治疗开始等）开始，到患者死亡或最后一次随访的时间点为止，患者存活的时间。它是一个综合性的指标，考虑了所有可能导致患者死亡的原因，如疾病进展、治疗失败、或其他原因。PFS 是指从治疗开始到患者疾病进展（通常通过影像学、实验室检查等方式确定）或患者死亡的时间。在 PFS 中，死亡被视为一个事件，但与 overall survival 不同，疾病进展也被视为一个事件。

**LODO**：留一法

**IFE**：迭代特征消除步骤，每次建模后根据特征的贡献排序，去除贡献低的特征，用剩下的特征建模，直到达到指定的特征数量或模型性能不再提高。

**什么是T cell exhausted？**
耗竭性CD8+ T细胞是指在持续受到激活刺激的情况下逐渐失去其功能的CD8+ T淋巴细胞。这种现象通常在慢性感染、癌症或其他慢性免疫刺激的背景下发生。耗竭性CD8+ T细胞的形成是机体为维持免疫平衡而发生的一种适应性反应。

PD-1是一种免疫检查点分子，其在活化的T细胞上表达。在持续的抗原刺激下，PD-1的过度表达可能导致T细胞功能受损，称为“功能耗竭”

**ICI与T cell exhausted的具体关系？**