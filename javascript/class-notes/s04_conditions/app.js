// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

//? Ornek1: Console'dan girilen bir sayinin pozitif , negatif
//?veya o oldugu

// const sayi = Number(prompt("Enter a number: "));

// if (sayi > 0) {
//   console.log(`${sayi} pozitiftir`);
// } else if (sayi == 0) {
//   console.log(`${sayi} = 0`);
// } else {
//   console.log(`${sayi} negatiftir`);
// }

//console.log(sayi, typeof sayi);

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

const n1 = prompt("Number1: ");
const n2 = prompt("Number2: ");
const n3 = prompt("Number3: ");

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} is biggest number`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} is biggest number`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} is biggest number`);
// }

let enBuyuk = n1;
if (n2 > enBuyuk) {
  enBuyuk = n2;
}

if (n3 > enBuyuk) {
  enBuyuk = n3;
}
console.log(`${enBuyuk} en büyük sayıdır.`);
