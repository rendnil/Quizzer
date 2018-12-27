//action creator for fetching category names
import QuestionsAdapter from "../../apis/QuestionsAdapter"

export const fetchCategories = () => {

  return (dispatch) => {
    dispatch({type:"LOADING"})
    QuestionsAdapter.fetchCategories()
    .then((data) => {
      dispatch({type:"FETCH_CATEGORIES", payload: data})
    })
  }
}
