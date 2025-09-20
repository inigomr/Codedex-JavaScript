function isPalindrome(word) {
    let reversedWord = "";
    const lowerCaseWord = word.toLowerCase();
    for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
        reversedWord += lowerCaseWord[i];
    }
    return lowerCaseWord === reversedWord;
}

console.log(isPalindrome("Racecar"))