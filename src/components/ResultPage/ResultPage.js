import React from "react"
import { connect } from 'react-redux'
import {Segment, Button, Message} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';
import "../../css/ResultPage.css"

const ResultPage = ({currentQuiz}) => {

  return(
    <div id="result-page-wrapper">
      <Message info id="result-message">
        <Message.Header>YOU ANSWERED</Message.Header>
        <Message.Content>{currentQuiz.correctQs.length} out of {currentQuiz.questions.length} Correctly</Message.Content>
      </Message>

        <div id="back-home-btn">
          <NavLink to = "/">
            <Button color="yellow" size="large">
              Back to Home
            </Button>
          </NavLink>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {currentQuiz: state.currentQuiz}
}

export default connect(mapStateToProps)(ResultPage)
