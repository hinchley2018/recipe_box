import React, {} from 'react';

//assets
import logo from '../assets/logo.svg';
import '../styles/App.css';

//components
import LoginBar from "../containers/login_bar.js";

const AppHeader = ({firebase})=> {
    return(
        <div className="App-header">
            <LoginBar firebase={firebase}/>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to RecipeBox</h2>
            <div>
                Powered by Some Recipe API...
            </div>
        </div>
    );
};

export default AppHeader;