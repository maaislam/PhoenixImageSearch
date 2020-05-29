import React from 'react';

const LoadingAnim = (props) => {
    
        return (
            
            <div style = {{zIndex:'20', marginTop: '-10rem', height: '100vh', width:'100vw'}} class="ui container">
                <div class="ui inverted active dimmer">
                    <div class="ui medium text loader">{props.message}</div>
                </div>
                <p></p>
            </div>        
        );
    
};

LoadingAnim.defaultProps = {

message: 'Loading...'
};

export default LoadingAnim;

