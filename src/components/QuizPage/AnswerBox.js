import React from "react"
import AnswerItem from "./AnswerItem"
import {Segment} from 'semantic-ui-react'


const AnswerBox = ({answers}) => {
  return(
    <div id="answers-wrapper">
      {answers.map((answer)=>{
        return <AnswerItem key={answer} answer={answer} />
      })}
    </div>
  )
}


export default AnswerBox
