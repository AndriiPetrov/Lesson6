var a = prompt("Input first number");
var b = prompt("Input second number");
var operation = prompt("Input operation +,-,*,/");

function calculation(a, b, operation){
    var result = undefined;
    if(typeof(a)=="number" && typeof(b) =="number") //using typeof
    console.log("Oba chisla is number");
    switch(operation){
        case "+": 
        // console.log("Summa chisel " + a + " i " + b + " ravna " + (parseInt(a) + parseInt(b)));
        result = a + b;
        break;
        case "-":
        // console.log("Sub chisel " + a + " i " + b + " ravna " + (parseInt(a) - parseInt(b)));
        result = a - b;
        break;
        case "*":
        // console.log("Mul chisel " + a + " i " + b + " ravna " + (parseInt(a) * parseInt(b)));
        result = a * b;
        break;
        case "/":
        if(b!=0)
        // console.log("Div chisel " + a + " i " + b + " ravna " + (parseInt(a) * parseInt(b)));
        result = a / b
        else
        alert("Error, Divide by zero exception");
        break;
    }
    alert(result);
}

calculation(a, b, operation);