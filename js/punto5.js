let dni;
let letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q","V", "H", "L", "C", "K", "E"];
do{
    dni = parseInt(prompt("Ingrese su DNI: "));
    while(isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("ERROR: No ingresó un DNI válido")
        dni = parseInt(prompt("Ingrese un DNI válido: "));
    }
    document.write();
}while(confirm("Su DNI es: " + dni + "-" + letters[dni % 23] + "\n ¿Desea continuar?"));