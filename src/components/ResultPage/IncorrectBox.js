import React from "react"
import {Header, Message} from 'semantic-ui-react'
import IncorrectItem from "./IncorrectItem"

const IncorrectBox = ({currentQuiz}) => {
  
  return(
    <div id="incorrect-box-wrapper">

      <Header as="h2">Incorrect Questions</Header>
      {currentQuiz.incorrectQs.map((question)=>{
        return <IncorrectItem key={question.id} question={question} />
      })}
    </div>
  )
}


export default IncorrectBox
