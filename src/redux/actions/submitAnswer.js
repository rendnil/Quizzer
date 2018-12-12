export const submitAnswer = (quiz) => {
    //debugger
    const currentQuestion = quiz.questions[quiz.questionNumber-1]
    const updatedCorrectQs = [...quiz.correctQs]
    const updatedIncorrectQs = [...quiz.incorrectQs]
    if(currentQuestion.correctAnswer===quiz.selectedAnswer){
      updatedCorrectQs.push(currentQuestion)
    }else{
      updatedIncorrectQs.push(currentQuestion)
    }

    return {type:"SUBMIT_ANSWER",
            payload: {...quiz,
              correctQs:updatedCorrectQs,
              incorrectQs:updatedIncorrectQs,
              questionNumber:quiz.questionNumber+1
            }
    }
}
