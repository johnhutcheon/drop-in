const biscuits = ["hobnob", "cookie", "bourbon", "jaffa cake"];

// loop over the biscuit array and console log "A great biscuit is a...." for every biscuit
// we can use a for of loop here

for (const biscuit of biscuits) {
  const value = biscuit;
  console.log(`A great biscuit is a ${value}`);
  console.log("A great biscuit is a " + value);
}
