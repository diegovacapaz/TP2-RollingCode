let age = parseInt(prompt("Ingrese su edad: "));
while(!isFinite(age) || age<0){
    age = parseInt(prompt("Ingrese una edad válida: "));
}
if(age>=18){
    document.write("<h2>Usted puede conducir</h2>");
}
else{
    document.write("<h2>Usted puede NO conducir</h2>");
}