//individual answer items
import React from "react"
import { connect } from 'react-redux'
import {selectAnswer} from "../../redux/actions/selectAnswer"
import {Segment} from 'semantic-ui-react'


const AnswerItem = (props)=>{
  //method for selecting an answer
  const handleClick = () => {
    props.selectAnswer(props.answer)
  }

  //check to see if answer is the selected answer
  //change segment color if selected
  const checkSelected = () =>{
    if (props.answer===props.selectedAnswer){
      return(
        <Segment inverted color="blue" onClick={handleClick}>
          <h3>{props.answer.toUpperCase()}</h3>
        </Segment>
      )
    }else{
      return(
        <Segment onClick={handleClick}>
          <h3>{props.answer.toUpperCase()}</h3>
        </Segment>
      )
    }
  }

  return(
    checkSelected()
  )

}

const mapDispatchToProps = (dispatch) => {
  return{selectAnswer: (answer)=>dispatch(selectAnswer(answer))}
}

const mapStateToProps = (state) => {
  return{selectedAnswer: state.currentQuiz.selectedAnswer}
}


export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem)
