let homeScore = document.getElementById("score-home");
let awayScore = document.getElementById("score-away");

let onePoint = 1;
let twoPoint = 2;
let threePoint = 3;

let startingScoreHome = 0;
let startingScoreAway = 0;
let resetScore = 0;

function reset() {
    homeScore.textContent = resetScore;
    awayScore.textContent = resetScore;
    startingScoreHome = resetScore;
    startingScoreAway = resetScore;
}
function onePointHome() {
    homeScore.textContent = startingScoreHome += onePoint;
}

function twoPointHome() {
    homeScore.textContent = startingScoreHome += twoPoint;
}

function threePointHome() {
    homeScore.textContent = startingScoreHome += threePoint;
}

function onePointAway() {
    awayScore.textContent = startingScoreAway += onePoint;
}

function twoPointAway() {
    awayScore.textContent = startingScoreAway += twoPoint;
}

function threePointAway() {
    awayScore.textContent = startingScoreAway += threePoint;
}