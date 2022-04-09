/*************************************************************************
Challenge #15 - A fated reunion


Instructions
Your task is to write a function that will take in a launch date and a mission name as strings. Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.

Examples
Input:

    const launchDate = "2021-12-12"
    const fakeToday = "2021-12-01"
    const missionName = "Moon visit"
    
Output:

    {
      missionName = "Moon visit",
      daysRemaining = 11
    }
  *****************************************************************************/
// ******************************* Solution  ********************************//
const timeRemaining = (launchDate, missionName, fakeToday) => {
  const output = {};
  const today =  fakeToday || new Date();
  const timestamp1 = new Date(launchDate).getTime();
  const timestamp2 = new Date(today).getTime();
  const timeDifference = (timestamp1 - timestamp2) / 1000;
  const dayDifference = timeDifference / (24 * 60 * 60);
  output.missionName = missionName;
  output.daysRemaining = dayDifference;
  return output;
};

const launchDate = "2021-12-12";
const fakeToday = "2021-12-01";
const missionName = "Moon visit";

console.log(timeRemaining(launchDate, missionName, fakeToday));
