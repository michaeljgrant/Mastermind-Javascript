const computerNumber = []
for (let index = 0; index <= 3; index++) {
    const randomNum = Math.floor(Math.random() * 10);
    computerNumber.push(randomNum)
}


console.log(computerNumber);
correctGuess = []
let playerArray = []

function compareNumbers() {
    if(playerArray.every((v, i) => v === computerNumber[i])){
        console.log("that's a wrap baby!")
    } else {
    for (let i = 0; i < computerNumber.length; i++) {
        if (playerArray[i] === computerNumber[i]){
            correctGuess.push(playerArray[i])
    } else {
        correctGuess.push("X")
    }
    console.log(correctGuess)
    }
}
}