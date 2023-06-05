let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let count = 0
let countGuest = 0

function add1(){
    count += 1
    homeScore.textContent = count

}

function add2(){
    count += 2
    homeScore.textContent = count

}

function add3(){
    count += 3
    homeScore.textContent = count

}

function reset(){
    count = 0
    homeScore.textContent = count

}

function guestadd1(){
    countGuest += 1
    guestScore.textContent = countGuest

}

function guestadd2(){
    countGuest += 2
    guestScore.textContent = countGuest

}

function guestadd3(){
    countGuest +=3
    guestScore.textContent = countGuest

}

function guestreset(){
    countGuest = 0
    guestScore.textContent = countGuest

}
