import React from "react"
import { connect } from 'react-redux'

import {Grid, Container} from 'semantic-ui-react'


const CategoryGrid =  ({categories}) => {
  return(
    <React.Fragment>
      <Grid columns={4}>
        <Grid.Row>
        {categories.map((category)=>{
          return(

            <Grid.Column>

           <h1>{category.name}</h1>
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
