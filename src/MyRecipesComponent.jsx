function MyRecipesComponent({label, image, ingredientLines, calories}) {



    return(
    <div>
        <div className="container">
         <h2>{label}</h2>
        </div>
        <div className="container">
        <img src={image}/>
       </div>  
     <ul className="container list">
    {ingredientLines.map((ingredient, index)=> (
    <li key={index}>
    - {ingredient}</li>
    ))}
    </ul>
      <div className="container">
    <p>{calories. toFixed()} Calories</p>
  </div> 
</div>
    )
}

export default MyRecipesComponent;