const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/// loop through the numbers and console log only the ones that are a multiple of 2

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    console.log(numbers[i]);
  }
}

const tutors = [
  { name: "John", likesCoding: true },
  { name: "Pippa", likesCoding: true },
  { name: "Poppy", likesCoding: false },
];

/// loop through the tutors and console log the one who doesn't like coding

for (let i = 0; i < tutors.length; i++) {
  if (tutors[i].likesCoding === false) {
    console.log(tutors[i].name);
  }
}
