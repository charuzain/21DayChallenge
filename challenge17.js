// Your task is to write a function that will take in an array of toggle objects and a specific toggle
//  name.The goal is to switch only the specific toggle, without affecting the other
//  toggles and then return the updated array.

// Input:
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

// Output:

// [
//   {
//     name: "toggleA",
//     isOn: true
//   },
//   {
//     name: "toggleB",
//     isOn: true
//   }
// ]

const switchSpecificToggle = (toggleList, specificToggle) => {

  const newArray = toggleList.map((item)=> 
  {if(item.name===specificToggle && !item.isOn){
      item.isOn = true;
      return item;
  }
  
   else{return item}
  })
return newArray
}

console.log(switchSpecificToggle(toggleList,specificToggle))