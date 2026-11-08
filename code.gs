function checkOperationalIssues() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const collections = ss.getSheetByName("Collections");
  const uploads = ss.getSheetByName("Uploads");
  const cameras = ss.getSheetByName("Camera_Fleet");

  if (!collections || !uploads || !cameras) {
    throw new Error("One or more sheet names are incorrect.");
  }

  const issues = [];

  // Collections
  collections.getRange("A2:H11").getValues().forEach(row => {
    if (row[5] === "Rejected")
      issues.push(["Quality", row[0], "Rejected"]);

    if (row[6] === "Missing")
      issues.push(["Consent", row[0], "Missing"]);
  });

  // Uploads
  uploads.getRange("A2:H11").getValues().forEach(row => {
    if (row[6] === "Pending")
      issues.push(["Upload", row[0], "Pending"]);
  });

  // Cameras
  cameras.getRange("A2:H11").getValues().forEach(row => {
    if (row[5] === "Under Repair")
      issues.push(["Camera", row[0], "Under Repair"]);

    if (row[4] === "Pending")
      issues.push(["Deposit", row[0], "Pending"]);
  });

  let sheet = ss.getSheetByName("Operational_Issues");

  if (!sheet)
    sheet = ss.insertSheet("Operational_Issues");

  sheet.clearContents();

  sheet.getRange("A1:C1").setValues([
    ["Issue Type", "Reference ID", "Issue Description"]
  ]);

  if (issues.length > 0) {
    sheet.getRange(2, 1, issues.length, 3).setValues(issues);
  }

  Logger.log("Issues found: " + issues.length);
}

function sendOperationalAlert() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Operational_Issues");

  const issues = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 3).getValues()
    : [];

  if (issues.length === 0) return;

  const email = Session.getActiveUser().getEmail();

  const body = issues.map(row =>
    row[0] + " | " + row[1] + " | " + row[2]
  ).join("\n");

  MailApp.sendEmail(
    email,
    "Daily Operations Alert - " + issues.length + " Issues",
    "Operational issues detected:\n\n" + body
  );
}

function runDailyOperations() {
  checkOperationalIssues();
  sendOperationalAlert();
}
