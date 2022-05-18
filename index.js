function fibIt(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}


function fibRec(n) {
  if (n <= 1) {
    return n;
  }
  return fibRec(n - 1) + fibRec(n - 2)
}


module.exports = {
  fibIt,
  fibRec
}
