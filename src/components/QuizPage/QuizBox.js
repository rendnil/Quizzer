import React from "react"
import { connect } from 'react-redux'
import {Segment} from 'semantic-ui-react'
import QuestionDetail from "./QuestionDetail"

class QuizBox extends React.Component{

  state = {
    questionNumber: 1
  }

  render(){
    console.log(this.props);
    return(
      <React.Fragment>
        <Segment>
          {/*<h1>{this.props.currentQuiz.categoryName} Quiz</h1> */}
        </Segment>
        <Segment>
          <h1>Question Number: {this.state.questionNumber}</h1>
        </Segment>

        {this.props.currentQuiz? <QuestionDetail question={this.props.currentQuiz.questions[this.state.questionNumber-1]}/>:null}


      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    currentQuiz: state.currentQuiz
  }
}

export default connect(mapStateToProps)(QuizBox)
