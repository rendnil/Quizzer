import React from "react"
import {Segment} from 'semantic-ui-react'

class CategoryBox extends React.Component{

  handleClick = () => {
    console.log(this.props.category.name)
  }



  render(){
    return(
      <Segment textAlign="center" onClick={this.handleClick}>
        <h1>{this.props.category.name}</h1>
      </Segment>

    )
  }
}

export default CategoryBox
