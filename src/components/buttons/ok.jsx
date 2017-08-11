import React from 'react';

const OkButton = (props) => {
    if (props.showOk){
        return (
            <div>
                <button
                    onClick={this.props.onclick}
                    disabled={this.props.disabled}
                    className="btn"
                >{props.label}</button>
            </div>
        );
    }
    else{
        return null;
    }
};

export default OkButton;