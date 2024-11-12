function ehliyetAlabilmeDurumu(name,dogumYili){

let date=new Date().getFullYear();
let yas=date-dogumYili;

if(yas>=18){
    console.log(`${name} ehliyet alabilirsiniz.`)
}else{
    console.log(`${name} ehliyet alamazsınız. Ehliyet alabilmeniz için 18 yaşını doldurmanız gerekmektedir.`)
}



}

ehliyetAlabilmeDurumu("Esra",2002);
ehliyetAlabilmeDurumu("Fatmanur",1998);
ehliyetAlabilmeDurumu("Çiğdem",2010);