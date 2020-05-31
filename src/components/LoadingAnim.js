import React from 'react';

const LoadingAnim = (props) => {


        
    
        return (
            
            <div style = {{zIndex:'20', marginTop: '-10rem', height: '100vh', width:'100vw'}} className="ui container">
                <div className="ui inverted active dimmer">
                    <div className="ui big text loader">{props.message}</div>
                </div>
                <p></p>
            </div>        
        );
    
};

LoadingAnim.defaultProps = {

message: 'Loading...'
};

export default LoadingAnim;

