const prompt = require('prompt-sync')()

let age = parseInt(prompt("What's your age? "))

if (age >= 18) {
  console.log("You can vote!")
} else {
  console.log("You can't vote...")
}


let guess = prompt("Password: ")
while (guess !== "SE11") {
  guess = prompt("Try again: ")
}


let competencies = ["if/else", "while", "for", "functions", "objects"]
for (let i = 1; i <= 4; i++) {
  console.log(i)
}