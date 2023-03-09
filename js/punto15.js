const text = prompt("Escriba una frase: ").toLowerCase();
let vowels = 0;
for(let i = 0; i < text.length; i++){
    if(text.charAt(i) === "a" || text.charAt(i) === "e" || text.charAt(i) === "i" || text.charAt(i) === "o" || text.charAt(i) === "u"){
        vowels++;
    }
}
document.write("Su texto tiene "+ vowels +" vocales.");