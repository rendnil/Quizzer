import React from "react"
import { connect } from 'react-redux'
import {fetchCategories} from "../redux/actions/fetchCategoriesAction"
import {fetchQuestions} from "../redux/actions/fetchQuestionsAction"


class ApiData extends React.Component{

  componentDidMount(){
    this.props.fetchCategories()
  }


  render(){
    // console.log("STATE",this.props.state);
    // console.log("current quiz", this.props.currentQuiz)
    return(
      <React.Fragment/>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state, currentQuiz:state.currentQuiz.questions}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: ()=>dispatch(fetchCategories())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ApiData)
