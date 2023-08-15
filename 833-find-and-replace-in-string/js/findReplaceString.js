/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  // find all that need replace
  // 寻找所有需要被替换的
  let map = new Map();
  const n = indices.length;
  let index, source, item;

  for (let i = 0; i < n; i++) {
    index = indices[i];
    source = sources[i];
    item = s.substr(index, source.length);

    if (item === source) {
      map.set(index, [item.length, targets[i]]);
    }
  }
  // do replace
  const result = [];
  const m = s.length;
  let i = 0;
  while (i < m) {
    item = map.get(i);
    if (item) {
      result.push(item[1]);
      i += item[0];
    } else {
      result.push(s[i]);
      i++;
    }
  }

  return result.join("");
};
