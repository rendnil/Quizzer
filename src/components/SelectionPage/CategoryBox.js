//individual category box
import React from "react"
import { connect } from 'react-redux'
import {fetchQuestions} from "../../redux/actions/fetchQuestionsAction"
import {selectCategory} from "../../redux/actions/selectCategory"
import {Segment} from 'semantic-ui-react'


const CategoryBox = (props) =>{

  //on category click
  //select Category
  //fetch questions for this category
  const handleClick = () => {
    props.selectCategory(props.category)
    props.fetchQuestions(props.category.id)
  }

  //check to see is this category is the selected category
  // if so, change segment color to reflect selection
  const checkSelected = ()=>{
    if (props.selectedCategory && props.category.id===props.selectedCategory.id){
      return(
        <Segment textAlign = "center" inverted color="orange" onClick={handleClick}>
          <h3>{props.category.name}</h3>
        </Segment>
      )
    }else{
      return(
        <Segment textAlign = "center" onClick={handleClick}>
          <h3>{props.category.name}</h3>
        </Segment>
      )
    }
  }

  return(
    <React.Fragment>
      {checkSelected()}
    </React.Fragment>
  )
}

const mapStateToProps = (state) =>{
  return{selectedCategory: state.selectedCategory}
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchQuestions: (id) => dispatch(fetchQuestions(id)),
    selectCategory: (category) => dispatch(selectCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBox)
