var API_URL = "https://test.openspecimen.org/rest/ng/users";
var USERNAME = "kaustubh";
var PASSWORD = "Login@123";

var encodedAuthInformation = Utilities.base64Encode(USERNAME+":"+PASSWORD);
var headers = {"Authorization" : "Basic " + encodedAuthInformation};

function getAllUsers() {
  var params = {
    'method': 'GET',
    'muteHttpExceptions': true,
    'headers': headers
  };
  
  var response=UrlFetchApp.fetch(API_URL, params); 
  var AllUsersData = JSON.parse(response.getContentText());
  writeInGSheet(AllUsersData);
}

function writeInGSheet(Data) {
  var results = Data;
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName=sheet.getSheetByName('Sheet2');
  
  var userHeader = ["id","type","firstName","lastName","loginName","domain","emailAddress","instituteId","instituteName","admin","instituteAdmin","manageForms","cpCount","creationDate","activityStatus"]
  
  var items = [userHeader];
sheet
  results.forEach(function (result) {
      items.push([result.id, result.type, result.firstName, result.lastName,result.loginName, result.domain, result.emailAddress,result.instituteId, result.instituteName, result.admin, result.instituteAdmin, result.manageForms,result.cpCount, result.creationDate, result.activityStatus]);
  });
  sheetName.getRange(1,1,items.length,items[0].length).setValues(items);
  Logger.log("OpenSpecimen Users are successfully loaded in google Sheet");
}
  
  


