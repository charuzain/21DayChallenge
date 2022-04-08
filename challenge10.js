/*************************************************************************
Challenge #10 - Flying solo


Instructions
Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.

Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.



Examples
Input:

    const exampleEntries = [
      {
        temperature:0,
        weather:"sunny",
        windDirection: "NNE",
        windSpeed:24
      },
      {
        temperature:10,
        weather:"cloudy",
        windDirection: "NNE",
        windSpeed:9
      }
    ]
    
Output:

   17
    
  *****************************************************************************/
// ******************************* Solution  ********************************//

const averageWindSpeed = (weatherEntries) => {
  let sum = 0;
  for (let entry of weatherEntries) {
    sum = sum + entry.windSpeed;
  }
  return Math.round(sum / weatherEntries.length);
};


const exampleEntries = [
  {
    temperature:0,
    weather:"sunny",
    windDirection: "NNE",
    windSpeed:24
  },
  {
    temperature:10,
    weather:"cloudy",
    windDirection: "NNE",
    windSpeed:9
  }
];

console.log(averageWindSpeed(exampleEntries));