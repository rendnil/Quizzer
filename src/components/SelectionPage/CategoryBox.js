import React from "react"
import {NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchQuestions} from "../../redux/actions/fetchQuestionsAction"
import {selectCategory} from "../../redux/actions/selectCategory"
import {Segment} from 'semantic-ui-react'
import "../../css/SelectionPage.css"

class CategoryBox extends React.Component{

  handleClick = () => {
    console.log("calling fetch questions");
    this.props.selectCategory(this.props.category)
    this.props.fetchQuestions(this.props.category.id)
  }

  checkSelected(){
    if (this.props.selectedCategory && this.props.category.id===this.props.selectedCategory.id){
      return(
        <Segment textAlign = "center" inverted color="orange" onClick={this.handleClick}>
          <h3>{this.props.category.name}</h3>
        </Segment>
      )
    }else{
      return(
        <Segment textAlign = "center" onClick={this.handleClick}>
          <h3>{this.props.category.name}</h3>
        </Segment>
      )
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.checkSelected()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    selectedCategory: state.selectedCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchQuestions: (id) => dispatch(fetchQuestions(id)),
    selectCategory: (category) => dispatch(selectCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBox)
