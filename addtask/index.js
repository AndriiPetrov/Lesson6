var num1 = prompt("Vvedite chislo");
var num2 = prompt("Vvedite vtoroe chislo");
if(!isNaN(num1) && !isNaN(num2)){
    console.log("those numbers is a numbers");

    console.log("Sum " + num1 + " and " + num2 + " ravna " + (parseInt(num1) + parseInt(num2)));
    console.log("Sub " + num1 + " and " + num2 + " ravna " + (num1 - num2));
    console.log("Mul " + num1 + " and " + num2 + " ravna " + (num1 * num2));

    if(num2!=0)
    console.log("Div " + num1 + " and " + num2 + " ravna " + (num1 / num2));
    console.log("Div " + num1 + " and " + num2 + " ravna " + (num1 % num2));
    

}
else
console.log("chisla ili odno iz nix ne number");