import React from "react"
import {Segment} from 'semantic-ui-react'

class CategoryBox extends React.Component{
  render(){
    return(
      <Segment textAlign="center">
        <h1>{this.props.category.name}</h1>
      </Segment>

    )
  }
}

export default CategoryBox
