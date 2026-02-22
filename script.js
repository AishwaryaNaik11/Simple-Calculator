function calculate(operator) {

    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }

    switch(operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                document.getElementById("result").innerText = "Cannot divide by zero!";
                return;
            }
            result = n1 / n2;
            break;
             }

    document.getElementById("result").innerText = "Result: " + result;
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result:";
}