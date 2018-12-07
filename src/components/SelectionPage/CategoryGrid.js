import React from "react"
import { connect } from 'react-redux'


const CategoryGrid =  ({categories}) => {
  return(
    <React.Fragment>
      {categories.map((category)=>{
        return <h1>{category.name}</h1>
      })}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}


export default connect(mapStateToProps)(CategoryGrid)
