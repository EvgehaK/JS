function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
}

let nums = [1, 1, 2];
let length = removeDuplicates(nums);
console.log(length);
console.log(nums.slice(0, length));
