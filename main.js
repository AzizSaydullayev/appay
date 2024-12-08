let fruc=["olam","banan","olcha","gilos"]

alert(`Mevalar savtda ${fruc} ta`)

let a=confirm("Mevalar qosinmi")

if ( a == true){
fruc.pop()
alert(`Mevalar savatda ${fruc} ta`)
console.log(fruc);
}else{
    alert(`Mevalar savatda ${fruc} ta`)
    console.log(fruc);
}