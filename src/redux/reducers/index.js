import { combineReducers } from 'redux';
import categoriesReducer from "./categoriesReducer"
import selectCategoryReducer from "./selectCategoryReducer"
import currentQuizReducer from "./currentQuizReducer"


export default combineReducers({
  categories: categoriesReducer,
  selectedCategory: selectCategoryReducer,
  currentQuiz: currentQuizReducer
})
