// Your task is to write a function that will take in an array of lunch
//  choices(strings) and return the choice as a string with the most votes.

// There is always two lunch choices, and always an odd number of astronauts!

// Input:

const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich",
  "Ice Cream Sandwich"
];

// Output:
//Chicken Dinner
const chooseLunchWinner = (listOfChoices) => {
  let count = {};
  for (let choice of listOfChoices) {
    count[choice] ? count[choice] = count[choice] + 1 : count[choice] = 1;

  }
  const newArray = Object.entries(count);
  console.log(newArray);
};
console.log(chooseLunchWinner(listOfChoices));