const dict = {
  "zh-Hant": {
    "nav.abstract": "摘要",
    "nav.method": "方法",
    "nav.results": "結果",
    "nav.authors": "作者",
    "hero.brand": "Beyond Variance",
    "hero.title": "以幾何槓桿力，找出變異度看不到的癌症驅動基因",
    "hero.lede": "Geometric Leverage Index（GLI）不以表現量變異排序，而以基因對學習潛在流形的擾動敏感度，揭露轉錄組中的隱藏結構驅動因子。",
    "hero.cta1": "閱讀摘要",
    "hero.cta2": "關鍵發現",
    "strip.patients": "TCGA-BRCA 患者",
    "strip.genes": "基因",
    "strip.survival": "GLI 存活分層",
    "strip.seeds": "隨機種子驗證",
    "abstract.eyebrow": "Abstract",
    "abstract.title": "論文摘要",
    "abstract.p1": "隨著 AI 快速學會解讀基因體——預測 DNA 序列如何塑造基因調控——一個互補的問題卻較少被關注：在我們已有的表現量資料中，哪些基因最能塑造模型所學到的結構？癌症將其驅動因子藏在轉錄組裡，但標準特徵選擇依表現量變異度排序，因而在設計上就會捨棄那些常承載訊號的低變異調控基因。",
    "abstract.p2": "我們提出 Geometric Leverage Index（GLI）：一種無監督準則，不以基因變異多少排序，而以對該基因進行 in-silico 擾動後，對學習潛在流形的形變強度（以 encoder Jacobian 範數衡量）來排序。",
    "abstract.p3": "在 TCGA-BRCA 世代（526 名患者、16,383 個基因）上，GLI 找出變異度與路徑選擇看不見的低變異基因，並在線性基線失敗之處成功分層患者存活（log-rank p = 0.0048；PCA 為 0.157）。由於此指標由模型導出，我們在 20 次隨機初始化下驗證，得到可重現的結構驅動因子共識，並以負對照確認。",
    "abstract.p4": "引人注目的是，GLI 可重現地找回先前無癌症註解的基因——顯示學習幾何揭露了超越變異度、路徑隸屬與線性相關的轉錄組重要性維度，對精準腫瘤學的生物標記發現具有直接意涵。",
    "method.eyebrow": "Method · M-CIM",
    "method.title": "Geometric Leverage Index",
    "method.p1": "Manifold-based Causal Influence Model（M-CIM）將轉錄組嵌入潛在流形，對每個基因做 in-silico 擾動，再以 encoder 對該基因的平均 Jacobian 範數定義 GLI。",
    "method.p2": "與只捕捉離散程度的變異分數不同，GLI 衡量的是非線性流形內的敏感度。低表現變異但高 GLI 的基因，因此浮現為標準管線會捨棄的隱藏結構驅動因子。",
    "method.cap": "圖 1. M-CIM 流程：嵌入 → 擾動 → 以 GLI 排序基因對潛在幾何的影響力。",
    "results.eyebrow": "Findings",
    "results.title": "關鍵發現",
    "results.f1": "與變異排序近乎正交：NAPRT1、OR10AG1、ASCL2 等高 GLI 基因在變異排名中偏低，標準預處理會將其丟棄。",
    "results.f2": "臨床相關：以 top GLI 基因分層之 Kaplan–Meier 達 log-rank p = 0.0048，PCA 則為 0.157。",
    "results.f3": "可重現：20 個種子共識中，NAPRT1（20/20）與 OR10AG1（19/20）為穩健結構驅動因子；OR10AG1 無既有乳癌註解。",
    "results.f4": "特異性：高變異負對照 ANKRD30A、TNNT1 從不進入 top-50，顯示 GLI 不追蹤表現量大小。",
    "results.c1": "GLI 與變異／PCA 排序的分歧",
    "results.c2": "存活分層：GLI vs 基線",
    "results.c3": "跨 20 種子的排名穩定性",
    "authors.eyebrow": "Citation",
    "authors.title": "作者與引用",
    "authors.kw": "關鍵詞：",
    "footer": "本頁為論文摘要展示站，可用於 GitHub Pages 部署。"
  },
  en: {
    "nav.abstract": "Abstract",
    "nav.method": "Method",
    "nav.results": "Results",
    "nav.authors": "Authors",
    "hero.brand": "Beyond Variance",
    "hero.title": "Geometric leverage for AI-driven gene discovery in cancer transcriptomes",
    "hero.lede": "The Geometric Leverage Index ranks genes by how strongly an in-silico perturbation deforms a learned latent manifold—not by expression variance.",
    "hero.cta1": "Read abstract",
    "hero.cta2": "Key findings",
    "strip.patients": "TCGA-BRCA patients",
    "strip.genes": "genes",
    "strip.survival": "GLI survival split",
    "strip.seeds": "random-seed replicates",
    "abstract.eyebrow": "Abstract",
    "abstract.title": "Paper abstract",
    "abstract.p1": "As AI rapidly learns to read the genome—predicting how DNA sequence shapes gene regulation—a complementary question receives less attention: within the expression data we already have, which genes most shape the structure a model learns to see? Cancer hides its drivers in the transcriptome, yet standard feature selection ranks genes by expression variance and thus, by construction, discards the low-variance regulators that often carry the signal.",
    "abstract.p2": "We introduce the Geometric Leverage Index (GLI), an unsupervised criterion that ranks each gene not by how much it varies but by how strongly an in-silico perturbation of it deforms a learned latent manifold, measured as the encoder Jacobian norm.",
    "abstract.p3": "On the TCGA-BRCA cohort (526 patients, 16,383 genes), GLI surfaces low-variance genes invisible to variance- and pathway-based selection and stratifies patient survival where linear baselines fail (log-rank p = 0.0048 vs. 0.157 for PCA). Because the metric is model-derived, we validate it across 20 random initializations, yielding a reproducible consensus of structural drivers confirmed against negative controls.",
    "abstract.p4": "Strikingly, GLI reproducibly recovers genes with no prior cancer annotation—evidence that learned geometry exposes a dimension of transcriptomic importance beyond variance, pathway membership, and linear correlation, with direct implications for biomarker discovery in precision oncology.",
    "method.eyebrow": "Method · M-CIM",
    "method.title": "Geometric Leverage Index",
    "method.p1": "The Manifold-based Causal Influence Model (M-CIM) embeds transcriptomes into a latent manifold, perturbs each gene in silico, and defines GLI as the mean encoder Jacobian norm for that gene.",
    "method.p2": "Unlike variance, which captures only dispersion, GLI measures sensitivity within the nonlinear manifold. Low-variance, high-GLI genes emerge as hidden structural drivers that conventional pipelines discard.",
    "method.cap": "Fig. 1. M-CIM pipeline: embed → perturb → rank genes by influence on latent geometry via GLI.",
    "results.eyebrow": "Findings",
    "results.title": "Key findings",
    "results.f1": "Nearly orthogonal to variance ranking: high-GLI genes such as NAPRT1, OR10AG1, and ASCL2 rank low by variance and would be discarded by standard preprocessing.",
    "results.f2": "Clinical relevance: Kaplan–Meier stratification with top GLI genes reaches log-rank p = 0.0048 versus 0.157 for PCA.",
    "results.f3": "Reproducibility: across 20 seeds, NAPRT1 (20/20) and OR10AG1 (19/20) are robust structural drivers; OR10AG1 has no prior breast-cancer annotation.",
    "results.f4": "Specificity: high-variance negative controls ANKRD30A and TNNT1 never enter the top-50, confirming GLI does not track expression magnitude.",
    "results.c1": "Divergence of GLI vs variance / PCA ranking",
    "results.c2": "Survival stratification: GLI vs baselines",
    "results.c3": "Rank stability across 20 seeds",
    "authors.eyebrow": "Citation",
    "authors.title": "Authors & citation",
    "authors.kw": "Keywords: ",
    "footer": "Abstract showcase site ready for GitHub Pages deployment."
  }
};

let lang = "zh-Hant";

function applyLang(next) {
  lang = next;
  document.documentElement.lang = next === "en" ? "en" : "zh-Hant";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = dict[lang][key];
    if (text != null) el.textContent = text;
  });
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "en" ? "中文" : "EN";
}

document.getElementById("langToggle")?.addEventListener("click", () => {
  applyLang(lang === "en" ? "zh-Hant" : "en");
});

applyLang(lang);
