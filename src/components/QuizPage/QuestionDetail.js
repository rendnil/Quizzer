import React from "react"
import {Message} from 'semantic-ui-react'
import AnswerBox from "./AnswerBox"


const QuestionDetail = ({number, question}) =>{

  return(
    <div>
      <Message id="question-prompt" warning>
        <Message.Header>Question #{number}</Message.Header>
        <Message.Content>{question.prompt}</Message.Content>
      </Message>
      <AnswerBox answers={question.answers}/>
    </div>
  )
}

export default QuestionDetail
