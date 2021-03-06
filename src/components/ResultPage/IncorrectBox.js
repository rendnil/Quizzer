//wrapper for incorrect questions
import React from "react"
import {Header} from 'semantic-ui-react'
import IncorrectItem from "./IncorrectItem"

const IncorrectBox = ({currentQuiz}) => {

  return(
    <div id="incorrect-box-wrapper">

      <Header as="h2" textAlign="center">Incorrect Answers</Header>
      {/* iterate over incorrect question objs */}
      {currentQuiz.incorrectQs.map((question)=>{
        return <IncorrectItem key={question.id} question={question} />
      })}
    </div>
  )
}

export default IncorrectBox
