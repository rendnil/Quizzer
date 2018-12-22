import React from "react"
import {Header} from 'semantic-ui-react'

const IncorrectBox = ({currentQuiz}) => {
  return(
    <div id="incorrect-box-wrapper">

      <Header as="h2">
        Incorrect Questions
      </Header>
    </div>
  )
}


export default IncorrectBox
