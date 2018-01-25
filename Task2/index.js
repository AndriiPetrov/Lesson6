var a = [1, 2, 3, 4, 5, 12];
var b = [5, 6, 0, 8, 9];
var c = 0;
var operation = prompt("Vvedite operatiion +, -, *, /")
var result = [];

function calculationArray(a, b, operation) {
    var length = 0;
    if (Array.isArray(a) && Array.isArray(b)) {
        console.log("a i b arrays")
        if (a.length >= b.length) {
            length = a.length
        }
        else {
            length = b.length
        }
        for(var i = 0; i < length; i++){
            if(isNaN(a[i])){
                a[i] = 0;
            }
            else if(isNaN(b[i])){
                b[i] = 0;
            }
            switch(operation){
                case "+":
                result[i] = a[i]+ b[i];
                break;
                case "-":
                result[i] = a[i] - b[i];
                break;
                case "*":
                result[i] = a[i] * b[i];
                break;
                case "/":
                if(b[i] !=0){
                    result[i] = a[i] / b[i];
                }
                else{
                    alert("Error, Divide by zero exception");
                }
            }
            alert(result);
        }
    }
    else{
        console.log("Odin iz elementov ne ivlietsa masivom");
    }
}

calculationArray(a, b, operation);