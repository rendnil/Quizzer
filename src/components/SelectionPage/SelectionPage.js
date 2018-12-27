//category selection page
import React from "react"
import { connect } from 'react-redux'
import {Button, Segment, Dimmer, Loader, Image} from 'semantic-ui-react'
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

  if (props.loading){
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    )
  }else{
    return(
      <div className="selection-page-wrapper">
        <CategoryGrid />
        {!props.selectedCategory? <InfoMessage message="Select a category to start!" />: null}
        {renderStartQuiz()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    selectedCategory: state.selectedCategory,
    loading: state.categories.loading
  }
}

export default connect(mapStateToProps)(SelectionPage)
