const luckyNumber = 20
let guess = Math.floor(Math.random() * 20) + 1;

while (guess !== luckyNumber) {
    console.log("Nope, it isn't " + guess);
    guess = Math.floor(Math.random() * 20) + 1;
}

console.log("My lucky number is " + guess + "!");