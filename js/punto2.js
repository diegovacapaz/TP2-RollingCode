let grade = parseInt(prompt("Ingrese su nota: "));
while(isNaN(grade)||(grade<0||grade>10)){
    if(isNaN(grade)){
        grade = parseInt(prompt("Ingrese un número válido: "));
    }
    if(grade<0||grade>10){
        grade = parseInt(prompt("Número erroneo, ingrese un número entre 0-10: "));
    }
}
switch(grade){
    case 0:
    case 1:
    case 2:
        alert("Muy deficiente");
        break;
    case 3:
    case 4:
        alert("Insuficiente");
        break;
    case 5:
    case 6:
        alert("Suficiente");
        break;
    case 7:
        alert("Bien");
        break;
    case 8:
    case 9:
        alert("Notable");
        break;
    case 10:
        alert("Sobresaliente");
        break;
    default:
        alert("Ocurrió un error inesperado");
        }