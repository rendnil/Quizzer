import React from "react"
import { connect } from 'react-redux'
import {Button, Header} from 'semantic-ui-react'
import {Redirect} from "react-router"
import "../../css/QuizPage.css"
import QuestionDetail from "./QuestionDetail"
import {submitAnswer} from "../../redux/actions/submitAnswer"


const QuizBox = (props) =>{


  const submitAnswer = () => {
    props.submitAnswer(props.currentQuiz)
  }

  const btnRender = () => {
    if (props.selectedAnswer){
      return(
        <div id="submit-answer-btn" >
          <Button  onClick={submitAnswer} basic size="large" primary>Submit</Button>
        </div>
      )
    }else{
      return null
    }
  }

  if(props.currentQuiz&& !props.currentQuiz.completed){
    return(
      <div className="quiz-page-wrapper">
        <Header as="h4" id="question-number">{props.currentQuiz.questionNumber} of {props.currentQuiz.questions.length}</Header>
        <Header id="quiz-title" as="h1" textAlign='center'>{props.currentQuiz.categoryName} Quiz</Header>

        <QuestionDetail
        number={props.currentQuiz.questionNumber}
        question={props.currentQuiz.questions[props.currentQuiz.questionNumber-1]}
        />

        {btnRender()}
      </div>
    )
  }else{
    return(<Redirect to ="/results" />)
  }
}

const mapStateToProps = (state) => {
  return{
    currentQuiz: state.currentQuiz,
    selectedAnswer: state.currentQuiz.selectedAnswer
  }
}

const mapDispatchToProps = dispatch => {
  return{
    submitAnswer: (quiz)=>dispatch(submitAnswer(quiz))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizBox)
