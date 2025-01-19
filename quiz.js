function checkAnswer() {
    var correctAnswer = 4
    document.querySelector('input[name=quiz]:checked')
    var userAnswer = document.querySelector('input[name=quiz]:checked').value
    if (userAnswer === correctAnswer) {
        var feedbackId = document.getElementById("feedback")
        feedbackId.textContent = "Correct! Well done."
    }else{
          var feedbackId = document.getElementById("feedback")
          feedbackId.textContent = "That's incorrect. Try again!"
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer)
