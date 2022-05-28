//Minimum//

//First task//

let a = 0.1;
let b = 0.2;
let c = a + b;
console.log(c);

//Second task//

let d = 2;
let e = '1';
console.log(d + +e);

//Third task//

let gb = prompt('Вкажіть обсяг флешки в ГБ');
let mb = (gb * 1024) / 820;
alert('На флешку поміститься' + ' ' + Math.trunc(mb) + " " + 'файли/файлів обсягом 820 МБ');

//Norma//

//First task//

let walletCash = prompt('Введіть суму грошей у вашому гаманці');
let chocoPrice = prompt('Введіть ціну однієї плитки шоколаду');
let chocoAmount = walletCash / chocoPrice;
let surrender = walletCash % chocoPrice;
alert('Ви можете придбати' + ' ' + Math.trunc(chocoAmount) + ' ' + 'плиток шоколаду' + ' ' + 'у вас залишиться' + ' ' + surrender + ' ' + 'грн здачі');

//Second task//

//345

let getNumber = prompt('Введіть своє число');
let firstNumber = getNumber % 10; // 5
let secondNumber = getNumber / 10; // 34.5
let secondNumber2 = Math.trunc(secondNumber); // 34
let secondNumber3 = secondNumber2 % 10; // 4
let thirdNumber = getNumber / 100; //3.45
let thirdNumber2 = Math.trunc(thirdNumber); // 3
alert(firstNumber + '' + secondNumber3 + '' + thirdNumber2);

//Maximum//

//First task//

let suma = prompt('Введіть вашу суму');
let percenrOfSuma = suma / 100;
let oneMounthPercent = 5 / 12;
let sumaOneMounth = percenrOfSuma * oneMounthPercent;
sumaOneMounth = sumaOneMounth * 2;
alert('За 2 місяці набіжить' + ' ' + sumaOneMounth);

//Second task//

2 && 0 && 3 // виведе 0

2 || 0 || 3 //виведе 2

2 && 0 || 3 // виведе 3

