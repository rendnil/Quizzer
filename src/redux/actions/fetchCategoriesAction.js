import QuestionsAdapter from "../../apis/QuestionsAdapter"

export const fetchCategories = () => {
  return (dispatch) => {
    QuestionsAdapter.fetchCategories()
    .then((data) => {
      dispatch({type:"FETCH_CATEGORIES", payload: data})
    })
  }
}
