let row = parseInt(prompt("Ingrese un número de fila: "));
while(isNaN(row)||row < 0){
    row = parseInt(prompt("ERROR, ingrese un número >= 0: "));
}
let column = parseInt(prompt("Ingrese un número de columna: "));
while(isNaN(column)||column < 0){
    column = parseInt(prompt("ERROR, ingrese un número >= 0: "));
}
let cell = column*row;
document.write("<table>");
for(let i=0; i<row; i++){
    document.write("<tr>");
    for(let j=0; j<column; j++){
        document.write("<td>");
        document.write(cell);
        document.write("</td>");
        cell--;
    }
    document.write("</tr>");
}
document.write("</table>");