var n1 = parseInt(prompt("Write a number"));
var n2 = parseInt(prompt("Write another number"));

for(var n1; n1<=n2;n1++){
    if(n1%2 != 0){
        document.write("<p>Number = "+n1);
        console.log("Number = "+n1);
    }
}