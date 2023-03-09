const text = prompt("Escriba una frase: ");
let invertedText = "";
for(let i = text.length - 1 ; i >= 0 ; i--){
    invertedText += text[i];
}
document.write(`El texto invertido es: ${invertedText}`);