/*************************************************************************
Challenge #9 - Media mania!


Instructions
Your task is to create a function that will take in an array representing the roster of astronauts, and return an array containing the jobs of each astronaut as a string.

In other terms, for each astronaut of the roster, you want to take the job and add it to a list, then return said list.



Examples
Input:

    const exampleRoster = [
      {
        ...
        job:"Shuttle DJ"
      },
      {
        ...
        job:"Space Cook"
      }
    ]
    
Output:

    ["Shuttle DJ", "Space Cook"]
    
  *****************************************************************************/
// ******************************* Solution  ********************************//

const listAstronautJobs = (roster) => roster.map(astronuat => astronuat.job);




const exampleRoster = [
  {
    fname: "arham",
    job:"Shuttle DJ"
  },
  {
    fname: "jain",
    job:"Space Cook"
  }
];
console.log(listAstronautJobs(exampleRoster));