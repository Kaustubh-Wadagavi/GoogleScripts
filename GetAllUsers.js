var API_URL = "https://demo.openspecimen.org/rest/ng/users";
var USERNAME = "kaustubh@krishagni.com";
var PASSWORD = "Login@123";
var SHEETNAME = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet1');

var encodedAuthInformation = Utilities.base64Encode(USERNAME+":"+PASSWORD);
var headers = {"Authorization" : "Basic " + encodedAuthInformation};

function writeInGSheet(userData) {
  var userHeader = ["id","firstName","lastName","emailAddress"]
  var items = [userHeader];
  userData.forEach(function (userData) {
    items.push([userData.id, userData.firstName, userData.lastName,userData.emailAddress]);
  });
  SHEETNAME.getRange(1,1,items.length,items[0].length).setValues(items);
  Logger.log("OpenSpecimen users are successfully loaded in google sheet.");

  if(encodedAuthInformation!=null || headers != null ) {
    encodedAuthInformation = null;
    headers = null;
  }
  sortSheetDescending(SHEETNAME);
}

function sortSheetDescending(sheetName) {
  sheetName.setFrozenRows(1);
  sheetName.getRange('1:1000').sort({column: 1, ascending: false});
  Logger.log("The sheet is sorted in descending order successfully.");
  //sheetName.deleteColumn(1);
}

/*********************************/
/*   Script starts from here.    */
/*********************************/
function mainFunction() {
  var params = {
    'method': 'GET',
    'muteHttpExceptions': true,
    'headers': headers
  };
  var response=UrlFetchApp.fetch(API_URL, params); 
  var AllUsersData = JSON.parse(response.getContentText());
  writeInGSheet(AllUsersData);
}



  


