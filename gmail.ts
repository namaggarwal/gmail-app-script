class GMail {
  private gmailApp: GoogleAppsScript.Gmail.GmailApp

  constructor(gmailApp: GoogleAppsScript.Gmail.GmailApp) {
    this.gmailApp = gmailApp;
  }

  search(text: string) : GoogleAppsScript.Gmail.GmailThread[] {
    return this.gmailApp.search(text);
  }

  static getFlattenMessagesFromThreads(threads: GoogleAppsScript.Gmail.GmailThread[]) {
    const threadsMessages = [];
    threads.forEach((thread) => {
      const messages = thread.getMessages();
      messages.forEach((message) => {
        console.log(message.getDate());
      });
    });
    return threadsMessages;
  }
}

export default GMail;
