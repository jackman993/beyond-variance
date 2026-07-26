# Beyond Variance — GitHub Pages

論文摘要展示站：*Beyond Variance: Geometric Leverage for AI-Driven Gene Discovery in Cancer Transcriptomes*

## 本機預覽

在 `beyond-variance` 目錄開啟靜態伺服器，例如：

```bash
cd beyond-variance
python -m http.server 8080
```

瀏覽器開啟 `http://localhost:8080`。

## 部署到 GitHub Pages

1. 在 GitHub 新建 repository（例如 `beyond-variance`）。
2. 將本資料夾內容推上 `main`：

```bash
cd beyond-variance
git init
git add .
git commit -m "Add paper abstract GitHub Pages site"
git branch -M main
git remote add origin https://github.com/<YOUR_USER>/<YOUR_REPO>.git
git push -u origin main
```

3. 到 repository → **Settings** → **Pages**
4. Source 選 **Deploy from a branch**
5. Branch 選 `main` / `/ (root)` → Save

約一分鐘後網址為：

`https://<YOUR_USER>.github.io/<YOUR_REPO>/`

若要用使用者首頁 `https://<YOUR_USER>.github.io/`，請把 repository 命名為 `<YOUR_USER>.github.io`，並把本資料夾內容放在該 repo 根目錄。

## 檔案

| 檔案 | 說明 |
|------|------|
| `index.html` | 主頁 |
| `styles.css` | 樣式 |
| `i18n.js` | 繁中／英文切換 |
| `assets/` | 論文圖檔 |
