import React from "react"
import { connect } from 'react-redux'
import {Segment, Button} from 'semantic-ui-react'
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
        <React.Fragment>
          <Segment>
          <h1>{this.props.currentQuiz.categoryName} Quiz</h1>
          </Segment>
          <Segment>
          <h1>Question Number: {this.props.currentQuiz.questionNumber}</h1>

          <QuestionDetail question={this.props.currentQuiz.questions[this.props.currentQuiz.questionNumber-1]}/>

          <Button onClick={this.submitAnswer} basic primary>Submit</Button>
          </Segment>
        </React.Fragment>
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
