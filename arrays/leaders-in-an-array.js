function leadersBruteForce(nums) {
  const arr = [];

  for (let index = 0; index < nums.length; index++) {
    let leader = true;
    const element1 = nums[index];

    for (let j = i + 1; j < nums.length; j++) {
      const element2 = nums[j];

      if (element2 > element1) {
        leader = false;
        break;
      }
    }

    if (leader) {
      arr.push(element1);
    }
  }
  return arr;
}

function leaders(nums) {
  const arr = [];
  let greatestSoFar = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i];

    if (element > greatestSoFar) {
      arr.push(element);
      greatestSoFar = element;
    }
  }
  return arr.reverse();
}

const res = leaders([10, 22, 12, 3, 0, 6]);
console.log(res);
