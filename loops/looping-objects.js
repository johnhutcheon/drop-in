const cat = {
  name: "Sophie",
  job: "sleeping",
  age: 10,
  isCute: true,
};

/// loop over and get each key
/// loop over and get each value
/// we can use a for in loop here
console.log(cat.name);

for (const key in cat) {
  console.log(key);
}
