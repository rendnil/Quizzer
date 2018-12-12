import React from "react"
import {Segment, Button} from 'semantic-ui-react'
import AnswerBox from "./AnswerBox"

class QuestionDetail extends React.Component{

  render(){
    console.log("detail", this.props);
    return(
      <Segment>
        <h1>{this.props.question.prompt}</h1>
        <h2>Answers</h2>
        <AnswerBox answers={this.props.question.answers}/>

      </Segment>
    )
  }
}



export default QuestionDetail
