const pig = {
    name: 'Peppa',
    type: "pig",
    age: 21,
    makeSound () {
        console.log(`${pig.name} is a ${pig.age} year old ${pig.type} that goes "Oink Oink"`);
    }
};

const sheep = {
    name: 'Shaun',
    type: "sheep",
    age: 18,
    makeSound () {
        console.log(`${sheep.name} is a ${sheep.age} year old ${sheep.type} that goes "Baa Baa"`);
    }
};

const dog = {
    name: 'Chow',
    type: "dog",
    age: 25,
    makeSound () {
        console.log(`${dog.name} is a ${dog.age} year old ${dog.type} that goes "Woof Woof"`);
    }
};

pig.makeSound();
sheep.makeSound();
dog.makeSound();