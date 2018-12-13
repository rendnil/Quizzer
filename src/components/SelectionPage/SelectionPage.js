import React from "react"
import { connect } from 'react-redux'

import WelcomeBanner from "./WelcomeBanner"
import CategoryGrid from "./CategoryGrid"

  const SelectionPage = ({selectedCategory}) => {
    const renderStartQuiz = ()=>{
        if(selectedCategory){
          console.log("wassup");
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
