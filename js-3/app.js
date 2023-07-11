// Swich cashe

// let a = 9;
// let qaliq = a % 5;
// switch (qaliq) {
//   case 1:
//     console.log("A tək ədədir");
//     break;
//   case 0:
//     console.log("A cütdür");
//     break;
//   case 2:
//     console.log("A 2-ə bölünür");
//     break;
//   case 3:
//     console.log("A dan qaliq 3 dur");
//     break;
//   default:
//     console.log("A ədədi 2,3 və ya 1-ə bölünmür");
//     break;
// }

// while,do while,for, for in, for of

// let b = 10;

// while(b>0){
//     console.log(b)
//     --b;
// }

// do {
//     console.log(b)
//     --b
// } while (b>0);
// let a = 10;
// console.log(--b);
// console.log(a--)

//  a-- -> a=a-1
// a+=2 -> a= a+2

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

let s = ["H","a","n","n","a","h"]

// console.log(s.reverse());
let arr = []

for(let i=s.length-1;i>=0;i--){
    // console.log(s[i])
    arr.push(s[i])
}

console.log(arr)