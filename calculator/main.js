

console.log("начало");
const plusButton = document.querySelector("#plusButton");
const minusButton = document.querySelector("#minusButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");

let result2 = 0;
let result = document.querySelector("#result");
console.log(result);
let userNum1;
let userNum2;

function getNumbers() {
    userNum1 = document.querySelector("#number1").value;
    userNum2 = document.querySelector("#number2").value;
}

    plusButton.addEventListener("click", function() {
        getNumbers();
        result.innerHTML = +userNum1 + +userNum2;
    });

    minusButton.addEventListener("click", function() {
        getNumbers();
        result.innerHTML = userNum1 - userNum2;
    });

    multiplyButton.addEventListener("click", function() {
        getNumbers();
        result.innerHTML = userNum1 * userNum2;
    });

    divideButton.addEventListener("click", function() {
        getNumbers();
        if (userNum2 == 0) {
            alert("На ноль делить нельзя!");
            return;
        }
        result.innerHTML = userNum1 / userNum2;
    });
