//wrapper for individual answer items
import React from "react"
import AnswerItem from "./AnswerItem"

const AnswerBox = ({answers}) => {
  return(
    <div id="answers-wrapper">
    {/* iterate over answer objs*/}
      {answers.map((answer)=>{
        return <AnswerItem key={answer} answer={answer} />
      })}
    </div>
  )
}

export default AnswerBox
