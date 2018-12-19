import React from "react"
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';

import WelcomeBanner from "./WelcomeBanner"
import CategoryGrid from "./CategoryGrid"
import {fetchQuestions} from "../../redux/actions/fetchQuestionsAction"

  const SelectionPage = (props) => {

    const renderStartQuiz = ()=>{
        if(props.selectedCategory){
          return(
            <div id="start-button">
              <NavLink to = "/quiz">
                <Button size="massive" primary basic>
                  Start {props.selectedCategory.name} Quiz
                </Button>
              </NavLink>
              </div>
          )
        }
      }

    return(
      <div className="selection-page-wrapper">
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
