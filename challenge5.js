 
/*************************************************************************
Challenge #1 - You get a job, she gets a job, he gets a job
INSTRUCTIONS
After finishing the task with 20 minutes to spare, you walk back to your workspace from the cafeteria. Satiated but hungry to learn more about your new role at SPELL, you report to your supervisor and present the answer you came up with.
Elated about your confidence and problem-solving abilities, your supervisor enthusiastically assigns you a new task. Since you’re progressing so fast, pre-flight preparations have been accelerated.

Now that a crew has been selected, you need to write a new function that will assign a job to each astronaut.Just keep in mind that you need to return the astronaut after updating the job property.
EXAMPLE
Input:
    const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    }
Output:
 const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut",
      job:"Shuttle DJ"
    }
*****************************************************************************/
// ******************************* Solution  ********************************//

const addJobToAstronaut = (astronaut, job) => {
  astronaut.job = job;
  return astronaut;
};

const exampleAstronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
};

console.log(addJobToAstronaut(exampleAstronaut ,"Shuttle DJ" ));

