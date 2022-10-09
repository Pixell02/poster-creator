let opponentInput = document.getElementById("opponent");

opponentInput.addEventListener("keyup", writingOpponent);

function writingOpponent(e) {
    let inputOpponent = document.getElementById("przeciwnik");
    inputOpponent.innerHTML = opponentInput.value;
    console.log(this.value);
}

let cityInput = document.getElementById("city");

cityInput.addEventListener("keyup", writingCity);

function writingCity(e) {
    let inputCity = document.getElementById("data");
    inputCity.innerHTML = cityInput.value;
    console.log(cityInput.value);
}

let yourTeamInput = document.getElementById("team");

yourTeamInput.addEventListener("keyup", writingYourTeam);

function writingYourTeam(e) {
    let inputTeam = document.getElementById("ty");
    inputTeam.innerHTML = yourTeamInput.value;
    console.log(yourTeamInput.value);
}