var n1 = parseInt(prompt("Write a number"));
for(var n2=0; n2 <= n1;n2++){
    if(n1%n2==0){
        document.write("<p>Divider = "+n2);
        console.log("Divider = "+n2);
    }
}