function removeElement(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
}

let nums = [3, 2, 2, 3];
let length = removeElement(nums, 3);
console.log(length);
console.log(nums.slice(0, length));
