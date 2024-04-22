const avengers = [
    {
     name: "Iron Man",
     realName: "Tony Stark",
     age: 48,
     primaryPower: "Genius-level intellect" 
    }, 
    { 
      name: "Captain America",
      realName: "Steve Rogers", 
      age: 100, 
      primaryPower: "Super Strength" 
    }, 
    { 
      name: "Thor Odinson", 
      age: 1500, 
      primaryPower: "Lightning" 
    }, 
    { 
      name: "Hulk",
      realName: "Bruce Banner",
      age: 49, 
      primaryPower: "Super Strength" 
    }, 
    { 
      name: "Black Widow",
      realName: "Natasha Romanoff",
      age: 34, 
      primaryPower: "Expert spy" 
    }, 
    { 
      name: "Hawkeye",
      realName: "Clint Barton", 
      age: 35, 
      primaryPower: "Master archer"
    }
  ];

console.log("Heroes in Deck: ")

//loop to pull Super Hero names of The Avengers, then print it to console
  for (let i of avengers) {
    console.log(i.name);

//loop to find all Avengers with Super Strength, and print Super Hero names to console
console.log("Who has Super Strength? Answer: ");
for (let power of avengers) {
  if (power.primaryPower == "Super Strength") {
    console.log(power.name)
  };
}; 

//loop to find out who should retire based on them being over 50 years old, then print Super Hero name and age to console
console.log("Who needs to retire? Answer:")
for (let old of avengers) {
  if (old.age >= 50) {
    console.log(old.name + ", " + "age: " old.age)
  }
}break;
} 