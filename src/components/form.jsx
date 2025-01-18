import { useState } from "react";
const articles = [
   "articolo 1",
   "articolo 2",
   "articolo 3"
]
function Form() {
   const [articlesList, setArticlesList] = useState(articles);
   const [newArticle, setNewArticle] = useState("")

   const handlerSubmit = (e) => {
      e.preventDefault();
      const newArticlesList = [newArticle, ...articlesList]
      setArticlesList(newArticlesList)
   }

   return (
     <div className="container form-container">
      <form action="" onSubmit={handlerSubmit}>
         <input 
         type="text" 
         placeholder="Titolo dell'articolo"
         value={newArticle}
         onChange={(e) => setNewArticle( e.target.value)}
         required/>
         <button className="btn" type="submit">Invia</button>
      </form>

      <div className="articles-section">
         {articlesList.map((article, index) => (
               <div key={index} className="article">
                  <h1>{article}</h1>
                  <p>testo dell'articolo</p>
               </div>
         ))}
      </div>
     </div>
   )
 }
 
 export default Form