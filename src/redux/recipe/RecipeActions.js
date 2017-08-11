/**
 * Created by jhinchley on 7/19/17.
 */

import * as types from '../../constants/ActionTypes';

//TODO: we want to get the info from the recipe form
//TODO: get maxID + 1 from firebase
let nextRecipeID = 0;
export const addRecipeAction = (name, ingredients, instructions) =>(
    {
        type: types.ADD_RECIPE,
        id: nextRecipeID++,
        name,
        ingredients,
        instructions
    }
);


export function editRecipe(recipeID){
    //TODO: we want to get the info from the recipe form then update the recipe
    return {
        type: types.UPDATE_RECIPE,

    };
}

export function deleteRecipe(recipeID){
    //TODO: just delete this recipe
    return {
        type: types.DELETE_RECIPE,

    };
}