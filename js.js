const form = document.getElementsByClassName("calculator");
const input = document.getElementById("input");
const operators = document.querySelectorAll("button[data-type=operator]");
const operand = document.querySelectorAll("button[data-type=operand]");



let operator = false;
operand.forEach((btn) => {btn.addEventListener("click", function(e){
    if (input.value == "0") {
        input.value = e.target.value;
    } else if (operator) {
        operator = false;
        input.value = e.target.value;
    } else if (input.value.includes(".")) {
        input.value = input.value + e.target.value.replace(".", "");
    } else {
        input.value = input.value + "" + e.target.value
    } 
  });
});


let equation = [];
operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        switch (e.target.value) {
        case "=":
            equation.push(input.value);
            input.value = eval(equation.join(""));
            equation = [];
            break;
        default:
            let last_item = equation[equation.length - 1];
            if (["/", "*", "+", "-"].includes(last_item) && operator) {
            equation.pop();
            equation.push(e.target.value);
            } else {
                equation.push(input.value);
                equation.push(e.target.value);
                }
            operator = true;
            break;
        }
    });
});


document.getElementById("reset").onclick = function(e) {
    document.getElementById("input").value = "";
}


