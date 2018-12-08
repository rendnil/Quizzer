
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


export default class QuestionsAdapter{

  static fetchCategories(){
    return (
      fetch(`${API_BASE_URL}/categories`)
      .then(r=>r.json())
    )
  }

  static fetchCategoryQuestions(id){
    return (
      fetch(`${API_BASE_URL}/categories/${id}`)
      .then(r=>r.json())
    )
  }
  
}
