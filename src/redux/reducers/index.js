import { combineReducers } from 'redux';
import categoriesReducer from "./categoriesReducer"
import allQuestionsReducer from "./allQuestionsReducer"
import selectCategoryReducer from "./selectCategoryReducer"


export default combineReducers({
  categories: categoriesReducer,
  allQuestions: allQuestionsReducer,
  selectedCategory: selectCategoryReducer
})
