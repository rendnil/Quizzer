import React from "react"
import { connect } from 'react-redux'
import {incrementQuestionNumber} from "../../redux/actions/incrementQuestionNumber"
import {selectAnswer} from "../../redux/actions/selectAnswer"
import {Segment} from 'semantic-ui-react'




class AnswerItem extends React.Component{

  handleClick = () => {
    console.log(this)
    this.props.selectAnswer(this.props.answer)
  }

  checkSelected(){
    if (this.props.answer===this.props.selectedAnswer){
      return(
        <Segment inverted color="blue" onClick={this.handleClick}>
          <h3>{this.props.answer}</h3>
        </Segment>
      )
    }else{
      return(
        <Segment onClick={this.handleClick}>
          <h3>{this.props.answer}</h3>
        </Segment>
      )
    }
  }


  render(){
    return(
    this.checkSelected()
  )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    incrementQuestionNumber: ()=>dispatch(incrementQuestionNumber()),
    selectAnswer: (answer)=>dispatch(selectAnswer(answer))
  }
}

const mapStateToProps = (state) => {
  return{selectedAnswer: state.currentQuiz.selectedAnswer}
}



export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem)
