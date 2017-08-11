import React, { Component } from 'react';

//assets
import '../styles/App.css';

//My components
//import SearchBar from "./components/search_bar";
import AppHeader from "./app_header";
import AppFooter from "./app_footer";
import RecipeList from "./recipe_list";

//helpers
import {config} from '../constants/config/firebase';
import * as firebase from 'firebase';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }
    componentDidMount(){
        // Initialize Firebase
        firebase.initializeApp(config);
    }
    render() {
        return (
        <div className="App">
            <AppHeader firebase={firebase}/>

            <RecipeList title={"Jonathon's Recipes"} firebase={firebase} user={this.state.user}/>

            <AppFooter/>
        </div>
        );
    }
}


