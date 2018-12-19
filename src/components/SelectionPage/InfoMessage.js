import React from "react"
import {Message} from 'semantic-ui-react'
import "../../css/SelectionPage.css"

  const InfoMessage = ({message}) => {
    return(
      <Message id="start-message" color="teal" header={message}/>
    )
  }

export default InfoMessage
