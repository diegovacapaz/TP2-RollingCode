let ages = [];
let names = [];
names[0] = prompt("Ingrese un primer nombre: ");
ages[0] = parseInt(prompt("Ingrese la edad: "));
while(isNaN(ages[0])||ages[0] < 0||ages[0] > 120){
    ages[0] = parseInt(prompt("ERROR, ingrese una edad válida: "));
}

names[1] = prompt("Ingrese un segundo nombre: ");
ages[1] = parseInt(prompt("Ingrese la edad: "));
while(isNaN(ages[1])||ages[1] < 0||ages[1] > 120){
    ages[1] = parseInt(prompt("ERROR, ingrese una edad válida: "));
}

names[2] = prompt("Ingrese un tercer nombre: ");
ages[2] = parseInt(prompt("Ingrese la edad: "));
while(isNaN(ages[2])||ages[2] < 0||ages[2] > 120){
    ages[2] = parseInt(prompt("ERROR, ingrese una edad válida: "));
}
document.write(names[ages.indexOf(Math.max(...ages))]);