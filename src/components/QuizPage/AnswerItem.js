import React from "react"
import {Segment} from 'semantic-ui-react'

class AnswerItem extends React.Component{
  render(){
    return(
      <Segment>
        <h3>{this.props.answer}</h3>
      </Segment>
    )
  }
}




export default AnswerItem
