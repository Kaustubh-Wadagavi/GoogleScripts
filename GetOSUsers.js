var AUTH_URL = 'https://test.openspecimen.org/rest/ng/sessions';
var API_URL = 'https://test.openspecimen.org/rest/ng/users';

var data = {
    "loginName": "kaustubh",
    "password": "Login@123",
    "domainName": "openspecimen"
} 

function MainFunction() {
  var options = {method : "post", contentType:"application/json", payload : JSON.stringify(data),"muteHttpExceptions":true};
  var response = UrlFetchApp.fetch(AUTH_URL, options);
  Logger.log(response.getContentText());  
  getAllUsers();
}

function getAllUsers() {
  var getAllUsers = UrlFetchApp.fetch(API_URL);
  Logger.log(getAllUsers.getContentText());
}