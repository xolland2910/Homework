let number = prompt("Введите число.");

if (number >= 5) {
  for (let i = 0; i <= number; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
} else {
    console.log('Sorry, no numbers')
}