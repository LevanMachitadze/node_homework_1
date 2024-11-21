// 1)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function calculateArray(nums) {
  const positiveCount = nums.filter((num) => num > 0).length;
  const negativeSum = nums
    .filter((num) => num < 0)
    .reduce((sum, num) => sum + num, 0);
  return [positiveCount, negativeSum];
}

console.log(calculateArray(nums));

// 2)
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function processArray(nums2) {
  return nums2.map((num) => num * 2).filter((num) => num % 3 === 0);
}

console.log(processArray(nums2));

// 3)

const findSmallestSum = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
};

console.log(findSmallestSum([19, 5, 42, 2, 7, 80]));

// 4)

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

function getLargerNumbers(arr1, arr2) {
  return arr1.map((num, index) => Math.max(num, arr2[index]));
}

console.log(getLargerNumbers(arr1, arr2));

//  5-1)

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

const allNames = characters.map((char) => char.name);
console.log(allNames);

// 5-2)

const firstNames = characters.map((char) => char.name.split(' ')[0]);
console.log(firstNames);

// 5-3)

const groupedByEyeColor = characters.reduce((acc, char) => {
  acc[char.eye_color] = (acc[char.eye_color] || 0) + 1;
  return acc;
}, {});

console.log(groupedByEyeColor);
