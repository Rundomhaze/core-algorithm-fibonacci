function fiboIteration(num) {
  let arrayRes = [0, 1]
  for (let i = 2; i <= num; i++) {
    arrayRes.push(arrayRes[i - 2] + arrayRes[i - 1]);
  };
  return arrayRes[num];
};

function fiboRecursion(num) {
  if(num <= 1){
    return num
  }
  return fiboRecursion(num - 2) + fiboRecursion(num - 1)
};

module.exports = {
  fiboIteration,
  fiboRecursion
}
