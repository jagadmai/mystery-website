function showClue(type){

const text = document.getElementById("clueText")

if(type === "footprint"){
text.innerText = "A muddy footprint near the door."
}

if(type === "letter"){
text.innerText = "A letter mentioning someone named Alex."
}

if(type === "window"){
text.innerText = "The window was forced open from outside."
}

}

function checkAnswer(){

const answer = document.getElementById("answer").value.toLowerCase()

if(answer === "alex"){

alert("Correct! Alex stole the necklace.")

}

else{

alert("That's not correct. Keep investigating.")

}

}