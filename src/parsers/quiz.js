//data parser for creating quiz objects

//determines number of questions for each quiz
const numQuestions = 5

//helper method for return random index in an array
const getRandomIndex = (arr) => {
  return Math.floor(Math.random()*arr.length)
}

export default class Quiz{

  constructor(name, questions){
    this.name = name
    this.allQuestions = questions
    this.questions = []
  }

  //method for selecting all questions in a quiz
  selectQuestions(){
    let counter = 1
    //use array of question ids to make sure we don't have repeats
    const idArr = [ ]
    while (counter<= numQuestions){
      let newQuestion = this.constructQuestionObj(this.allQuestions[getRandomIndex(this.allQuestions)])

      //if we've already added this question, keep finding new ones
      while(idArr.includes(newQuestion.id)){
        newQuestion = this.constructQuestionObj(this.allQuestions[getRandomIndex(this.allQuestions)])
      }

      this.questions.push(newQuestion)
      idArr.push(newQuestion.id)
      counter++
    }
  }

  //method for creating the answer set for a given question
  constructAnswers(question){
    const answers = [ ]

    answers.push(question.answer)

    for (let i = 1; i<=3; i++){
      let randomQuestion = this.allQuestions[getRandomIndex(this.allQuestions)]

      //if the answers array already includes this answer, then find a new one
      while (answers.includes(randomQuestion.answer)){
        randomQuestion = this.allQuestions[getRandomIndex(this.allQuestions)]
      }
      answers.push(randomQuestion.answer)
    }
    //sort alphabetically to mask correct answer
    return answers.sort()
  }

  //method for creating each question obj in a quiz
  constructQuestionObj(question){
    return{
      id: question.id,
      prompt: question.question,
      correctAnswer: question.answer,
      answers: this.constructAnswers(question),
      value: question.value
    }
  }

  //method for creating the full quiz obj
  constructQuiz(){
    //first select all of the questions
    this.selectQuestions()
    return {categoryName:this.name,
            questions: this.questions,
            correctQs: [],
            incorrectQs: [],
            completed: false
    }
  }

} //end Quiz class
