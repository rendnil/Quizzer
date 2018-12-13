import React from "react"
import { connect } from 'react-redux'
import {Segment, Button} from 'semantic-ui-react'

const ResultPage = (props) => {

  return(
    <React.Fragment>
      <Segment>
        <h1>Quiz Over</h1>
      </Segment>



    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {currentQuiz: state.currentQuiz}
}

export default connect(mapStateToProps)(ResultPage)
