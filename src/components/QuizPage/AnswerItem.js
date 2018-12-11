import React from "react"
import { connect } from 'react-redux'
import {incrementQuestionNumber} from "../../redux/actions/incrementQuestionNumber"
import {Segment} from 'semantic-ui-react'




class AnswerItem extends React.Component{

  handleClick = () => {
    this.props.incrementQuestionNumber()
  }

  render(){
    return(
      <Segment onClick={this.handleClick}>
        <h3>{this.props.answer}</h3>
      </Segment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    incrementQuestionNumber: ()=>dispatch(incrementQuestionNumber())
  }
}



export default connect(null, mapDispatchToProps)(AnswerItem)
