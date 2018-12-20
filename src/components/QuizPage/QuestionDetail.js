import React from "react"
import {Segment, Button, Message} from 'semantic-ui-react'
import AnswerBox from "./AnswerBox"
import "../../css/QuizPage.css"

class QuestionDetail extends React.Component{

  render(){
    console.log("detail", this.props);
    return(
      <div>
        <Message id="question-prompt" color="orange" header="QUESTION" content={this.props.question.prompt}/>

        <h2>Answers</h2>
        <AnswerBox answers={this.props.question.answers}/>
      </div>

    )
  }
}



export default QuestionDetail
