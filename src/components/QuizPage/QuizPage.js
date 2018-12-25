import React from "react"
import { connect } from 'react-redux'
import {Segment, Button, Header} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';
import {Redirect} from "react-router"
import "../../css/QuizPage.css"
import QuestionDetail from "./QuestionDetail"
import {submitAnswer} from "../../redux/actions/submitAnswer"


class QuizBox extends React.Component{

  renderBack(){
    return(
      <NavLink to = "/">
        <h1>BACK TO CATEGORIES</h1>
      </NavLink>
    )
  }

  submitAnswer = () => {
    this.props.submitAnswer(this.props.currentQuiz)
  }

  btnRender = () => {
    if (this.props.selectedAnswer){
      return(
        <div id="submit-answer-btn" >
          <Button  onClick={this.submitAnswer} basic size="large" primary>Submit</Button>
        </div>
      )
    }else{
      return null
    }
  }

  render(){
    console.log("quiz box render",this.props);
    if(this.props.currentQuiz&& !this.props.currentQuiz.completed){
      return(
        <div className="quiz-page-wrapper">
          <Header as="h4" id="question-number">{this.props.currentQuiz.questionNumber} of {this.props.currentQuiz.questions.length}</Header>
          <Header id="quiz-title" as="h1" textAlign='center'>{this.props.currentQuiz.categoryName} Quiz</Header>

          <QuestionDetail
          number={this.props.currentQuiz.questionNumber}
          question={this.props.currentQuiz.questions[this.props.currentQuiz.questionNumber-1]}
          />

          {this.btnRender()}
        </div>
      )
    }else{
      return(<Redirect to ="/results" />)
    }
  }
}

const mapStateToProps = (state) => {
  console.log("called map state");
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
