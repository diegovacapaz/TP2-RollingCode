const text = prompt("Escriba una frase: ").toLowerCase();
for(let i = 0; i < text.length; i++){
    if(text.charAt(i) === "a" || text.charAt(i) === "e" || text.charAt(i) === "i" || text.charAt(i) === "o" || text.charAt(i) === "u"){
        document.write("La primera vocal esta en la posicion: " + i);
        break;
    }
}