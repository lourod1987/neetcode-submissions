class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count: number = 0;
        let total: number = 0;

        for (let i = 0; i < nums.length; i++) {
           if (nums[i] === 1) {
            count++;
           } else {
            if (count > total) {
                total = count;
            }
            count = 0;
           }
        }

        if (count  > total) {
            total = count;
        }
        return total;
    }
}
