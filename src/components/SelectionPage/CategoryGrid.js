import React from "react"
import { connect } from 'react-redux'

import {Grid, Container} from 'semantic-ui-react'
import CategoryBox from "./CategoryBox"


const CategoryGrid =  ({categories, state}) => {
  console.log("WHOLE STATE",state);
  return(
    <div style={{marginBottom:"2%"}}>
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
    state:state
  }
}


export default connect(mapStateToProps)(CategoryGrid)
