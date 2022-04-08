/*************************************************************************
Challenge #13 - One gauge at a time

Instructions
Write a function that will take in an array of objects containing a gauge reading (min, max, current). The function will then check if the gauge current value is within spec (between min and max) and check the next gauge. If one of the values is outside the spec, return false, if they are all ok, return true.

Examples
Input:
    const gaugeList = [
      {
        current:0.4,
        min:0.1,
        max:0.9
      },
      {
        current:1.2,
        min:0.1,
        max:0.6
      }
    ]
    
Output:
    false
  *****************************************************************************/
// ******************************* Solution  ********************************//
const checkAllGauges = (gaugeList) =>gaugeList.every(item =>item.max >= item.current >= item.min);

// const checkAllGauges = (gaugeList) => {
// for(let gauge of gaugeList){
//     if(gauge.current >= gauge.min && gauge.current<=gauge.max){
//     continue;
//     }
//   else if(gauge.current <= gauge.min || gauge.current>=gauge.max){
//     return false;
//   }
//   }
//   return true;
// }

const gaugeList = [
  {
    current:0.4,
    min:0.1,
    max:0.9
  },
  {
    current:0.4,
    min:0.2,
    max:0.9
  },
  {
    current:1.2,
    min:0.1,
    max:0.6
  }
];
console.log(checkAllGauges(gaugeList));