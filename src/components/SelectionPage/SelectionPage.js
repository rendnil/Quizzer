//category selection page
import React from "react"
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom';
import "../../css/SelectionPage.css"
import CategoryGrid from "./CategoryGrid"
import InfoMessage from "./InfoMessage"


const SelectionPage = (props) => {

  //method for rendering the start quiz btn
  //check to see if a category has been selected first
  const renderStartQuiz = ()=>{
      if(props.selectedCategory){
        return(
          <div id="start-button">
            <NavLink to = "/quiz">
              <Button size="massive" color="green" basic>
                Start {props.selectedCategory.name} Quiz
              </Button>
            </NavLink>
            </div>
        )
      }
    }

  return(
    <div className="selection-page-wrapper">
      <CategoryGrid />
      {!props.selectedCategory? <InfoMessage message="Select a Category to Begin" />: null}
      {renderStartQuiz()}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{selectedCategory: state.selectedCategory}
}

export default connect(mapStateToProps)(SelectionPage)
