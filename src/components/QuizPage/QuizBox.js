import React from "react"
import { connect } from 'react-redux'
import {Segment} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';
import QuestionDetail from "./QuestionDetail"

class QuizBox extends React.Component{

  renderBack(){
    return(
      <NavLink to = "/">
        <h1>BACK TO CATEGORIES</h1>
      </NavLink>
    )
  }


  render(){
    console.log("quiz box render",this.props);
    return(!this.props.currentQuiz? this.renderBack() :
          (
        <React.Fragment>
          <Segment>
            <h1>{this.props.currentQuiz.categoryName} Quiz</h1>
          </Segment>
          <Segment>
            <h1>Question Number: {this.props.currentQuiz.questionNumber}</h1>
          </Segment>

          <QuestionDetail question={this.props.currentQuiz.questions[this.props.currentQuiz.questionNumber-1]}/>


        </React.Fragment>
      )
    )
  }
}

const mapStateToProps = (state) => {
  console.log("called map state");
  return{
    currentQuiz: state.currentQuiz
  }
}

export default connect(mapStateToProps)(QuizBox)
