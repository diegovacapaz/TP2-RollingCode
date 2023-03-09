let divisor = 1;
for(let i = 1; i<=500; i++){
    document.write(i);
    if(i%4 === 0 && i%9 === 0){
        document.write(" (múltiplo de 4 y 9)");
    }
    else if(i%4===0){
        document.write(" (múltiplo de 4)");
    }
    else if(i%9===0){
        document.write(" (múltiplo de 9)");
    }
    document.write("<br>");
    if(divisor%5 === 0){
        document.write("--------------------------------------------------");
        document.write("<br>");
    }
    divisor++;
}
>>>>>>> 8123ca033bd833f046097eefeac7d22ace5f1239
