//Quiz resut page
import React from "react"
import { connect } from 'react-redux'
import {Button, Message} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';
import {Redirect} from "react-router"
import IncorrectBox from "./IncorrectBox"
import "../../css/ResultPage.css"

const ResultPage = ({currentQuiz}) => {

  //method for rendering incorrectly answered questions
  //with their correct answers
  const incorrectAnswerRender = () => {
    //check to see if there are any incorrectly answered questions
    if (currentQuiz.incorrectQs.length){
      return(
        <IncorrectBox currentQuiz={currentQuiz} />
      )
    }else{
      return null
    }
  }

  if (currentQuiz){
    return(
      <div id="result-page-wrapper">
        <Message info id="result-message">
          <Message.Header>YOU ANSWERED</Message.Header>

          {/* show the correctly answered metric*/}
          <Message.Content>{currentQuiz.correctQs.length} out of {currentQuiz.questions.length} Correctly</Message.Content>
        </Message>

        {/*button to navigate back to category screen */}
        <div id="back-home-btn">
          <NavLink to = "/">
            <Button color="yellow" size="large">Back to Home</Button>
          </NavLink>
        </div>

        {incorrectAnswerRender()}
      </div>
    )
  }else{
    return(<Redirect to ="/" />)
  }
}

const mapStateToProps = (state) => {
  return {currentQuiz: state.currentQuiz}
}

export default connect(mapStateToProps)(ResultPage)
