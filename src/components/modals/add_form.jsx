import React, {Component} from 'react';
import '../../styles/modals.css';

import ItemList from "../item_list";
import OrderedList from "../ordered_list";
import {ADD_INGREDIENTS_PROMPT, ADD_INSTRUCTIONS_PROMPT, RECIPE_NAME} from "../../constants/add-form";
import {addRecipeAction} from "../../redux/recipe/RecipeActions";
import {connect} from "react-redux";

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: RECIPE_NAME,
            currentIngredient: ADD_INGREDIENTS_PROMPT,
            currentInstruction: ADD_INSTRUCTIONS_PROMPT,
            ingredients: [],
            instructions: []
        };
        this.addRecipe = this.addRecipe.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.addInstruction = this.addInstruction.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
        this.handleInstructionChange = this.handleInstructionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    //TODO: move some of this elsewhere clean up
    render() {
        //console.log(this.state.ingredients);
        return (
            <div>
                <div className="closeButton">
                    <button className="btn" onClick={this.props.closeModal}>Close</button>
                </div>

                    <h1><input type="text" value={this.state.recipeName} onChange={this.handleNameChange}/></h1>
                    <br/><br/>
                <form onSubmit={this.addIngredient} >
                    <input type="text" value={this.state.currentIngredient} onChange={this.handleIngredientChange}/>
                </form>
                    <br/><br/>
                <form onSubmit={this.addInstruction}>
                    <input type="text" value={this.state.currentInstruction} onChange={this.handleInstructionChange}/>
                </form>


                <ItemList title={"Ingredients"} items={this.state.ingredients}/>

                <OrderedList title={"Instructions"} items={this.state.instructions}/>
                <form onSubmit={this.addRecipe}>
                    <input type="submit" className="btn" value="Save"/>
                </form>
            </div>
        );
    }

    addIngredient(e) {
        e.preventDefault();
        //console.log("Ingredient?", this.state.currentIngredient);
        var newIngredient = {id: this.state.ingredients.length, content: this.state.currentIngredient};
        this.setState({
            ingredients: [...this.state.ingredients, newIngredient],
            currentIngredient: ADD_INGREDIENTS_PROMPT
        });
        //console.log(this.state.ingredients);

    }
    addInstruction(e) {
        e.preventDefault();
        //console.log("Ingredient?", this.state.currentIngredient);

        var newInstruction = {id: this.state.instructions.length, content: this.state.currentInstruction};
        this.setState({
            instructions: [...this.state.instructions, newInstruction],
            currentInstruction: ADD_INSTRUCTIONS_PROMPT
        });
    }

    addRecipe(e) {
        e.preventDefault();
        //TODO: get all the good stuff from state and send it to action
        addRecipeAction(this.state.recipeName, this.state.ingredients, this.state.instructions);
    }

    handleIngredientChange(e) {
        this.setState({
            currentIngredient: e.target.value
        });
    }

    handleInstructionChange(e) {
        this.setState({
            currentInstruction: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            recipeName: e.target.value
        });
    }


}

function mapDispatchToProps(dispatch){
    return{
        onAddRecipe: () => dispatch(addRecipeAction)
    };
}
export default connect(null, mapDispatchToProps)(AddForm);