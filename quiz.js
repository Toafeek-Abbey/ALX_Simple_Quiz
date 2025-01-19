function checkAnswer() {
    var correctAnswer = 4
    document.querySelector('input[name=quiz]:checked')
    var userAnswer = document.querySelector('input[name=quiz]:checked').value
   
    else{
          var feedbackId = document.getElementById("feedback")
          feedbackId.textContent = "That's incorrect. Try again!"
    }
}
 if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."
    }
document.getElementById("submit-answer").addEventListener("click", checkAnswer)
