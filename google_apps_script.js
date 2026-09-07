// =========================================================================
// GOOGLE APPS SCRIPT FOR SHRI DENTAL CARE CONTACT FORM
// =========================================================================
// Instructions:
// 1. Open the Shri Dental Care Google Sheet:
//    https://docs.google.com/spreadsheets/d/1WLKM4EXJNc9gb75-Cl7oNfucP9HuxjmF7BgWZlGh_x8/edit
// 2. In row 1, add these headers in columns A through G:
//    Timestamp | Full Name | Phone Number | Email | Service Required | Preferred Time | Message
// 3. Go to "Extensions" menu -> click "Apps Script".
// 4. Delete any code in Code.gs and paste the exact code below.
// 5. Click "Save" (disk icon).
// 6. Click "Deploy" button (top right) -> "New deployment".
// 7. Select Type: "Web App".
//    - Description: "Shri Dental Care Contact Form"
//    - Execute as: "Me (<your email>)"
//    - Who has access: "Anyone" (IMPORTANT: must be Anyone so the website can submit data)
// 8. Click "Deploy", authorize permissions when prompted.
// 9. Copy the generated "Web App URL" (ends in /exec).
// 10. Paste that URL into your `.env` file as:
//     VITE_GOOGLE_SHEET_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
// =========================================================================

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.openById('1WLKM4EXJNc9gb75-Cl7oNfucP9HuxjmF7BgWZlGh_x8');
    var sheet = doc.getActiveSheet();

    var rawData;
    if (e.postData && e.postData.contents) {
      try {
        rawData = JSON.parse(e.postData.contents);
      } catch (err) {
        rawData = e.parameter;
      }
    } else {
      rawData = e.parameter || {};
    }

    var timestamp = new Date();
    var name = rawData.name || rawData.fullName || '';
    var phone = rawData.phone || rawData.phoneNumber || '';
    var email = rawData.email || '';
    var service = rawData.service || rawData.treatment || 'General Enquiry';
    var preferredTime = rawData.preferredTime || rawData.date || '';
    var message = rawData.message || rawData.notes || '';

    // Append to sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      email,
      service,
      preferredTime,
      message
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', message: 'Shri Dental Care Form Webhook is ready.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
