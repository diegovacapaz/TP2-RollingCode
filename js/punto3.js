let string = "";
do{
    string += prompt("Ingrese una frase: ") + "-";
}while(confirm("Desea continuar?"));
document.write(string);