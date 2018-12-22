import React from "react"
import {Header} from 'semantic-ui-react'
import IncorrectItem from "./IncorrectItem"

const IncorrectBox = ({currentQuiz}) => {

  return(
    <div id="incorrect-box-wrapper">

      <Header as="h2" textAlign="center">Incorrect Questions</Header>

      {currentQuiz.incorrectQs.map((question)=>{
        return <IncorrectItem key={question.id} question={question} />
      })}
      
    </div>
  )
}


export default IncorrectBox
