const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  let a = 0, b = 1, temp;
  for (let i = 0; i < num; i++) {
    temp = a;
    a = a + b;
    b = temp;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
