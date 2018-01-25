var A = {
    a: 10,
    b: 20
};

var B = {
    a: 5,
    b: 10
};

var operation = prompt("Input operation +, -, *, /");

function calculateObject( a, b, operation){
    if(a instanceof Object && b instanceof Object){
        console.log("A i B is Object");
        var tempObject = {};
        switch(operation){
            case "+":
            tempObject.resultA = a.a + b.a;
            tempObject.resultB = a.b + b.b;
            break;
            case "-":
            tempObject.resultA = a['a'] + b['a'];
            tempObject.resultB = a['b'] + b['b'];
            break;
            case "*":
            tempObject.resultA = a['a'] * b['a'];
            tempObject.resultB = a['b'] * b.b;
            break;
            case "/":
            if(b.a == 0 && b['b'] == 0){
                return alert("Divide by ZEro exception");
            }
            else{
                tempObject.resultA = a['a'] / b['a'];
                tempObject.resultB = a['b'] / b['b'];
                break;
            }
        }
        return alert(tempObject.resultA + " " + tempObject.resultB);
    }
    else {
        console.log("A & B is not Object")
    } 
}

calculateObject(A, B, operation);