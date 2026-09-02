class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let arr: number[] = [];
        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === '+') {
                arr.push(arr[arr.length - 1] + arr[arr.length -2]);
            } else if (operations[i] === 'D') {
                arr.push(arr[arr.length - 1] * 2);
            } else if (operations[i] === 'C') {
                arr.pop();
            } else if (typeof Number(operations[i]) === 'number') {
                arr.push(Number(operations[i]));
            }
        }
        return arr.reduce((sum, current) => sum + current, 0);
    }
}
