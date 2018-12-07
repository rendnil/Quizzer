import React from "react"
import { connect } from 'react-redux'
import {fetchCategories} from "../redux/actions/fetchCategoriesAction"


class ApiData extends React.Component{

  componentDidMount(){
    this.props.fetchCategories()
  }


  render(){
    console.log("STATE",this.props.state);
    return(
      <React.Fragment/>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state}
}

const mapDispatchToProps = (dispatch) => {
  return {fetchCategories: ()=>dispatch(fetchCategories())}
}


export default connect(mapStateToProps, mapDispatchToProps)(ApiData)
