import React from "react"
import {Header} from 'semantic-ui-react'
import "../../css/SelectionPage.css"

  const WelcomeBanner = () => {
    return(
      <div id="banner">
        <Header as="h1" textAlign='center'>
          Welcome To Quizzer!
        </Header>
      </div>
    )
  }



export default WelcomeBanner
