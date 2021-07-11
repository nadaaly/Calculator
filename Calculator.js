function display(ans) {
    var display = document.getElementById("answers").value += ans;
    return display;
}

function getAnswer() {
    let firstNumber = document.getElementById("answers").value
    let secondNumber = eval(firstNumber)
    var result = document.getElementById("answers").value = secondNumber;
    return result;
}

function clearall() {
    var clear = document.getElementById("answers").value = "";
    return clear;
}