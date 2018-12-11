export const IncrementQuestionNumber = (questionNumber, questionsArr) => {
  if (questionNumber +1 <= questionsArr.length){
    return {type:"INCREMENT_QUESTION_NUMBER"}
  }else{
    return {type:"END_QUIZ"}
  }

}
