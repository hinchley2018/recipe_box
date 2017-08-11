/**
 * Created by jhinchley on 7/8/17.
 */
import { combineReducers } from 'redux';
import {RecipeReducer} from '../recipe/RecipeReducer';
const rootReducer = combineReducers({
    recipes: RecipeReducer
});

export default rootReducer;