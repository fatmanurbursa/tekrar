let odev=()=>{

let finishedNumber=Number(prompt("Bitiş sayısı yazınız."));


let count=0;
let sum=0;

let evenCount=0;
let evenSum=0;
let evenShow=0;

let addCount=0;
let addSum=0;
let addShow=0;

for(let i=1; i<=finishedNumber; i++) {

count++;
sum=sum+i;


if(i%2==0){
    evenCount++;
    evenSum+=i;
    console.log("çift sayılar : "+i);
   //evenShow+=i+"";

}else{
    addCount++;
    addSum+=i;
   console.log("tek sayılar : "+i);
    //addShow+=i+"";
}





};








console.log("1 ile verdiğiniz sayı arasında : "+count+" tane sayı vardır");
console.log("1'den verdiğiniz sayıya kadar sayıların toplamı : "+sum);
console.log("1 ile verdiğiniz sayı arasındaki çift sayı : "+evenCount+" tanedir");
console.log("1 ile verdiğiniz sayı arasındaki çift sayılarınh toplamı : "+evenSum);
console.log("1 ile verdiğiniz sayı arasında : "+addCount+" tane tek sayı vardır");
console.log("1 ile verdiğiniz sayı arasındaki tek sayıların toplamı : "+addSum);








}



odev();