// ! Seçicilər
// ? Query Selector => CSS seçiciləri ilə eyni sintaksisə malikdir, lakin yalnız bir elementi seçir

// console.log(document.querySelector("#h1").textContent)

// ? Query Selector All => CSS seçiciləri ilə eyni sintaksisə malikdir, seçdiyi bütün elementləri seçir

// let h2Arr = document.querySelectorAll("h2")

// h2Arr.forEach((item,index,arrSelf) => {
//     console.log(`User: ${index+1} => ${item.textContent}`)
// })

// ? getElementById => id seçicisi ilə eyni sintaksisə malikdir, yalnız bir elementi seçir

// let h2 = document.getElementById("h2")

// console.log(h2)

// ! Arrey Metodları
// ? length, push, pop, shift, unshift, splice, slice,join, reverse,
// ? concat, includes, indexOf, lastIndexOf,sort, filter, map, reduce, forEach

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ? length => Arreyin uzunluğunu göstərir
// console.log(arr.length)

// ? push => Arreyin sonuna element əlavə edir
// let arr2 = arr.push(12,5)
// console.log(arr2)
// console.log(arr)

// ? pop => Arreyin sonundan element silir
// let arr2 = arr.pop()
// console.log(arr2)
// console.log(arr)

// ? shift => Arreyin əvvəlindən element silir
// let arr2 = arr.shift()
// console.log(arr2)
// console.log(arr)

// ? unshift => Arreyin əvvəlinə element əlavə edir
// let arr2 = arr.unshift(0);
// console.log(arr2);
// console.log(arr);

// ? splice => Arreyin hər hansı bir yerindən element silir
// console.log(arr);
// let arr2 = arr.splice(1,3);
// console.log(arr2);
// console.log(arr);

// ? slice => Arreyin hər hansı bir yerindən element silir
// let arr2 = arr.slice(1,3)
// console.log(arr2)
// console.log(arr)

// ? split => Stringi arreyə çevirir
// let str = "Salam Dunya";
// let arr2 = str.split(" ");
// console.log(str);
// console.log(arr2);

// ? join => Arreyi stringə çevirir
// let str2 = arr.join(", Salam");
// console.log(str2);

// ? reverse => Arreyin elementlərini tərsinə çevirir
console.log(arr);
let arr2 = arr.reverse();
console.log(arr2);