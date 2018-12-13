import React from "react"
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';

import WelcomeBanner from "./WelcomeBanner"
import CategoryGrid from "./CategoryGrid"

  const SelectionPage = ({selectedCategory}) => {
    const renderStartQuiz = ()=>{
        if(selectedCategory){
          return(
            <Button primary basic>
              <NavLink to = "/quiz">
                Start {selectedCategory.name} Quiz
              </NavLink>
            </Button>
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

export default connect(mapStateToProps)(SelectionPage)
