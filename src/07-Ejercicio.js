var n1 = parseInt(prompt("Write a number"));

for(var n1; n1>0;){
    for(var i = 1; i<11; i++){
        document.write(n1+" x "+i+ " = "+(n1*i)+ "<br>");
        if(i == 10){
            document.write("<br>")
            n1--;
        }
    }
}