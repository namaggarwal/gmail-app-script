/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import GMail from './gmail';

function testGmailSearch() {
  const obj = new GMail(GmailApp);
  console.log(obj.search('naman aggarwal'));
}
