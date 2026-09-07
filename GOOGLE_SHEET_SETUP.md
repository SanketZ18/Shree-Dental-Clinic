# 📋 Google Sheet Setup Guide for Shri Dental Care

Follow these simple steps to link the contact/appointment booking form to your private Google Sheet in **1 minute**.

---

### Step 1: Open the connected Google Sheet
1. Open the supplied [Shri Dental Care Google Sheet](https://docs.google.com/spreadsheets/d/1WLKM4EXJNc9gb75-Cl7oNfucP9HuxjmF7BgWZlGh_x8/edit).
3. In **Row 1**, enter the following column headings:
   - **A1**: `Timestamp`
   - **B1**: `Full Name`
   - **C1**: `Phone Number`
   - **D1**: `Email`
   - **E1**: `Service Required`
   - **F1**: `Preferred Time`
   - **G1**: `Message`

---

### Step 2: Open Google Apps Script
1. In your Google Sheet top menu, click **Extensions** → **Apps Script**.
2. A new code editor tab will open.

---

### Step 3: Paste the Webhook Script
1. Delete any existing code in `Code.gs`.
2. Open [`google_apps_script.js`](file:///d:/Freelancing/SS%20Work/New%20Work/Shridentalcare_Project/google_apps_script.js) from this project and copy all the code.
3. Paste it into the Apps Script editor.
4. Click the **Save** (disk icon) button.

---

### Step 4: Deploy as Web App
1. Click the blue **Deploy** button (top right) → choose **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `Shri Dental Care Booking Form`
   - **Execute as**: `Me (your_email@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: select Anyone so website visitors can submit the form without logging into Google)*.
4. Click **Deploy**.
5. Click **Authorize Access** and select your Google account. If Google displays "Google hasn't verified this app", click **Advanced** → **Go to Untitled project (unsafe)** → **Allow**.

---

### Step 5: Connect URL to Website
1. Copy the generated **Web app URL** (it ends with `/exec`, e.g. `https://script.google.com/macros/s/AKfycbw.../exec`).
2. Create or edit `.env` in the project root:
   ```env
   VITE_GOOGLE_SHEET_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
   ```
3. Redeploy the website after setting the environment variable. Every enquiry submitted on `/contact` will then create a new row in the supplied Google Sheet with timestamp, name, phone, service required, preferred time, and notes.

> The spreadsheet edit URL and the Apps Script Web App URL are different. The website must use the Web App URL ending in `/exec`; putting the spreadsheet edit URL in `VITE_GOOGLE_SHEET_URL` will not work.
