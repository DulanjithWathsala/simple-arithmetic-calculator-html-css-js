function calculate() {
    let x = Number(document.getElementById("input01").value);
    let y = Number(document.getElementById("input02").value);

    if (document.getElementById("input03").value === "*") {
        validColor();
        document.getElementById("result").innerHTML = (x * y).toString();
    } else if (document.getElementById("input03").value === "/") {
        validColor();
        document.getElementById("result").innerHTML = (x / y).toString();
    } else if (document.getElementById("input03").value === "+") {
        validColor();
        document.getElementById("result").innerHTML = (x + y).toString();
    } else if (document.getElementById("input03").value === "-") {
        validColor();
        document.getElementById("result").innerHTML = (x - y).toString();
    } else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML =
            "Invalid Input. Try again...";
    }
}

function validColor() {
    document.getElementById("result").style.color = "greenyellow";
}

function clearInputs() {
    document.getElementById("input01").value = "";
    document.getElementById("input02").value = "";
    document.getElementById("input03").value = "";
    document.getElementById("result").innerHTML = "";
}
