// // [52,53,12,6,91]

// function findArrMax(paramsArr){
//     let newArr = [];
//     let arr = [...paramsArr];
//     let maxNumber=0;
//     for(let i=0;i<paramsArr.length;i++){
//         debugger;
//         let number = paramsArr[i];
//         maxNumber = 0
//         for(let b=0;b<arr.length;b++){
//             debugger;
//             if(maxNumber<=arr[b]){
//                 maxNumber=arr[b];
//             }
//         }
//         debugger;
//         newArr.push(maxNumber)
//         let findeIndex = arr.indexOf(maxNumber)
//         arr.splice(findeIndex,1)
//     }
//     console.log(newArr)
// }

findArrMax([52, 53, 12, 6, 91,253,1,678,9]);

function findArrMax(paramsArr) {
  let newArr = [],
  arr=[...paramsArr],
    maxNumber;

  for (let i = 0; i < paramsArr.length; i++) {
    maxNumber = 0;
    for(let b=0;b<arr.length;b++){
        if(maxNumber<arr[b]){
            maxNumber=arr[b]
        }
    }  
    newArr.push(maxNumber);
    arr.splice(arr.indexOf(maxNumber),1)
  }
  console.log(newArr)
}
