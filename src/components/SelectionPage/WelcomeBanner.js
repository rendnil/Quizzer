import React from "react"
import {Header} from 'semantic-ui-react'

  const WelcomeBanner = () => {
    return(
      <div style={{marginBottom: "2%"}}>
        <Header as="h1" textAlign='center'>
          Welcome To Quizzer!
        </Header>
      </div>

    )
  }



export default WelcomeBanner
