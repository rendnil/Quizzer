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

    ///check if quiz is completed
    if (quiz.questionNumber === quiz.questions.length){
      return {
        type:"SUBMIT_ANSWER",
        payload: {...quiz,
                  correctQs:updatedCorrectQs,
                  incorrectQs:updatedIncorrectQs,
                  questionNumber:quiz.questionNumber+1,
                  completed:true
                  }
      }
    }else{

      return {
        type:"SUBMIT_ANSWER",
        payload: {...quiz,
                  correctQs:updatedCorrectQs,
                  incorrectQs:updatedIncorrectQs,
                  questionNumber:quiz.questionNumber+1
                  }
      }
    }
}
