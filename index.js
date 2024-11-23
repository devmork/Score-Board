
let homePoints = document.getElementById("home-points")
let guessPoints = document.getElementById("guess-points")

function addHomeOnePoint() {
  homePoints.textContent = parseInt(homePoints.textContent) + 1
  
}
function addHomeTwoPoint() {
  homePoints.textContent = parseInt(homePoints.textContent) + 2
}

function addHomeThreePoint() {
  homePoints.textContent = parseInt(homePoints.textContent) + 3
}

function addGuessOnePoint() {
  guessPoints.textContent = parseInt(guessPoints.textContent) + 1
}

function addGuessTwoPoint() {
  guessPoints.textContent = parseInt(guessPoints.textContent) + 2

}
  
function addGuessThreePoint() {
  guessPoints.textContent = parseInt(guessPoints.textContent) + 3

}