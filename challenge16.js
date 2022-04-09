/*************************************************************************
Challenge #16 - 21 Questions

Instructions
Your task is to write a function that will take in two position objects. Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.

Each object contains the altitude in meters, and a time stamp in seconds.

Examples
Input:

  const firstPosition = {
    time: 1637074462,
    altitude: 1100
  }
  const secondPosition = {
    time: 1637074558,
    altitude: 2200
  }
    
Output:

  11.5
	

  *****************************************************************************/
// ******************************* Solution  ********************************//


const getAverageSpeed = (firstPosition, secondPosition) => {
  const altitueDifference = secondPosition.altitude - firstPosition.altitude;
  const timeDifference =  secondPosition.time - firstPosition.time;
  return Math.round(altitueDifference / timeDifference * 10) / 10;
};
const firstPosition = {
  time: 1637074462,
  altitude: 1100
};
const secondPosition = {
  time: 1637074558,
  altitude: 2200
};
console.log(getAverageSpeed(firstPosition, secondPosition));