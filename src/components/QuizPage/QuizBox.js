import React from "react"
import { connect } from 'react-redux'
import {Segment, Button, Header} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';
import {Redirect} from "react-router"
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

  render(){
    console.log("quiz box render",this.props);
    if(this.props.currentQuiz&& !this.props.currentQuiz.completed){
      return(
        <div className="quiz-page-wrapper">
          <Header as="h4" id="question-number">Question #{this.props.currentQuiz.questionNumber}</Header>
          <Header id="quiz-title" as="h1" textAlign='center'>{this.props.currentQuiz.categoryName} Quiz</Header>

          <QuestionDetail question={this.props.currentQuiz.questions[this.props.currentQuiz.questionNumber-1]}/>

          <div id="submit-answer-btn" >
            <Button  onClick={this.submitAnswer} basic size="large" primary>Submit</Button>
          </div>
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
    currentQuiz: state.currentQuiz
  }
}


const mapDispatchToProps = dispatch => {
  return{
    submitAnswer: (quiz)=>dispatch(submitAnswer(quiz))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizBox)
