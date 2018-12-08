import { combineReducers } from 'redux';
import categoriesReducer from "./categoriesReducer"
import allQuestionsReducer from "./allQuestionsReducer"


export default combineReducers({
  categories: categoriesReducer,
  allQuestions: allQuestionsReducer
})
