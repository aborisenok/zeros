module.exports = function getZerosCount(number) {
  var result = 0;
  while(number > 1){
    number = number/5;
    result = result + Math.floor(number);
  }
  return result;
}
