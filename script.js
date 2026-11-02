scoreEl1 = document.getElementById("score-el1")
scoreEl2 = document.getElementById("score-el2")

let count = 0

function firstplus1() {
    count += 1
    scoreEl1.textContent = count
}

function firstplus2() {
    count += 2
    scoreEl1.textContent = count
}

function firstplus3() {
    count += 3
    scoreEl1.textContent = count
}

function reset1() {
    count = 0
    scoreEl1.textContent = count
}

function secondplus1() {
    count += 1
    scoreEl2.textContent = count
}

function secondplus2() {
    count += 2
    scoreEl2.textContent = count
}

function secondplus3() {
    count += 3
    scoreEl2.textContent = count
}

function reset2() {
    count = 0
    scoreEl2.textContent = count
}