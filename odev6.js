const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const deletekey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);
clear.addEventListener("click",clearItem);
del.addEventListener("click",deleteItem);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
};

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);};

function clearItem(e){
    sessionStorage.clear();};

    localStorage.clear();
    localStorage.setItem("programlama","bilgisayar");
    localStorage.setItem("yazılım","java");

    const value=localStorage.getItem("programlama");
    console.log(value);
    console.log(typeof value);

    console.log(localStorage.getItem("klavye"));



    const kosul=localStorage.getItem("klavye");
    if(kosul==null){
        console.log("Sorgulanan veri bulunamadı.")
    }else{
        console.log("Sorgulanan veri bulundu."+ kosul)
    }