/**
 * Created by jhinchley on 7/21/17.
 */


import React from "react";

const LoggedInContent =(user)=>{
    return(
        <div>
            <button className="btn btn-primary">Login</button>
            <img src={user.imageURL} alt="boohoo" width={200} height={200}/>
        </div>
    );
};
const NotLoggedInContent =(user)=>{
    return(
        <div>
            <button className="btn btn-primary">Login</button>
        </div>
    );
};

export function renderLogin(user) {
    if(user){
        return (<LoggedInContent/>);
    }
    else{
        return(<NotLoggedInContent/>);
    }
}