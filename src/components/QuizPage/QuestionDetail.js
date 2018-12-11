import React from "react"
import {Segment} from 'semantic-ui-react'

class QuestionDetail extends React.Component{

  render(){
    console.log("detail", this.props);
    return(
      <Segment>
        <h1>{this.props.question.prompt}</h1>

      </Segment>
    )
  }
}



export default QuestionDetail
