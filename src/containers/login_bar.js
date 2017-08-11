import React, {Component} from 'react';
import '../styles/login_bar.css';

import {renderLogin} from '../helper/login';

export default class LoginBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e){
        e.preventDefault();
        let {firebase} = this.props;
        var provider = new firebase.auth.GoogleAuthProvider();
        console.log("how is ",this);
        var user;
        //alert("Display a login modal");
        var myThis = this;
        firebase.auth().signInWithPopup(provider).then(function (result) {
            //Google Access Token use to access Google API
            var token = result.credential.accessToken;

            user = result.user;
            //console.log("user:",user);
            if(user){
                myThis.setState({imageURL:user.photoURL});
            }

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMsg = error.message;
            console.log(errorCode,errorMsg);
        })

    }
    render() {
        console.log("what is ",this);
        return (
            <div className="login_bar">
                <form onSubmit={this.handleOnSubmit}>
                    {renderLogin(this.state.user)}

                </form>
            </div>
        );
    }
}