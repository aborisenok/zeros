module.exports = function getZerosCount(number) {
  let result = 0;
  while(number > 1){
    number = number/5;
    result = result + Math.floor(number);
  }
  return result;
}
