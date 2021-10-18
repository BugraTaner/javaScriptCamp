console.log("Merhaba Kodlama.io")


// Js type safe değildir
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)
//array
//camleCasin 


let konutKrediler = ["Konut Krediler" , "Emlak Konut Krediler" , "Kamu Konut Krediler" , "Özel Konut Krediler"]
console.log("<ul>")
for(let i = 0; i<konutKrediler.length;i++){
    console.log("<li>"+konutKrediler[i]+"</li>")
}
console.log("</ul>")