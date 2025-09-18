console.log("Using for loop:")
for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
console.log("\nUsing while loop:")
let count = 1
while (count <= 15) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log("FizzBuzz")
    } else if (count % 3 == 0) {
        console.log("Fizz")
    } else if (count % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(count)
    }
    count++
}