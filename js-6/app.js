// function sayHello(paramName){
//     console.log(`Salam ${paramName}`)
// }

// sayHello("Tural")
// sayHello("Fatimə")

// console.log("Salam Tural")
// console.log("Salam Fatimə")
// console.log("Salam Cavid")

// for(let i=0;i<5;i++){
//     console.log(`index: ${i}`)
//     // console.log(i)
// }

// let cel = 20;
// let f;
// f = (cel * 9) / 5 + 32;
// console.log(f);

// let cel2 = 20;
// let f2;
// f2 = (cel2 * 9) / 5 + 32;
// console.log(f2);

// function calFahrenheit(cel) {
//   let f;
//   f = (cel * 9) / 5 + 32;
//   //   console.log(f)
//   return f;  
//   // calFahrenheit(cel) => return f
// }

// let fahrenheit = calFahrenheit(10)
// console.log(fahrenheit);


// function cal(a,b,c){
//     return a+b+c;
// }

// console.log(cal(5,3))


let arr = [5,47,2667,24,80,95];
let arr2=[]

sumArrMinMax(arr)

function sumArrMinMax(a){
    sortArr(a)
    console.log(a[0] + a[a.length-1])
}


// I - Sort
function sortArr(paramArr){
    paramArr.sort((a,b) => a-b)
    return paramArr;
}

