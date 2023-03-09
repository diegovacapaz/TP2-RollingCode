let maxNumber = parseInt(prompt("Ingrese un número entre 0 y 50: "));
while(isNaN(maxNumber) || maxNumber < 1 || maxNumber > 50){
    maxNumber = parseInt(prompt("ERROR, ingrese un número entre 0 y 50: "));
}
let counter = maxNumber;
for(let i = maxNumber; i>=1; i--){
    counter = i;
    while(counter >= 1){
        document.write(i);
        counter--;
    }
    document.write("<br>");
}