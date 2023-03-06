let text = "";
let newInput;
do{
    newInput = prompt("Ingrese una frase: ");
    if(newInput===null){
        newInput = "";
    }
    if(newInput !== ""){
        text += newInput + "-";
    }
}while(confirm("Desea continuar?"));
document.write(text);