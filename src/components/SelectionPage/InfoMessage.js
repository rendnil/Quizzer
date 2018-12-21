import React from "react"
import {Message} from 'semantic-ui-react'
import "../../css/SelectionPage.css"

  const InfoMessage = ({message}) => {
    return(
      <Message id="start-message" warning header={message}/>
    )
  }

export default InfoMessage
