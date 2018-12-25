import React from "react"
import { connect } from 'react-redux'
import {Grid} from 'semantic-ui-react'
import CategoryBox from "./CategoryBox"


const CategoryGrid =  ({categories}) => {
  return(
    <div className="category-grid-wrapper">
      <Grid columns={4}>
        {categories.map((category)=>{
          return(
            <Grid.Column key={category.id}>
              <CategoryBox category={category}/>
            </Grid.Column>
         )
        })}
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

export default connect(mapStateToProps)(CategoryGrid)
