class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let max: number = -1;

        for (let i = arr.length -1; i >= 0; i--) {
            let newMax: number = Math.max(max, arr[i]);
            arr[i] = max;
            max = newMax;
        }
        return arr;
    }
}
