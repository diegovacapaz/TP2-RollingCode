let text = prompt("Escriba una frase: ");
let dashedText = "";
text = text.split("");
for(let i = 0; i < text.length; i++){
    dashedText += text[i];
    if(i!==text.length-1){
        dashedText += "-";
    }
}
document.write("Su texto con guiones es: <br>"+dashedText);