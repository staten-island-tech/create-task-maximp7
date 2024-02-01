import './style.css';  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById('generateBtn').onclick = function() {
  generateRandomNumber();
};

function generateRandomNumber() {
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  document.getElementById('generatedNumberDisplay').textContent = `Generated Number: ${randomNumber}`;

  if (randomNumber > 5) {
    console.log('The generated number is greater than 5.');
  } else {
    console.log('The generated number is 5 or less.');
  }
}