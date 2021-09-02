import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import {RecipeListContainer} from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"


const RecipesListPage = () => {
    useProtectedPage()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    console.log(recipes)

    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
            title={recipe.title}
            image={recipe.image}
            onClick={() => null}
            />
        )

    })
    
    return (
        <div>
            {recipeCards}
        </div>
    )
}

export default RecipesListPage