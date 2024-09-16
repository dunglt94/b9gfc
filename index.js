let good = document.getElementById('good');
let cheap = document.getElementById('cheap');
let fast = document.getElementById('fast');

function changeGood() {
    let current_good = good.value;
    if (current_good == 2) {
        good.value -= 1;
    } else {
        good.value += 1
    }
    if (good.value == 2 && cheap.value == 2) {
        fast.value = 1;
    }
}
function changeCheap() {
    let current_cheap = cheap.value;
    if (current_cheap == 2) {
        cheap.value -= 1;
    } else {
        cheap.value += 1
    }
    if (cheap.value == 2  && fast.value == 2) {
        good.value = 1;
    }
}
function changeFast() {
    let current_fast = fast.value;
    if (current_fast === "2") {
        fast.value -= 1;
    } else {
        fast.value += 1
    }
    if (good.value === "2" && fast.value === "2") {
        cheap.value = 1;
    }
}