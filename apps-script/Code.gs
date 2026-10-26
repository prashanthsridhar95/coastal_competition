// Google Apps Script web app that appends each registration to the sheet.
// Setup: see apps-script/README.md
var SHEET_ID = '1NALkhEk94vGIDIHoYzYIifDWXYa_9MncEqWJf4IQGkk';
var HEADERS = ['Submitted At','Registration ID','Entry Type','Event','Team Name','Squad Size',
  'Full Name','Gender','Age','Age Category','Phone','Cluster','Village','Emergency Contact'];

function doPost(e){
  var d = JSON.parse(e.postData.contents);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    if(sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    sheet.appendRow([d.submittedAt, d.id, d.type, d.event, d.teamName || '', d.squadSize || '',
      d.fullName, d.gender, d.age, d.category, "'" + d.phone, d.cluster, d.village, d.emergency || '']);
  } finally { lock.releaseLock(); }
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
