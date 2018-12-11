import React from "react"
import { connect } from 'react-redux'
import {Segment} from 'semantic-ui-react'
import QuestionDetail from "./QuestionDetail"

class QuizBox extends React.Component{

  render(){
    console.log("quiz box render",this.props);
    if (this.props.currentQuiz){
      console.log("question number", this.props.currentQuiz.questionNumber);
      return(
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
    }else{
      return null
    }

  }
}

const mapStateToProps = (state) => {

  return{
    currentQuiz: state.currentQuiz
  }
}

export default connect(mapStateToProps)(QuizBox)
