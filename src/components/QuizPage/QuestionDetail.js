import React from "react"
import {Segment, Button, Message} from 'semantic-ui-react'
import AnswerBox from "./AnswerBox"


class QuestionDetail extends React.Component{

  render(){
    console.log("detail", this.props);
    return(
      <div>
        <Message id="question-prompt" warning header="Prompt:" content={this.props.question.prompt}/>
        <AnswerBox answers={this.props.question.answers}/>
      </div>
    )
  }
}

export default QuestionDetail
