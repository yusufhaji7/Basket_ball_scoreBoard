let homeResult = document.getElementById("value1")
let guestResult = document.getElementById("value2")
let count = 0
let countg = 0

function add1home(){
    count += 1
    homeResult.textContent = count
}
function add2home(){
    count += 2
    homeResult.textContent = count
}
function add3home(){
    count += 3
    homeResult.textContent = count
}
function add1guest(){
    countg += 1
    guestResult.textContent = countg
}
function add2guest(){
    countg += 2
    guestResult.textContent = countg
}
function add3guest(){
    countg += 3
    guestResult.textContent = countg
}