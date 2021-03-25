// These are the variables I will need for my loop.
const age = 15
let guess = 0

// Below is my while loop for 'guess my age'.
while (guess !== age) {
  guess = prompt('To access this site, guess my age!')
  guess = parseInt(guess)
  if (guess === age) {
    alert('Congratulations, you got it!')
  } else if (guess < age) {
    alert('You guessed too low!')
  } else if (guess > age) {
    alert('You guessed too high!')
  } else {
    alert('Please enter a number, or close the site.')
  }
}
