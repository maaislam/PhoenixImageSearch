
import React from 'react';

class SearchBar extends React.Component {

    state = {searchTerm: '', loading:null}

    onInputChange = (event) =>{

        this.setState({searchTerm: event.target.value});
    };

    onButtonClick = (event) => {
        event.preventDefault();
        
        this.props.onSearchClick(this.state.searchTerm)
        
    };

    onKeyPress = (event) => {

        if(event.key === 'Enter'){
            this.props.onEnterPress(this.state.searchTerm);
        }
    };

    render() {
        return (
            <div className="ui segment fluid action input">
                
                <input 
                    type="text" 
                    placeholder="Search Image..."
                    value = {this.state.searchTerm} 
                    onChange = {this.onInputChange}
                    onKeyUp = {this.onKeyPress}>      
                </input>
                <div onClick = {this.onButtonClick} className="ui button">Search</div>
            </div>
        );
    }
}

export default SearchBar;
