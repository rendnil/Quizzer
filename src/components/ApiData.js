import React from "react"
import { connect } from 'react-redux'
import {fetchCategories} from "../redux/actions/fetchCategoriesAction"
import {fetchQuestions} from "../redux/actions/fetchQuestionsAction"


class ApiData extends React.Component{

  componentDidMount(){
    this.props.fetchCategories()
    this.props.fetchQuestions(1)
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
  return {
    fetchCategories: ()=>dispatch(fetchCategories()),
    fetchQuestions: (id)=>dispatch(fetchQuestions(id))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ApiData)
