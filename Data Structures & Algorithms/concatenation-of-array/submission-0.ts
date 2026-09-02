class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans: number[] = [];
        let double: number = 1;
        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i]);
            if (i === nums.length -1 && double > 0) {
                i = -1;
                double--;
            }
        }
        return ans;
    }
}
