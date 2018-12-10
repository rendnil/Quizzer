//data parser for creating quiz objects

// inputs {name: "", questions: []}
//desired output
// {categoryName:"", questions: [ ], correctQs:[], incorrectQs:[] }

//each question object
//{prompt:"", answers:[ ], correctAnswer:"", value:""}

//get randomized questions
//get randomized answers

export default class Quiz{

  constructor(name, questions){
    this.name = name
    this.allQuestions = questions
  }

  constructQuiz(){
    return {categoryName:this.name, allQuestions: this.allQuestions}
  }




}
