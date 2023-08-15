function findReplaceString(
  s: string,
  indices: number[],
  sources: string[],
  targets: string[]
): string {
  // find all that need replace
  let map: Map<number, [number, string]> = new Map();
  const n = indices.length;
  let index: number, source: string, item: string;

  for (let i = 0; i < n; i++) {
    index = indices[i];
    source = sources[i];
    item = s.substr(index, source.length);
    if (item === source) {
      map.set(index, [item.length, targets[i]]);
    }
  }
  // do replace
  const result: string[] = [];
  let temp: [number, string] | undefined;
  const m = s.length;
  let i = 0;
  while (i < m) {
    temp = map.get(i);
    if (temp) {
      result.push(temp[1]);
      i += temp[0];
    } else {
      result.push(s[i]);
      i++;
    }
  }

  return result.join("");
}
