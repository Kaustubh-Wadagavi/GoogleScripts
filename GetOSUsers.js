var AUTH_URL = 'https://demo.openspecimen.org/rest/ng/sessions';
var API_URL = 'https://demo.openspecimen.org/rest/ng/users';
var USERNAME='kaustubh';
var PASSWORD='Login@123';

var data = {
    "loginName": "kaustubh@krishagni.com",
    "password": "Login@123",
    "domainName": "openspecimen"
} 

function getAllUsers() {
  var url = "https://demo.openspecimen.org/rest/ng/users";
  var encodedAuthInformation = Utilities.base64Encode("kaustubh@krishagni.com:Login@123");
  var headers = {"Authorization" : "Basic " + encodedAuthInformation};
  var params = {
    'method': 'GET',
    'muteHttpExceptions': true,
    'headers': headers
  };
  var res = UrlFetchApp.fetch(url, params);
  Logger.log(res);
}

function MainFunction() {
  var options = {method : "post", contentType:"application/json", payload : JSON.stringify(data),"muteHttpExceptions":true};
  var response = UrlFetchApp.fetch(AUTH_URL, options);
  Logger.log(response.getContentText());  
  getAllUsers();
}
