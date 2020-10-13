module.exports = function check(str, bracketsConfig) {
  let str1 = [];
  let str2 = str.split(', ').join('');

  while (str2 !== str1) {
str1 = str2;
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    str2 = str2.split(bracketsConfig[i][0] + bracketsConfig[i][1]).join('');
  }

  }
  
let res = (str2 === '') ? true : false;
  return res;
}
