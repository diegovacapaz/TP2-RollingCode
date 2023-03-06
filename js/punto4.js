let total = 0;
let newInput;
do{
    do{
    newInput = parseInt(prompt("Ingrese un número: "));
    if(isNaN(newInput)){
        alert("Ingrese un número válido");
    }
    }while(isNaN(newInput));
    total += newInput;
}while(confirm("Desea continuar?"));
document.write("La suma es: "+total);