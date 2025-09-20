const car = {
    model: "Lamborghini Aventador",
    year: 2011,
    color: "Black",
    used: false,
}

if (car.used) {
    console.log(`I'm looking for a ${car.year} ${car.model} that is used.`)
} else {
    console.log(`I'm looking for a ${car.year} ${car.model} that is new.`)
}