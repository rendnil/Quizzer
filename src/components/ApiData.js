import React from "react"
import { connect } from 'react-redux'



class ApiData extends React.Component{

  componentDidMount(){

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

}


export default connect(mapStateToProps, mapDispatchToProps)(ApiData)
