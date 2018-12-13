import React from "react"
import { connect } from 'react-redux'
import {Segment, Button} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';

const ResultPage = ({currentQuiz}) => {

  return(
    <React.Fragment>
      <Segment>
        <h1>Quiz Over</h1>
      </Segment>

      <Segment>
        <h1>
          Results: You Answered {currentQuiz.correctQs.length} out of {currentQuiz.questions.length} Correctly
        </h1>
      </Segment>

      <NavLink to = "/">
        <Button primary basic>
          Back To Home
        </Button>
      </NavLink>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {currentQuiz: state.currentQuiz}
}

export default connect(mapStateToProps)(ResultPage)
