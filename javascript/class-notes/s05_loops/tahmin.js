//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let hak = 5;

const rasgele = Math.round(Math.random() * 100);

console.log(rasgele);

do {
  const tahmin = +prompt("Let's guest between 0-100");
  hak -= 1;
  if (tahmin == rasgele) {
    console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
    break;
  } else if (tahmin < rasgele) {
    console.log("Arttir📤");
  } else {
    console.log("Azalt📥");
  }
} while (hak > 0);

if (hak === 0) {
  console.log("GAME OVER");
}
