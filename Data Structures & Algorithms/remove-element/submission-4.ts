class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                nums.splice(i, 1, 999);
            }
            console.log(nums);
        }
        nums.sort();
        return nums.filter((num) => num !== 999).length;
    }
}
