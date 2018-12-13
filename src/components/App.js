import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SelectionPage from "./SelectionPage/SelectionPage"
import QuizPage from "./QuizPage/QuizPage"
import ResultPage from "./ResultPage/ResultPage"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route exact path = "/" render = {()=> <SelectionPage/>}/>
            <Route exact path = "/quiz" render = {()=> <QuizPage/>}/>
            <Route exact path = "/results" render = {()=> <ResultPage/>}/>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
