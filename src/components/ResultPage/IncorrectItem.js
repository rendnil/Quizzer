import React from "react"
import {Message} from 'semantic-ui-react'

const IncorrectItem = ({question}) => {
  return(
    <div className="incorrect-item">
      <Message attached color="red">
        <Message.Header>Question: {question.prompt}</Message.Header>
      </Message>
      <Message attached="bottom" info>
        <Message.Header>Correct Answer: {question.correctAnswer.toUpperCase()}</Message.Header>
      </Message>
    </div>
  )
}


export default IncorrectItem
