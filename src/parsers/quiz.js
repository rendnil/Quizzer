//data parser for creating quiz objects

// inputs {name: "", questions: []}
//desired output
// {categoryName:"", questions: [ ], correctQs:[], incorrectQs:[] }

//each question object
//{prompt:"", answers:[ ], correctAnswer:"", value:""}

//get randomized questions
//get randomized answers

const numQuestions = 10

const getRandomIndex = (arr) => {
  return Math.floor(Math.random()*arr.length)
}

export default class Quiz{

  constructor(name, questions){
    this.name = name
    this.allQuestions = questions
    this.questions = []
  }

  selectQuestions(){
    let counter = 1
    while (counter<= numQuestions){
      //debugger

      this.questions.push(this.constructQuestionObj(this.allQuestions[getRandomIndex(this.allQuestions)]))
      counter++
    }
  }

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

  constructQuestionObj(question){
    return{
      id: question.id,
      prompt: question.question,
      correctAnswer: question.answer,
      answers: this.constructAnswers(question),
      correctQs: [ ],
      incorrectQs: [ ],
      value: question.value
    }
  }


  constructQuiz(){
    this.selectQuestions()
    return {categoryName:this.name, questions: this.questions}
  }




}
