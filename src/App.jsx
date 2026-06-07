import { useState, useEffect } from 'react'
import './App.css'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

const MY_ID = import.meta.env.VITE_APP_ID;
const MY_KEY = import.meta.env.VITE_APP_KEY;
 
  
 const [mySearch,setMySearch] = useState("");
 const [myRecipes,setMyRecipes] = useState([]);
 const [wordSubmitted,setWordSubmitted] = useState("coconut");

useEffect(() => {
  const getRecipe = async() => {
  const response = await fetch(
`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
  }
  getRecipe()
}, [wordSubmitted])

const myRecipeSearch = (e) => {
 setMySearch(e.target.value)
}
const finalSearch = (e) => {
e.preventDefault()
setWordSubmitted(mySearch)
}
  return (
  <div className='App'> 
    <div className='container'>  
      <img src="tomato.avif" alt="tomato" className='cover'/>
       <h1>Find Your Favorite Recipe</h1>
    <form onSubmit={finalSearch} className='search-form'>
      <input className='search'
         placeholder='Search...'
         onChange={myRecipeSearch}
         value={mySearch}>
      </input>
       <button>Click here</button>
    </form>
    </div>
    {myRecipes.map((element, index) => (
      <MyRecipesComponent
       key={index}
       label={element.recipe.label} 
       image={element.recipe.image} 
       ingredientLines ={element.recipe.ingredientLines}
       calories={element.recipe.calories}/>
  ))}
    </div>
  );
}

export default App;
