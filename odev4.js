

let arrayRandom=()=>{

//1o elemanlı rastgele dize oluşturma
let arr=[];

for(let i=0; i<10; i++){
    arr[i]=Math.round(Math.random()*9+1);
    console.log(arr[i]);
}
 return arr;








}

arrayRandom();

console.log("****************");

//tek olanları bulalım:

let arr=arrayRandom();
let count=0;

for (let i=0; i<arr.length; i++){

if(arr[i]%2==1){

    let star=arr[i]+5;
    console.log(arr[i]+" ----> "+star);

count++;

}

}
console.log("bu şarta uyan : "+count+ " tane sayı vardır.");

console.log("*****************");

//ikinci yol:

console.log("********************");


let count2=0;
 arr.filter((value)=>{
    return value%2==1;
 }).map((value)=>{
    return value+5;
 }).forEach((value,index)=>{
    console.log(`Value : ${value} Index : ${index}`);
    count2++;
 });
 console.log(count2);