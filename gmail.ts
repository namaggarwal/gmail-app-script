class GMail {
  private gmailApp: GoogleAppsScript.Gmail.GmailApp

  constructor(gmailApp: GoogleAppsScript.Gmail.GmailApp) {
    this.gmailApp = gmailApp;
  }

  search(text: string) : GoogleAppsScript.Gmail.GmailThread[] {
    return this.gmailApp.search(text);
  }

  static getFlattenMessagesFromThreads(threads: GoogleAppsScript.Gmail.GmailThread[]) {
    const messages = [];
    threads.forEach((thread) => {
      const message = thread.getMessages();
      console.log(message);
    });
    return messages;
  }
}

export default GMail;
