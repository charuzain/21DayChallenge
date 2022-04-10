/*************************************************************************
Challenge #18 - Bon Appetit

Instruction:
Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.
There is always two lunch choices, and always an odd number of astronauts!
Examples

Input:
    const listOfChoices = [
      "Chicken Dinner",
      "Chicken Dinner",
      "Chicken Dinner",
      "Ice Cream Sandwich",
      "Ice Cream Sandwich"
    ]
Output:
    ChickeDinner

*****************************************************************************/
// ******************************* Solution  ********************************//
const chooseLunchWinner = (listOfChoices) => {
  const countObject = {};
  for (let choice of listOfChoices) {
    !countObject[choice] ? countObject[choice] = 1 : countObject[choice] += 1;
  }
  
  const entries = Object.keys(countObject);
  let max = entries[0];

  for (let key in countObject) {
    if (countObject[key] > countObject[max]) {
      max = key;
    }
  }
  return max;
};

const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich",
  "Ice Cream Sandwich"
];
console.log(chooseLunchWinner(listOfChoices));