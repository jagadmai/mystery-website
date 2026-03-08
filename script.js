let score = 0

function revealClue(num){

const clueText = document.getElementById("clueText")

if(num === 1){

clueText.innerText = "You found muddy footprints near the door."

score += 10

}

if(num === 2){

clueText.innerText = "A note mentions someone named Alex."

score += 10

}

if(num === 3){

clueText.innerText = "The window was forced open."

score += 10

}

document.getElementById("score").innerText = score

}

function checkAnswer(){

const answer = document.getElementById("answer").value.toLowerCase()

if(answer === "alex"){

alert("Correct! Alex stole the necklace. Case solved!")

}

else{

alert("That's not correct. Investigate more clues.")

}

}