/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  var map = new Map();
  var i = 0, len = knowledge.length;
  for (; i < len; i++) {
    map.set(knowledge[i][0], knowledge[i][1]);
  }

  i = 0; len = s.length;
  // 这里用一个新的字符串数组来存储结果 可以大幅降低原字符串原地修改的复杂度
  var arr = [];
  var key = '';
  var isGroup = false;

  for (; i < len; i++) {
    if (s[i] === '(') {
      isGroup = true;
    } else if (s[i] === ')') {
      // console.log(key);
      if (map.has(key)) {
        arr.push(map.get(key));
      } else {
        arr.push('?');
      }
      key = '';
      isGroup = false;
    } else {
      if (isGroup) {
        key += s[i];
      } else {
        arr.push(s[i]);
      }
    }

  }
  return arr.join('');
};

// console.log(evaluate("(name)is(age)yearsold", [["name", "bob"], ["age", "two"]]));
// console.log(evaluate("hi(name)", [["a", "b"]]));
// console.log(evaluate("(a)(a)(a)aaa", [["a", "yes"]]));
