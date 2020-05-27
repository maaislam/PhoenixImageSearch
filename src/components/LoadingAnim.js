import React from 'react';

const LoadingAnim = (props) => {
    
        return (
            
            <div className="ui active dimmer">
                <div className="ui medium text loader">{props.message}</div>
            </div>          
        );
    
};

LoadingAnim.defaultProps = {

message: 'Loading...'
};

export default LoadingAnim;

