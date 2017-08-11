import React, {Component} from 'react';


//helpers
import {renderRecipes, getRecipes} from '../helper/recipe';

//modals
import AddRecipeModal from "./modals/add_recipe";

export default class RecipeList extends Component {
    constructor(props){
        super(props);

    }

    render(){
        let {user, title, firebase} = this.props;

        //TODO which field to use from user?
        var userID = user;
        return (
            <div>
                <h2>{title}</h2>
                <ul className="list-group">
                    {renderRecipes(getRecipes(firebase, userID))}
                </ul>

                <AddRecipeModal />
            </div>
        );
    }


}