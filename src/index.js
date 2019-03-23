module.exports = function check(str, bracketsConfig) {
  let replacement='';
  let n = 0 ;
  while (n < bracketsConfig.length) {
    n = 0;
    for (let i = 0; i < bracketsConfig.length; i++) {
      let br = bracketsConfig[i][0] + bracketsConfig[i][1];
      replacement = str.replace(br, "");
      if (str == replacement) {
        n++;
      }
      str = replacement;
    }
  }
  return str.length == 0;
  // your solution
}
