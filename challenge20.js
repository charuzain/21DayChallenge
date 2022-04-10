/*************************************************************************
Challenge #20 - Incoming Task: Confirm Re-Entry!

Instruction:

Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true.

Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values.
Input:
    const speed = 40
  const missionData = {
    astro:["...","..."],
    bio:["..."],
    physics:["..."]
  }

  const checks = {
    maxSpeed:50,
    minSpeed:20,
    dataEntries:{
      astro:3,
      bio:1,
      physics:1
    }
  }
   
Output:
  false // Not the same amount of entries

*****************************************************************************/
// ******************************* Solution  ********************************//

const confirmReentryPlans = (speed, missionData, checks) => {
  // console.log(missionData.astro.length);
  if (speed >= checks.minSpeed && speed <= checks.maxSpeed && missionData.astro.length === checks.dataEntries.astro && missionData.bio.length === checks.dataEntries.bio && missionData.physics.length === checks.dataEntries.physics) {
    return true;
  }
  return false;
};

const speed = 40;
const missionData = {
  astro:["...","...","..."],
  bio:["..."],
  physics:["..."]
};

const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:3,
    bio:1,
    physics:1
  }
};

console.log(confirmReentryPlans(speed,missionData,checks));
