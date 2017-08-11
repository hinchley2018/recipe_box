/**
 * Created by jhinchley on 7/20/17.
 */

import React, {} from 'react';

import '../styles/recipe.css';
import ViewRecipeModal from "../components/modals/view_recipe";

//in case there are no recipes for that user
const EmptyList = () =>{
    return(
        <div>
            <h3>You don't have any recipes right now, click Add to add some</h3>
        </div>
    );
};

export function renderRecipes(recipes) {
    const recipesList = recipes.map((recipe) =>{
        return <ViewRecipeModal key={recipe.id} title={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions}/>
    });
    if (recipes.length > 0) {
        return recipesList;
    }
    else {
        return (<EmptyList/>);
    }
}

export function getRecipes(firebase, userID){
    //this will be the list of recipes that is returned for currently logged in user
    const usersRecipes = [
        {
            id: 1,
            name: 'Potato Salad',
            ingredients: [
                {id: "Potato", content: "Potato"},
                {id: "Carrot", content: "Carrot"}
            ],
            instructions: [
                {id: 1, content: "Mash the potatoes"},
                {id: 2, content: "Add Carrots to Bowl"}
            ]
        }
    ];

    //get ref to fb db
    //var databaseRef = firebase.database().ref().child('recipes');

    //callback called baaed on event
    //databaseRef.on('value', snapshot => console.log(snapshot.val()));

    return usersRecipes;
}