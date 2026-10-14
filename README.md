# 花蓮縣ʼonanip文教協會一頁式網站

## 上傳到既有 GitHub 專案

1. 解壓縮 ZIP。
2. 將 index.html、assets 資料夾及其他 HTML 轉接頁，上傳到 onanip-home 專案的根目錄，覆寫同名檔案。不要只上傳 ZIP，也不要再包一層資料夾。
3. 提交變更並沿用原本 GitHub Pages 設定，等待部署完成。
4. 原 css、js 資料夾已不再使用，可移除；新版程式不再呼叫公告 API。

## 檔案

- index.html：主頁，六個區塊包含協會介紹、宗旨理念、核心業務、第二屆團隊及聯絡資訊。
- assets/seedling.jpg：會員大會簡報中的原檳榔幼苗照片。
- assets/site.css：網站排版與手機樣式。
- assets/site.js：手機選單、頁內導覽、年份。
- about.html、projects.html、contact.html、join.html、transparency.html：舊網址轉接至首頁對應區塊。

## 本次更新

「參與與合作方式」集中說明如何入會、參與活動及提出合作構想；會員系統與會費僅放在此區塊。
「聯絡我們」統一呈現信箱、總幹事合作窗口、會址、地圖與社群連結。參與方式中的社群、合作按鈕跳轉至對應聯絡資訊，避免重複。總幹事合作信箱為 karo@onanip.org。
協會由關心原住民族文化發展的青年共同發起；核心業務使用「歌謠學習」。
第二屆任期為 2026.10.09－2029.10.08，名單更新日期固定為 2026.10.15。日後名單有實際更新時，再手動修改該日期，不會依每天日期自動變動。
新增「協會章程下載」按鈕，依要求暫設 href="#"、target="_blank"。

### 自行設定協會章程連結

在 index.html 搜尋 id="oni-charter-download"，將該連結的 href="#" 替換為正式章程檔案網址或相對路徑，保留 target="_blank" 與 rel="noopener noreferrer"。
若使用本專案內的 PDF，可自行建立 documents 資料夾上傳章程，並將 href 設為 "documents/charter.pdf"。本套件沒有附上章程 PDF。


檳榔幼苗照片在手機、平板與電腦上等比例完整顯示，不裁切；圖說放在照片下方。

頂端導覽列會隨頁面捲動持續停留在畫面上方，桌面與手機皆適用；點擊導覽時預留標題空間，避免被導覽列遮住。

加入 Facebook https://www.facebook.com/onanip.hl/ 及 Instagram https://www.instagram.com/onanip.hl/ 。
移除兩項核心業務下的六項服務細目，保留業務標題與概述。
團隊依使用者提供的第二屆名單呈現。
保留米白、咖啡色、橄欖綠與芥末黃的會員大會視覺風格。
信箱、會址及會員系統沿用原網站資訊。

## 本機檢視

保持 index.html 與 assets 資料夾的相對位置，直接開啟 index.html 即可。
網站不依賴外部字型、圖片 CDN 或程式庫。外部連結包括信箱、地圖、會員系統與社群平台。
