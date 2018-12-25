import React from "react"
import { connect } from 'react-redux'
import {fetchCategories} from "../redux/actions/fetchCategoriesAction"



class ApiData extends React.Component{

  componentDidMount(){
    this.props.fetchCategories()
  }


  render(){
    return(
      <React.Fragment/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: ()=>dispatch(fetchCategories())
  }
}

export default connect(null, mapDispatchToProps)(ApiData)
