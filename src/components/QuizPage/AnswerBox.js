import React from "react"
import AnswerItem from "./AnswerItem"
import {Segment} from 'semantic-ui-react'


const AnswerBox = ({answers}) => {
  return(
    <Segment>

      {answers.map((answer)=>{
        return <AnswerItem key={answer} answer={answer} />
      })}

    </Segment>
  )
}


export default AnswerBox
