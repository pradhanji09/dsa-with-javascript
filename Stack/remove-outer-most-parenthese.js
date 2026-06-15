/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = [];
  let santizedStr = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      santizedStr += stack.length === 0 ? "" : char;
      stack.push(char);
    } else {
      stack.pop(char);
      santizedStr += stack.length === 0 ? "" : char;
    }
  }

  return santizedStr;
};
