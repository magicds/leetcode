# 977 有序数组的平方

|  Category  |  Difficulty   |        Tags         |
| :--------: | :-----------: | :-----------------: |
| algorithms | Easy (69.80%) | dynamic-programming |

给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序。

**示例 1：**

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

**示例 2：**

```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

**提示：**

- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- `nums` 已按 **非递减顺序** 排序

**进阶：**

- 请你设计时间复杂度为 `O(n)` 的算法解决本问题

## 解决方案

第一思路，排序即可，代码非常简单

```js
var sortedSquares = function (nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  return nums.map((item) => item ** 2);
};
```

| 提交结果                                                     | 执行用时 | 内存消耗 | 语言       | 提交时间         | 备注     |
| :----------------------------------------------------------- | :------- | :------- | :--------- | :--------------- | :------- |
| [通过](https://leetcode-cn.com/submissions/detail/274075266/) | 88 ms    | 47.2 MB  | JavaScript | 2022/02/27 11:25 | 添加备注 |

但时间复杂度为 `O(nlogn)`。

由于时间复杂度要求为 `O(nlogn)` ,

由于数组有序，如果找到正负数的分界点，那么只用遍历一次即可，负数部分向前遍历，正数部部分向后遍历，依次比较，取当前较小的值逐个加入队列即可， 时间复杂度为 `O(n)` 。

代码如下：

```js
var sortedSquares = function (nums) {
  // 二分法找正负数的分界点 t 为第一个大于等于0的下标
  var i = 0, len = nums.length, j = len - 1, mid = 0;
  var t = -1;
  while (i < j) {
    mid = ((j - i) >> 1) + i;
    if (nums[mid] < 0) {
      i = mid + 1;
      if (nums[mid + 1] >= 0) {
        t = mid + 1;
        break;
      }
    } else {
      j = mid;
    }
  }
  if (t === -1) {
    // 全部整数或全部负数
    t = i === 0 ? i : len;
  }
  if (t === 0) {
    return nums.map((item) => item ** 2);
  }
  // 以 t 为分割 两边遍历
  var res = new Array(len);
  i = t - 1;
  j = t;
  var index = 0;
  var a, b;
  while (i >= 0 || j < len) {
    if (i < 0) {
      res[index] = nums[j] ** 2;
      j++;
    } else if (j === len) {
      res[index] = nums[i] ** 2;
      i--;
    } else {
      a = nums[i] ** 2;
      b = nums[j] ** 2;
      if (a < b) {
        res[index] = a;
        i--;
      } else {
        res[index] = b;
        j++;
      }
    }
    index++;
  }
  return res;
};

```
