#
# @lc app=leetcode.cn id=447 lang=python3
#
# [447] 回旋镖的数量
#

# @lc code=start
class Solution:
    def numberOfBoomerangs(self, points: List[List[int]]) -> int:
        result = 0
        for p in points:
            m = dict()
            for q in points:
                dis = (p[0]-q[0])*(p[0]-q[0]) + (p[1]-q[1])*(p[1]-q[1])
                m[dis] = m.get(dis, 0) + 1
            for v in m.values():
                result += v * (v - 1)
        return result
# @lc code=end

