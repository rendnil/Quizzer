//action creator to handle submitting an answers and updating the quiz obj
export const submitAnswer = (quiz) => {

    const currentQuestion = quiz.questions[quiz.questionNumber-1]
    const updatedCorrectQs = [...quiz.correctQs]
    const updatedIncorrectQs = [...quiz.incorrectQs]
    //check to see if the submitted answer is correct
    // if it is correct, then add it to the appropriate array
    if(currentQuestion.correctAnswer===quiz.selectedAnswer){
      updatedCorrectQs.push(currentQuestion)
    }else{
      updatedIncorrectQs.push(currentQuestion)
    }

    return (dispatch) => {
      //update quiz object with correct/incorrect questions, question number
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
        //reset selected category
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
        //clear selected answer
        dispatch({type:"CLEAR_SELECTED_ANSWER"})
      }
    }
}
