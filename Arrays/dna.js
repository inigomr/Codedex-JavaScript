const dnaPieces = ["A", "C", "G", "T"];
const myDNA = [];

while (myDNA.length < 24) {
    const randomIndex1 = Math.floor(Math.random() * dnaPieces.length);
    const randomIndex2 = Math.floor(Math.random() * dnaPieces.length);
    const randomIndex3 = Math.floor(Math.random() * dnaPieces.length);
    myDNA.push(dnaPieces[randomIndex1] + dnaPieces[randomIndex2] + dnaPieces[randomIndex3]);
}
console.log(myDNA);