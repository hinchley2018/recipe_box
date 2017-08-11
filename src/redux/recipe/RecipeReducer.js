/**
 * Created by jhinchley on 7/21/17.
 */
import {ADD_RECIPE} from "../../constants/ActionTypes";

export function RecipeReducer(state = {}, action){
    switch (action.type){
        case ADD_RECIPE:{
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    ingredients: action.ingredients,
                    instructions: action.instructions
                }
            ]
        }
        default:
            return state;
    }

}