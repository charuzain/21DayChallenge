/*************************************************************************
Challenge #11 -  From novice to master

Instructions
Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter. The function will then parse a message from each object, add it to an array then return the built array.

Each message is built exactly like the first challenge, so you can either use the function you already made, or rebuild it from scratch.

Examples
Input:

    const messages = [
      {origin:"MC", message:"Hello!"},
      {origin:"Shuttle", message:"Hey!"},
    ]
    
Output:

    [
      "MC: Hello!",
      "Shuttle: Hey!"
    ]  *****************************************************************************/
// ******************************* Solution  ********************************//

const parseTranscripts = (messages) => {

  const output = [];
  for (let msg of messages) {
    let string = `${msg.origin}: ${msg.message}`;
    output.push(string);
  }
  return output;
};


const messages = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
];
console.log(parseTranscripts(messages));