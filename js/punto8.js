let maxNumber = parseInt(prompt("Ingrese un número entre 0 y 50: "));
while(isNaN(maxNumber) || maxNumber < 1 || maxNumber > 50){
    maxNumber = parseInt(prompt("ERROR, ingrese un número entre 0 y 50: "));
}
let counter = 0;
for(let i = 1; i<=maxNumber; i++){
    counter = 1;
    while(counter <= i){
        document.write(counter);
        counter++;
    }
    document.write("<br>");
}