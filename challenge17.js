/*************************************************************************
Challenge #17- The moment you’ve all been waiting for...

Instructions
Your task is to write a function that will take in an array of toggle objects and a specific toggle name. The goal is to switch only the specific toggle, without affecting the other toggles and then return the updated array.

Don't forget that you can use your previous function from the fourth challenge to help you complete it faster!
Examples
Input:

const toggleList = [
  {
    name: "toggleA",
    isOn: false
    },
  {
    name: "toggleB",
    isOn: true
  }
]
const specificToggle = "toggleA"
    
Output:

[
  {
    name: "toggleA",
    isOn: true
  },
  {
    name: "toggleB",
    isOn: true
  }
]
  *****************************************************************************/
// ******************************* Solution  ********************************//

const switchSpecificToggle = (toggleList, specificToggle) => {
  return toggleList.map(item =>{
    if (item.name === specificToggle) {
      item.isOn = !item.isOn;
    }
    return item;
  });
  
};
const toggleList = [
  {
    name: "toggleA",
    isOn: false
  },
  {
    name: "toggleB",
    isOn: true
  }
];
const specificToggle = "toggleA";

console.log(switchSpecificToggle(toggleList,specificToggle));