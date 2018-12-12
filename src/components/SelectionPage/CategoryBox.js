import React from "react"
import {NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchQuestions} from "../../redux/actions/fetchQuestionsAction"
import {Segment} from 'semantic-ui-react'

class CategoryBox extends React.Component{

  handleClick = () => {
    console.log("calling fetch questions");
    this.props.fetchQuestions(this.props.category.id)
  }



  render(){
    return(
      <Segment textAlign="center" onClick={this.handleClick}>
        <NavLink to = "/quiz">
          <h1>{this.props.category.name}</h1>
        </NavLink>
      </Segment>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchQuestions: (id) => dispatch(fetchQuestions(id))
  }
}

export default connect(null, mapDispatchToProps)(CategoryBox)
