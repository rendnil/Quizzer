//adapter class for interacting with API
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


export default class QuestionsAdapter{
  //method for fetching category details
  static fetchCategories(){
    return (
      fetch(`${API_BASE_URL}/categories`)
      .then(r=>r.json())
    )
  }
  //method for fetching questions for a specific category 
  static fetchCategoryQuestions(id){
    return (
      fetch(`${API_BASE_URL}/categories/${id}`)
      .then(r=>r.json())
    )
  }

}
