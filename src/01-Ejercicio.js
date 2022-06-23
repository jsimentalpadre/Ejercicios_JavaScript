    var n1 = parseInt(prompt("Write a number"));
    var n2 = parseInt(prompt("Write another number"));


    if(n1==n2){
        console.log("Both numbers have the same value");
    }else if(n1>n2 && n1>0 && n2>0){
        console.log("First number is greater than the second number");
    }else if(n1<n2 && n1>0 && n2>0){
        console.log("Second number is greater than the first number");
    }else if (n1 == 0 || n2 == 0){
        console.log("You cannot use zero as a valid number");
    }
