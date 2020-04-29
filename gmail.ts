interface ThreadMessage {
  id: string
  date: string
}

class GMail {
  private gmailApp: GoogleAppsScript.Gmail.GmailApp

  constructor(gmailApp: GoogleAppsScript.Gmail.GmailApp) {
    this.gmailApp = gmailApp;
  }

  search(text: string) : GoogleAppsScript.Gmail.GmailThread[] {
    return this.gmailApp.search(text);
  }

  static getFlattenMessagesFromThreads(threads: GoogleAppsScript.Gmail.GmailThread[]): ThreadMessage[] {
    const threadsMessages: ThreadMessage[] = [];
    threads.forEach((thread) => {
      const messages = thread.getMessages();
      messages.reverse().forEach((message) => {
        const threadMessage: ThreadMessage = {
          id: message.getId(),
          date: message.getDate().toDateString(),
        };
        threadsMessages.push(threadMessage);
      });
    });
    return threadsMessages;
  }
}

export default GMail;
