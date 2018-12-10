import React from "react"
import { connect } from 'react-redux'

import {Grid, Container} from 'semantic-ui-react'
import CategoryBox from "./CategoryBox"


const CategoryGrid =  ({categories}) => {
  return(
    <React.Fragment>
      <Grid columns={4}>
        <Grid.Row>
        {categories.map((category)=>{
          return(
            <Grid.Column >
              <CategoryBox category={category}/>
           </Grid.Column>

         )
        })}
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}


export default connect(mapStateToProps)(CategoryGrid)
