// simple
// referance

// let a = [3, 5, 7];
// let b=[...a];
// a[0]=2
// console.log(a,b);
// let b = 5;
// console.log(b**3)

// ! String + number
// let a = "1"
// let b = 5;

// console.log("a+b=",a+b)
// console.log("b-a=",b-a)

// ! 1) if,else if,else
// ! 2) parms ? {} : {}
// ! 3) swich case

// ? Həm qiymətinə görə həmdə tipinə görə eyni olduğunu yoxlamaq üçün ===
// ? Yanlız qiymətini yoxlmaq üçün isə ==

// if (a < 10) {
//   console.log("a kicikdir 10 dan");
// } else if (a === 10) {
//   console.log("a berbaberdi 10-na");
// }  else if (a == 15) {
//   console.log("a beraberdi 15-e");
// }else {
//   console.log("verilen sertleri odemir");
// }

// ? Inkar operatoru(NOT) ! 1=0,0=1;true=false,false=true
// let a = 1;

// if(a <= 10){
//   console.log("a 10dan ferqlidir")
// }else{
//   console.log("a 10 na beraberdir")
// }

// ? Eyni vaxtda 2 sert vermek
// ? && - AND(və) true<->true = true, true<->false = false,false<->true=false, false<->false = false
// ? && - AND(və) 1 <-> 1 = 1,1<->0 = 0,0<->1 = 0,0<->0 = 0
// let a = 15;
// if (a >= 10 && a <= 15  && a!==0) {
//   console.log("a 10 dan boyukdur 15 ise kicik")
// }else{
//   console.log("a ne 10 ile 15 araqlinda deyil")
// }

// ? Ən az 1 şərt ödənsin
// ? || - OR(və ya)  true<->true = true, true<->false = true,false<->true=true, false<->false = false
// ? || - OR(və ya)  1 <-> 1 = 1,1<->0 = 1,0<->1 = 1,0<->0 = 0

// let b = 16

// if(b<15){
//   console.log("b 15 den kicikdir")
// }else if(b>30){
//   console.log("b 30 dan boyukdur")
// }
// else{
//   console.log("b 15 ile 30 aralqindadir")
// }
// let a = 9;
// a < 10 ? (console.log("a 10 dan kicikdir")) : (console.log("a 10dan boyukdur"));

// ! alert, prompt, confirm

if (confirm("Admin kimi daxil olmaq isteyirsiniz? ")) {
  let login = prompt("parolu daxil edin");
  if (Number(login) === 1234) {
    alert("xos geldin admin");
  } else {
    alert("Parol yanlisidr");
  }
} else {
  let user = prompt("Adinizi yazin");
  alert(`${user} xos geldin`);
}
