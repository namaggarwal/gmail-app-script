class GMail {
  private gmailApp: GoogleAppsScript.Gmail.GmailApp

  constructor(gmailApp: GoogleAppsScript.Gmail.GmailApp) {
    this.gmailApp = gmailApp;
  }

  search(text: string) : GoogleAppsScript.Gmail.GmailThread[] {
    return this.gmailApp.search(text);
  }
}

export default GMail;
