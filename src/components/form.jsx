import { useState } from "react";
const articles = [
   {
      id: 1,
      title:"Temperature da record!",
      text: "Oggi si è registrato un record storico di temperature in Europa, con 20 gradi sopra la media stagionale."
   },
   {
      id: 2,
      title:"Nuovi studi importanti",
      text: "Un nuovo studio scientifico rivela che l'intelligenza artificiale potrebbe rivoluzionare la diagnosi delle malattie rare."
   },
   {
      id: 3,
      title:"Nuova missione spaziale",
      text: "La NASA ha annunciato il lancio di una nuova missione verso Marte per cercare tracce di vita passata."
   }
]
function Form() {
   const [articlesList, setArticlesList] = useState(articles);
   const [newArticle, setNewArticle] = useState({title: ''})

   const handlerSubmit = (e) => {
      e.preventDefault();
      const newArticlesList = [newArticle, ...articlesList]
      setArticlesList(newArticlesList)
   }
   const handlerNewArticle = (e) => {
      const newArticle = {
         id: 4,
         title: e.target.value
      }
      setNewArticle(newArticle);
   }


   return (
     <div className="container form-container">
      <form action="" onSubmit={handlerSubmit}>
         <input 
         type="text" 
         placeholder="Titolo dell'articolo"
         value={newArticle.text}
         onChange={handlerNewArticle}
         required/>
         <button className="btn" type="submit">Invia</button>
      </form>

      <div className="articles-section">
         {articlesList.map((article) => (
               <div key={article.id} className="article">
                  <h1>{article.title}</h1>
                  <p>{article.text}</p>
               </div>
         ))}
      </div>
     </div>
   )
 }
 
 export default Form