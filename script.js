function checkAnswer(person){

let result = document.getElementById("result");

if(person === "captain"){
result.innerHTML = "✅ Correct! The captain hid the trophy after practice.";
}
else{
result.innerHTML = "❌ Wrong suspect. Look at the clues again.";
}

}