//component for quiz page
import React from "react"
import { connect } from 'react-redux'
import {Button, Header} from 'semantic-ui-react'
import {Redirect} from "react-router"
import "../../css/QuizPage.css"
import QuestionDetail from "./QuestionDetail"
import {submitAnswer} from "../../redux/actions/submitAnswer"


const QuizBox = (props) =>{

  //method for handling answer submitting
  const submitAnswer = () => {
    props.submitAnswer(props.currentQuiz)
  }

  //check if an answer has been selected
  //if so, render the submit button
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

  //check to see if there is a current quiz in progress
  //additionally, check to see that the quiz has not been completed
  if(props.currentQuiz && !props.currentQuiz.completed){
    return(
      <div className="quiz-page-wrapper">
        {/*show the current question */}
        <Header as="h4" id="question-number">{props.currentQuiz.questionNumber} of {props.currentQuiz.questions.length}</Header>
        {/*show category title */}
        <Header id="quiz-title" as="h1" textAlign='center'>{props.currentQuiz.categoryName} Quiz</Header>
        {/* render question details*/}
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
  return{submitAnswer: (quiz)=>dispatch(submitAnswer(quiz))}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizBox)
