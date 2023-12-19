const tutors = ["John", "Saleh", "Pippa", "Jodie"];

/// console log Saleh
console.log(tutors[1]);

/// console.log Jodie
console.log(tutors[3]);

// console.log John
console.log(tutors[0]);

// remove Jodie
tutors.pop();
console.log(tutors);

// remove John
tutors.shift();
console.log(tutors);

// add John at the end
tutors.push("John");
console.log(tutors);

// add Jodie at the front
tutors.unshift("Jodie");
console.log(tutors);
