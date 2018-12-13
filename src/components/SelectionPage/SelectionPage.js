import React from "react"
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'

import WelcomeBanner from "./WelcomeBanner"
import CategoryGrid from "./CategoryGrid"

  const SelectionPage = ({selectedCategory}) => {
    const renderStartQuiz = ()=>{
        if(selectedCategory){
          return(
            <Button>Start {selectedCategory.name} Quiz</Button>
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
