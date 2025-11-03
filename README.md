# Simple Web App - Task Manager
A lightweight task manager web app with:
- ✅ Clean UI
- ✅ Dynamic dashboard using Chart.js
- ✅ Google Sheets integration for data persistence

---

## 🚀 How to Use
1. Open `index.html` in your browser to test locally.
2. To host online:
   - Make this repo **Public**.
   - Enable **GitHub Pages** in Settings → Pages.
   - Your app will be live at: `https://yourusername.github.io/Simple-web-app/`

---

## 🔗 Google Sheets Integration
1. Create a Google Sheet with columns: `Name | Task | Status`.
2. Go to **Extensions → Apps Script** and paste:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow([data.name, data.task, data.status]);
     return ContentService.createTextOutput("Success");
   }
