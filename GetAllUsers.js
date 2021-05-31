var API_URL = "https://demo.openspecimen.org/rest/ng/users";
var USERNAME = "kaustubh@krishagni.com";
var PASSWORD = "Login@123";

var encodedAuthInformation = Utilities.base64Encode(USERNAME+":"+PASSWORD);
var headers = {"Authorization" : "Basic " + encodedAuthInformation};

function getAllUsers() {
  var params = {
    'method': 'GET',
    'muteHttpExceptions': true,
    'headers': headers
  };
  var res = UrlFetchApp.fetch(API_URL, params);
  Logger.log(res);
}


