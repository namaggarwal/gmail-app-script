/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import GMail from './gmail';

function testGmailSearch() {
  const obj = new GMail(GmailApp);
  console.log(GMail.getFlattenMessagesFromThreads(obj.search('label:bank-sc transaction alert primary newer_than:10d')));
}
