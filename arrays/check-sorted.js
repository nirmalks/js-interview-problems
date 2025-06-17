function checkIfSorted(nums) {
    let countPreviousNumberGreaterThanCurrent = 0;
    let n = nums.length;
    for(let i = 0; i < nums.length ; i++) {
        if(nums[i] > nums[(i+1) % n] ) {
            countPreviousNumberGreaterThanCurrent++;
        }
    }

    return countPreviousNumberGreaterThanCurrent <= 1;
};