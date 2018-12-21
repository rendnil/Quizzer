import React from "react"
import {Segment, Button, Message} from 'semantic-ui-react'
import AnswerBox from "./AnswerBox"


class QuestionDetail extends React.Component{

  render(){
    console.log("detail", this.props);
    return(
      <div>
        <Message id="question-prompt" warning>
          <Message.Header id="question-prompt-header">Question #{this.props.number}</Message.Header>
          <Message.Content>{this.props.question.prompt}</Message.Content>
        </Message>
        <AnswerBox answers={this.props.question.answers}/>
      </div>
    )
  }
}

export default QuestionDetail
