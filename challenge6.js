/*************************************************************************
Challenge #6 - Another day, another challenge

Congratulating you on a job well done on the last task, your supervisor wastes no time in assigning you another one. This time, you’ll need to assign specific astronauts to a roster (list of astronauts).
Essentially, the function needs to do two things: add an astronaut to the roster and return the updated array.
Create a function that takes in a roster array and an astronaut object. The function will add the astronaut to the roster and return the updated roster.
Input:

    const exampleRoster = []
    const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    }

      const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut"
      }
    ]
    *****************************************************************************/
// ******************************* Solution  ********************************//
const addAstronautToRoster = (roster, astronaut) => {
  roster.push(astronaut);
  return roster;
  
};
  

const exampleRoster = [];
const exampleAstronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
};

console.log(addAstronautToRoster(exampleRoster,exampleAstronaut));