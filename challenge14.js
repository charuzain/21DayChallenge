/*************************************************************************
Challenge #13 - List-o-mania

Instructions
(This challenge is worth 10 points)

Your task is to write a function that will take in an array of objects containing switches. The function will change the value of the isOn property to true for every switch in the list, and then return the updated array.

You can use the previous switchToggle function from the fourth challenge, however be careful, since we want all of them on, not toggled!

Examples

Input:
  const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]

Output:

[
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:true
	},
]
  *****************************************************************************/
// ******************************* Solution  ********************************//

const switchAllTogglesOn = (toggleList) => {
  for (let list of toggleList) {
    if (!list.isOn) {
      list.isOn = true;
    }
  }
  return toggleList;
};



const toggleList = [
  {
    name:"Air",
    isOn:true
  },
  {
    name:"Radio",
    isOn:false
  },
];

console.log(switchAllTogglesOn(toggleList));
