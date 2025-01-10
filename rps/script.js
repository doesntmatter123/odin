'use strict'

const choices = ['rock', 'paper', 'scissors']

let score = {
  human: 0,
  computer: 0,
}

function getComputerChoice () {
  let randomNumber = Math.random() * 3
  randomNumber = Math.floor(randomNumber)
  return choices[randomNumber]
}

function getHumanChoice () {
  let userInput = prompt('Input one of following: ' + choices).toLowerCase()
  if (choices.includes(userInput)) {
    return userInput
  } else {
    alert('Incorrect input, try again.')
    getHumanChoice()
  }
}

function playRound (humanChoice, computerChoice) {
  if (
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() +
    humanChoice.slice(1)} beats scissors.`)
    score.human++
  } else if (
    computerChoice === 'rock' && humanChoice === 'scissors' ||
    computerChoice === 'paper' && humanChoice === 'rock' ||
    computerChoice === 'scissors' && humanChoice === 'paper') {
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() +
    computerChoice.slice(1)}`)
    score.computer++
  } else if (humanChoice === computerChoice) {
    console.log('DRAW!')
  } else {
    console.log('ERROR')
  }
  console.log(`Human: ${score.human}, Computer: ${score.computer}`)

}

function playGame () {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection);
  }
  if(score.human !== score.computer){
    score.human > score.computer ? console.log('You win!') : console.log('You lose!')
  } else {
    console.log(`Draw`);
  }
}

playGame()

