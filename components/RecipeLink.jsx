
function RecipeLink(props){

    return(<div className='recipe-tags'>
        <h4>{props.recipe.title}</h4>
        <img src={props.recipe.img} alt={props.recipe.alt} />
        <button className="view-recipe" onClick={() => alert(props.recipe.key)}>View Recipe</button>
        <div className='post-actions'>
            <button  onClick={() => alert(props.recipe.key)}>Save</button>
            <button  onClick={() => alert(props.recipe.key)}>Discuss</button>
            <button  onClick={() => alert(props.recipe.key)}>Share</button>
        </div>
    </div>)
}

export default RecipeLink