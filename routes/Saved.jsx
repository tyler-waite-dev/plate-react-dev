import RecipeLink from "../components/RecipeLink";
import '../css/saved.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Saved() {

    const [numRecipes, setNumRecipes] = useState(10);

    function generateRecipe(key){
        return {
            profpic: '/img/avatar1.jpeg',
            name: 'Tyler James ThisIsBigName',
            recipe: {
                title: 'Homeade Pot Pie',
                img: '/img/flour.jpeg',
                alt: 'logo',
                saves: 100,
                discussed: 200,
                shared: 300,
                key: 1
            },
            key: key
        }
    }

    const recipeData = [];

    for(let i=0; i<numRecipes; i++){
        recipeData.push(generateRecipe(i));
    }

    const recipes = recipeData.map(somePost => {
        return (<div className="saved">
            <img className="prof-pic" src={somePost.profpic} alt={"Photo of"+somePost.profpic} onClick={()=> navigate('/profile/view/'+somePost.key)} />
            <h3>{somePost.name}</h3>
            <RecipeLink recipe={somePost.recipe} />
        </div>);
    })

    return(<div id="saved-page">
        <h1>Saved Recipes ({numRecipes})</h1>
        {recipes}
    </div>);
}


export default Saved