import React from "react"
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';

import WelcomeBanner from "./WelcomeBanner"
import CategoryGrid from "./CategoryGrid"
import {fetchQuestions} from "../../redux/actions/fetchQuestionsAction"

  const SelectionPage = (props) => {

    const handleClick = () => {
      // console.log("hey");
      // props.fetchQuestions(props.selectedCategory.id)
    }


    const renderStartQuiz = ()=>{
        if(props.selectedCategory){
          return(
              <NavLink to = "/quiz">
              <Button onClick={handleClick} primary basic>
                Start {props.selectedCategory.name} Quiz
                </Button>
              </NavLink>
          )
        }
      }


    return(
      <React.Fragment>
        <WelcomeBanner/>
        <CategoryGrid />
        {renderStartQuiz()}
      </React.Fragment>
    )
  }


  const mapStateToProps = (state) =>{
    return{
      selectedCategory: state.selectedCategory
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return{
      fetchQuestions: (id) => dispatch(fetchQuestions(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)
