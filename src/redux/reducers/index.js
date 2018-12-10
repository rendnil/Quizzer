import { combineReducers } from 'redux';
import categoriesReducer from "./categoriesReducer"
import allQuestionsReducer from "./allQuestionsReducer"
import selectCategoryReducer from "./selectCategoryReducer"
import currentQuizReducer from "./currentQuizReducer"


export default combineReducers({
  categories: categoriesReducer,
  allQuestions: allQuestionsReducer,
  selectedCategory: selectCategoryReducer,
  currentQuiz: currentQuizReducer
})
