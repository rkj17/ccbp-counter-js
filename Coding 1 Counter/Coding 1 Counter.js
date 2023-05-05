let countEl = document.getElementById("counterValue");
let incBtnEl = document.getElementById("increaseBtn");
let decBtnEl = document.getElementById("decreaseBtn");
let resetBtnEl = document.getElementById("resetBtn");

let count = 0;

function onDecrement() {

    if (count % 2 !== 0) {
        count = count - 1;
    } else {
        count = count - 2;
    }
}

function onIncrement() {

    if (count % 2 !== 0) {
        count = count + 5;
    } else {
        count = count + 10;
    }
}

function onReset() {


    count = 0;
}