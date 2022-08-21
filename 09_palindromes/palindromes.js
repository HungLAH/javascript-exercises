const palindromes = function (str) {
  // Remove all punctuation and make it case insensitive
  const clean_str = str.replace(/\W/g, "").toLowerCase();
  
  return clean_str === clean_str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
