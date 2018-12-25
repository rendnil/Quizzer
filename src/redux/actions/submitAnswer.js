export const submitAnswer = (quiz) => {

    const currentQuestion = quiz.questions[quiz.questionNumber-1]
    const updatedCorrectQs = [...quiz.correctQs]
    const updatedIncorrectQs = [...quiz.incorrectQs]
    if(currentQuestion.correctAnswer===quiz.selectedAnswer){
      updatedCorrectQs.push(currentQuestion)
    }else{
      updatedIncorrectQs.push(currentQuestion)
    }

    return (dispatch) => {
    ///check if quiz is completed
      if (quiz.questionNumber === quiz.questions.length){
        dispatch({
          type:"SUBMIT_ANSWER",
          payload: {...quiz,
                    correctQs:updatedCorrectQs,
                    incorrectQs:updatedIncorrectQs,
                    questionNumber:quiz.questionNumber+1,
                    completed:true
                    }
        })
        dispatch({type:"RESET_CATEGORY"})
      }else{

        dispatch({
          type:"SUBMIT_ANSWER",
          payload: {...quiz,
                    correctQs:updatedCorrectQs,
                    incorrectQs:updatedIncorrectQs,
                    questionNumber:quiz.questionNumber+1
                    }
        })
        dispatch({type:"CLEAR_SELECTED_ANSWER"})
      }
    }
}
