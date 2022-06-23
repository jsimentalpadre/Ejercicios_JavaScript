var n1 = parseInt(prompt("Write a number"));
var x = 0;
var y = 0;
var z = 0; 

while(n1 >=0){

    var n1 = parseInt(prompt("Write a number"));
    console.log(n1);
    x = x + n1;
    y++;
}

z =x/y;

document.write("<p>The sum is = "+x);
document.write("<P>The median is = "+z);