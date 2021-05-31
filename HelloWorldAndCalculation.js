function add(A,B) {
  return A+B;
}
function sub(A,B) {
  return A-B;
}
function mult(A,B) {
  return A*B;
}

function myFunction() {
  var A = 5;
  var B = 5;
  Logger.log("Hello World");

  var Add = add(A,B);
  var Sub = sub(A,B);
  var Mul = mult(A,B);

  Logger.log("Addition is :" + Add);
  Logger.log("Substraction is :" + Sub);
  Logger.log("Multiplication is :" + Mul);  
}
