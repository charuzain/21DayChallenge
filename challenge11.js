/*************************************************************************
Challenge #11 - Flying solo

Instructions
Your task is to write a function that will take in a list of platforms and a date as a string. That function will update the date property on the first platform with an empty date and then return the platform list.

Examples
Input:

    const missionDate = "2021-12-12"
    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:undefined
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ]
    
Output:

    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:"2021-12-12"
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ]
    
      
    
  *****************************************************************************/
// ******************************* Solution  ********************************//


const bookFreePlatform = (platformList, missionDate) => {
  const emptyDate = platformList.find(item =>  !item.bookDate);
  emptyDate.bookDate = missionDate;
  return platformList;

};

const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate:undefined
  },
  {
    name:"Platform C",
    bookDate:undefined
  },
];

console.log(bookFreePlatform(platformList ,"2021-12-12"));