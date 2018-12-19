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
            <div id="start-button">
              <NavLink to = "/quiz">
                <Button onClick={handleClick} size="massive" primary basic>
                  Start {props.selectedCategory.name} Quiz
                </Button>
              </NavLink>
              </div>
          )
        }
      }

// <div style={{textAlign:"center", width:"25%", margin:"auto"}}>

    return(
      <div style={{maxWidth:"90%", margin:"auto"}}>
        <WelcomeBanner/>
        <CategoryGrid />
        {renderStartQuiz()}
      </div>
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
