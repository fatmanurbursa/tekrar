let number1,number2,number3;
number1=Number(prompt("Lütfen işlem yapmak istediğiniz sayıyı giriniz."));
number2=Number(prompt("Lütfen işlem yapmak istediğiniz ikinci sayıyı giriniz."));
number3=Math.max(number1,number2);
console.log("Büyük sayı: "+number3);
document.write("Büyük sayı: "+number3);
console.log("Büyük sayının kökü : "+Math.sqrt(number3));

console.log("İki sayının çıkarması : "+Math.abs(number1-number2));
console.log(number1+number2);
console.log("****************************");
// ya da
console.log("Büyük sayının kökü: "+Math.sqrt(Math.max(number1,number2)));

console.log("*******************")

