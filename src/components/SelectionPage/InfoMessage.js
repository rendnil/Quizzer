//home page info message
import React from "react"
import {Message} from 'semantic-ui-react'

const InfoMessage = ({message}) => {
  return(
    <Message id="start-message" warning header={message}/>
  )
}

export default InfoMessage
