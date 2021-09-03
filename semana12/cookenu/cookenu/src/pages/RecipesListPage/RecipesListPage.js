import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import { RecipeListContainer, AddRecipeButton } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { goToAddRecipes } from "../../routes/Coordinator"
import { useHistory } from "react-router"
import { Add } from "@material-ui/icons"


const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    
    const onClickCard = () =>{

    }

    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={onClickCard}
            />
        )

    })

    return (
        <RecipeListContainer>
            {recipeCards}
            <AddRecipeButton
                color={"primary"}
                onClick={() => goToAddRecipes(history)}
            >
             <Add/>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage